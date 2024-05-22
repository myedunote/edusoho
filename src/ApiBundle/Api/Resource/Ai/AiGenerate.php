<?php

namespace ApiBundle\Api\Resource\Ai;

use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use Biz\AI\Constant\AIApp;
use Biz\AI\Service\AIService;
use Biz\Common\CommonException;
use Biz\Question\QuestionException;
use Biz\Question\Traits\QuestionAnswerModeTrait;
use Biz\User\UserException;
use Codeages\Biz\ItemBank\Answer\Service\AnswerRecordService;
use Codeages\Biz\ItemBank\Assessment\Service\AssessmentSectionItemService;
use Codeages\Biz\ItemBank\Item\Service\ItemService;

class AiGenerate extends AbstractResource
{
    use QuestionAnswerModeTrait;

    public function add(ApiRequest $request, $type)
    {
        if ('question_analysis' == $type) {
            return $this->generateQuestionAnalysis($request->request->all());
        }

        return [];
    }

    private function generateQuestionAnalysis($params)
    {
        if (!$this->getCurrentUser()->isLogin()) {
            throw UserException::UN_LOGIN();
        }
        if ('student' == $params['role']) {
            return $this->generateQuestionAnalysisForStudent($params);
        }
        if ('teacher' == $params['role']) {
            return $this->generateQuestionAnalysisForTeacher($params);
        }

        return [];
    }

    private function generateQuestionAnalysisForStudent($params)
    {
        $answerRecord = $this->getAnswerRecordService()->get($params['answerRecordId']);
        if (empty($answerRecord) || $this->getCurrentUser()->getId() != $answerRecord['user_id']) {
            throw UserException::PERMISSION_DENIED();
        }
        $question = $this->getItemService()->getQuestion($params['questionId']);
        if (empty($question)) {
            throw QuestionException::NOTFOUND_QUESTION();
        }
        $item = $this->getItemService()->getItemIncludeDeleted($question['item_id']);
        $sectionItem = $this->getSectionItemService()->getItemByAssessmentIdAndItemId($answerRecord['assessment_id'], $item['id']);
        if (empty($sectionItem)) {
            throw CommonException::ERROR_PARAMETER();
        }
        $question['material'] = $item['material'];
        $aiParams = $this->makeAIParamsFromQuestion($item['type'], $question);

        if (!$this->getAIService()->needGenerateNewAnswer($aiParams['app'], $aiParams['inputs'])) {
            $analysis = $this->getAIService()->getAnswerFromLocal($aiParams['app'], $aiParams['inputs']);
            if ('blocking' == $params['responseMode']) {
                return ['answer' => $this->parseAnswerFromStreamResponse($analysis)];
            }

            return $this->createStreamedResponse(function () use ($analysis) {
                foreach (array_filter(explode("\n\n", $analysis)) as $data) {
                    echo $data."\n\n";
                }
            });
        }

        if ('blocking' == $params['responseMode']) {
            return $this->responseBlocking($aiParams);
        }

        return $this->responseStreaming($aiParams);
    }

    private function generateQuestionAnalysisForTeacher($params)
    {
        if (!$this->getCurrentUser()->isTeacher() && !$this->getCurrentUser()->isAdmin()) {
            return [];
        }
        $aiParams = $this->makeInputsFromTeacherInput($params['type'], $params);

        return $this->responseStreaming($aiParams);
    }

    private function responseBlocking($params)
    {
        ob_start();
        $this->getAIService()->generateAnswer($params['app'], $params['inputs']);
        $response = ob_get_clean();

        return ['answer' => $this->parseAnswerFromStreamResponse($response)];
    }

    private function responseStreaming($params)
    {
        $that = $this;

        return $this->createStreamedResponse(function () use ($that, $params) {
            $that->getAIService()->generateAnswer($params['app'], $params['inputs']);
        });
    }

    private function makeAIParamsFromQuestion($type, $question)
    {
        if (in_array($type, ['single_choice', 'uncertain_choice', 'choice'])) {
            $options = '';
            $responsePoints = array_column($question['response_points'], 'single_choice' == $type ? 'radio' : 'checkbox');
            foreach ($responsePoints as $responsePoint) {
                $options .= "{$responsePoint['val']}.{$responsePoint['text']}\n";
            }

            return [
                'app' => AIApp::CHOICE_QUESTION_GENERATE_ANALYSIS,
                'inputs' => [
                    'stem' => $question['stem'],
                    'options' => $options,
                    'answer' => implode($question['answer']),
                ],
            ];
        }
        if ('determine' == $type) {
            return [
                'app' => AIApp::DETERMINE_QUESTION_GENERATE_ANALYSIS,
                'inputs' => [
                    'stem' => $question['stem'],
                    'answer' => 'T' == $question['answer'][0] ? '正确' : '错误',
                ],
            ];
        }
        if ('fill' == $type) {
            $answer = '';
            foreach ($question['answer'] as $key => $blankAnswer) {
                $blankAnswers = explode('|', $blankAnswer);
                $answer .= empty($answer) ? '' : ';';
                $answer .= 1 == '第'.($key + 1).'空的答案是'.count($blankAnswers) ? $blankAnswers[0] : implode('或', $blankAnswers);
            }

            return [
                'app' => AIApp::FILL_QUESTION_GENERATE_ANALYSIS,
                'inputs' => [
                    'stem' => $question['stem'],
                    'answer' => $answer,
                ],
            ];
        }
        if ('essay' == $type) {
            return [
                'app' => AIApp::ESSAY_QUESTION_GENERATE_ANALYSIS,
                'inputs' => [
                    'stem' => $question['stem'],
                    'answer' => $question['answer'][0],
                ],
            ];
        }
        if ('material' == $type) {
            $aiParams = $this->makeAIParamsFromQuestion($this->modeToType[$question['answer_mode']], $question);
            $aiParams['inputs']['material'] = $question['material'];

            return [
                'app' => $this->convertToMaterialApp($aiParams['app']),
                'inputs' => $aiParams['inputs'],
            ];
        }
    }

    private function makeInputsFromTeacherInput($type, $params)
    {
        if (in_array($type, ['single_choice', 'uncertain_choice', 'choice'])) {
            return [
                'app' => AIApp::CHOICE_QUESTION_GENERATE_ANALYSIS,
                'inputs' => [
                    'stem' => $params['stem'],
                    'options' => implode("\n", $params['options']),
                    'answer' => $params['answer'],
                ],
            ];
        }
        if ('determine' == $type) {
            return [
                'app' => AIApp::DETERMINE_QUESTION_GENERATE_ANALYSIS,
                'inputs' => [
                    'stem' => $params['stem'],
                    'answer' => $params['answer'],
                ],
            ];
        }
        if ('fill' == $type) {
            $answer = '';
            foreach ($params['answers'] as $key => $blankAnswer) {
                $blankAnswers = explode('|', $blankAnswer);
                $answer .= empty($answer) ? '' : ';';
                $answer .= 1 == '第'.($key + 1).'空的答案是'.count($blankAnswers) ? $blankAnswers[0] : implode('或', $blankAnswers);
            }

            return [
                'app' => AIApp::FILL_QUESTION_GENERATE_ANALYSIS,
                'inputs' => [
                    'stem' => $params['stem'],
                    'answer' => $answer,
                ],
            ];
        }
        if ('essay' == $type) {
            return [
                'app' => AIApp::ESSAY_QUESTION_GENERATE_ANALYSIS,
                'inputs' => [
                    'stem' => $params['stem'],
                    'answer' => $params['answer'],
                ],
            ];
        }
        list($itemType, $questionType) = explode('-', $type);
        if ('material' == $itemType) {
            $aiParams = $this->makeInputsFromTeacherInput($questionType, $params);
            $aiParams['inputs']['material'] = $params['material'];

            return [
                'app' => $this->convertToMaterialApp($aiParams['app']),
                'inputs' => $aiParams['inputs'],
            ];
        }
    }

    private function convertToMaterialApp($app)
    {
        return [
            AIApp::CHOICE_QUESTION_GENERATE_ANALYSIS => AIApp::MATERIAL_CHOICE_QUESTION_GENERATE_ANALYSIS,
            AIApp::DETERMINE_QUESTION_GENERATE_ANALYSIS => AIApp::MATERIAL_DETERMINE_QUESTION_GENERATE_ANALYSIS,
            AIApp::FILL_QUESTION_GENERATE_ANALYSIS => AIApp::MATERIAL_FILL_QUESTION_GENERATE_ANALYSIS,
            AIApp::ESSAY_QUESTION_GENERATE_ANALYSIS => AIApp::MATERIAL_ESSAY_QUESTION_GENERATE_ANALYSIS,
        ][$app];
    }

    private function parseAnswerFromStreamResponse($response)
    {
        $answer = '';
        foreach (array_filter(explode("\n\n", $response)) as $slice) {
            $data = json_decode(substr($slice, 6), true);
            if ('message' == $data['event']) {
                $answer .= $data['answer'];
            }
        }

        return $answer;
    }

    /**
     * @return AnswerRecordService
     */
    private function getAnswerRecordService()
    {
        return $this->service('ItemBank:Answer:AnswerRecordService');
    }

    /**
     * @return ItemService
     */
    private function getItemService()
    {
        return $this->service('ItemBank:Item:ItemService');
    }

    /**
     * @return AssessmentSectionItemService
     */
    private function getSectionItemService()
    {
        return $this->service('ItemBank:Assessment:AssessmentSectionItemService');
    }

    /**
     * @return AIService
     */
    private function getAIService()
    {
        return $this->service('AI:AIService');
    }
}
