<?php

namespace ApiBundle\Api\Resource\WrongBook;

use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use AppBundle\Common\ArrayToolkit;
use Biz\Activity\Service\ActivityService;
use Biz\Course\Service\CourseService;
use Biz\Course\Service\CourseSetService;
use Biz\ItemBankExercise\Service\ExerciseModuleService;
use Biz\Task\Service\TaskService;
use Biz\WrongBook\Service\WrongQuestionService;
use Biz\WrongBook\WrongBookException;
use Codeages\Biz\ItemBank\Answer\Service\AnswerQuestionReportService;
use Codeages\Biz\ItemBank\Item\Service\ItemCategoryService;
use Codeages\Biz\ItemBank\Item\Service\ItemService;

class WrongBookQuestionShow extends AbstractResource
{
    public function search(ApiRequest $request, $poolId)
    {
        $pool = $this->getWrongQuestionService()->getPool($poolId);

        if (empty($pool)) {
            throw WrongBookException::WRONG_QUESTION_BOOK_POOL_NOT_EXIST();
        }

        list($offset, $limit) = $this->getOffsetAndLimit($request);
        $conditions = $this->prepareConditions($poolId, $request->query->all());
        $orderBys = $this->prepareOrderBys($request->query->all());

        $wrongQuestions = $this->getWrongQuestionService()->searchWrongQuestionsWithCollect($conditions, $orderBys, $offset, $limit);
        $wrongQuestions = $this->makeWrongQuestionInfo($wrongQuestions, $conditions['answer_scene_ids']);
        $wrongQuestionCount = $this->getWrongQuestionService()->countWrongQuestionWithCollect($conditions);

        return $this->makePagingObject($wrongQuestions, $wrongQuestionCount, $offset, $limit);
    }

    protected function makeWrongQuestionInfo($wrongQuestions, $sceneIds)
    {
        $itemsWithQuestion = $this->getItemService()->findItemsByIds(ArrayToolkit::column($wrongQuestions, 'item_id'), true);
        $questionReports = $this->getAnswerQuestionReportService()->findByIds(ArrayToolkit::column($wrongQuestions, 'answer_question_report_id'));
        $itemIds = ArrayToolkit::column($wrongQuestions, 'item_id');
        $activityScenes = $this->getActivityScenes($sceneIds);
        $wrongQuestionScenes = $this->getWrongQuestionService()->findWrongQuestionsByUserIdAndItemIdAndSceneIds($this->getCurrentUser()->getId(), $itemIds, $sceneIds);
        $sources = $this->getCourseWrongQuestionSources($wrongQuestionScenes, $activityScenes);
        $wrongQuestionInfo = [];
        foreach ($wrongQuestions as $wrongQuestion) {
            $item = $itemsWithQuestion[$wrongQuestion['item_id']];
            $source = $sources[$wrongQuestion['item_id']];
            $item['submit_time'] = $wrongQuestion['submit_time'];
            $item['wrong_times'] = $wrongQuestion['wrong_times'];
            $item['sources'] = $source;
            foreach ($item['questions'] as &$question) {
                $question['report'] = $questionReports[$wrongQuestion['answer_question_report_id']];
                $question['sources'] = $source;
            }
            $wrongQuestionInfo[] = $item;
        }

        return $wrongQuestionInfo;
    }

    protected function getActivityScenes($sceneIds)
    {
        $activityScenes = [];
        array_walk($sceneIds, function ($sceneId) use (&$activityScenes) {
            $activityScenes[$sceneId] = $this->getActivityService()->getActivityByAnswerSceneId($sceneId);
        });

        return $activityScenes;
    }

    protected function getCourseWrongQuestionSources($wrongQuestionScenes, $activityScenes)
    {
        $sources = [];
        $tempSceneIds = [];
        $tempExercise = [];
        foreach ($wrongQuestionScenes as $wrongQuestion) {
            $itemId = $wrongQuestion['item_id'];
            $sceneId = $wrongQuestion['answer_scene_id'];
            $activity = $activityScenes[$sceneId];
            $inItemScene = empty($tempSceneIds[$itemId]) ? [] : $tempSceneIds[$itemId];
            $inSourceItem = empty($tempExercise[$itemId]) ? [] : $tempExercise[$itemId];
            if (!empty($activity) && in_array($activity['mediaType'], ['testpaper', 'homework', 'exercise'])) {
                if (!in_array($sceneId, $inItemScene)) {
                    $courseSet = $this->getCourseSetService()->getCourseSet($activity['fromCourseSetId']);
                    $courseTask = $this->getCourseTaskService()->getTaskByCourseIdAndActivityId($activity['fromCourseId'], $activity['id']);
                    if ($courseSet['parentId'] > 0) {
                        $mainSource = $courseSet['title'];
                    } else {
                        $course = $this->getCourseService()->getCourse($activity['fromCourseId']);
                        $mainSource = $course['title'];
                    }
                    $secondarySource = $courseTask['title'];
                    $sources[$itemId][] = empty($mainSource) ? $secondarySource : $mainSource.'-'.$secondarySource;
                    $tempSceneIds[$itemId][] = $sceneId;
                }
            } else {
                $exerciseModule = $this->getExerciseModuleService()->getByAnswerSceneId($sceneId);
                $exerciseSource = $this->bankExerciseSourceConstant();
                if (!in_array($exerciseSource[$exerciseModule['type']], $inSourceItem)) {
                    $sources[$itemId][] = $tempExercise[$itemId][] = $exerciseSource[$exerciseModule['type']];
                }
            }
        }

        return $sources;
    }

    protected function prepareConditions($poolId, $conditions)
    {
        $prepareConditions = [];
        $prepareConditions['pool_id'] = $poolId;
        $prepareConditions['status'] = 'wrong';
        $prepareConditions['user_id'] = $this->getCurrentUser()->getId();

        if (!in_array($conditions['targetType'], ['course', 'classroom', 'exercise'])) {
            throw WrongBookException::WRONG_QUESTION_TARGET_TYPE_REQUIRE();
        }

        $pool = 'wrong_question.'.$conditions['targetType'].'_pool';
        $prepareConditions['answer_scene_ids'] = $this->biz[$pool]->prepareSceneIds($poolId, $conditions);

        if ('exercise' === $conditions['targetType'] && 'chapter' === $conditions['exerciseMediaType'] && !empty($conditions['chapterId'])) {
            $childrenIds = $this->getItemCategoryService()->findCategoryChildrenIds($conditions['chapterId']);
            $prepareConditions['testpaper_ids'] = array_merge([$conditions['chapterId']], $childrenIds);
        }
        if ('exercise' === $conditions['targetType'] && 'testpaper' === $conditions['exerciseMediaType'] && !empty($conditions['testpaperId'])) {
            $prepareConditions['testpaper_id'] = $conditions['testpaperId'];
        }

        return $prepareConditions;
    }

    protected function prepareOrderBys($orderBys)
    {
        $prepareOrderBys = ['submit_time' => 'DESC'];

        if (!empty($orderBys['wrongTimesSort'])) {
            $prepareOrderBys = 'ASC' == $orderBys['wrongTimesSort'] ? ['wrong_times' => 'ASC'] : ['wrong_times' => 'DESC'];
        }

        return $prepareOrderBys;
    }

    protected function bankExerciseSourceConstant()
    {
        return [
            'chapter' => '章节练习',
            'assessment' => '考试练习',
        ];
    }

    /**
     * @return CourseService
     */
    protected function getCourseService()
    {
        return $this->service('Course:CourseService');
    }

    /**
     * @return CourseSetService
     */
    protected function getCourseSetService()
    {
        return $this->service('Course:CourseSetService');
    }

    /**
     * @return ItemService
     */
    protected function getItemService()
    {
        return $this->service('ItemBank:Item:ItemService');
    }

    /**
     * @return AnswerQuestionReportService
     */
    protected function getAnswerQuestionReportService()
    {
        return $this->service('ItemBank:Answer:AnswerQuestionReportService');
    }

    /**
     * @return WrongQuestionService
     */
    protected function getWrongQuestionService()
    {
        return $this->service('WrongBook:WrongQuestionService');
    }

    /**
     * @return ActivityService
     */
    protected function getActivityService()
    {
        return $this->service('Activity:ActivityService');
    }

    /**
     * @return ExerciseModuleService
     */
    protected function getExerciseModuleService()
    {
        return $this->service('ItemBankExercise:ExerciseModuleService');
    }

    /**
     * @return TaskService
     */
    protected function getCourseTaskService()
    {
        return  $this->service('Task:TaskService');
    }

    /**
     * @return ItemCategoryService
     */
    protected function getItemCategoryService()
    {
        return  $this->service('ItemBank:Item:ItemCategoryService');
    }
}
