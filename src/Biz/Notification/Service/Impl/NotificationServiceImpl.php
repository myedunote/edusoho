<?php

namespace Biz\Notification\Service\Impl;

use AppBundle\Common\ArrayToolkit;
use AppBundle\Common\Exception\RuntimeException;
use Biz\BaseService;
use Biz\Common\CommonException;
use Biz\Notification\Dao\NotificationBatchDao;
use Biz\Notification\Dao\NotificationEventDao;
use Biz\Notification\Dao\NotificationStrategyDao;
use Biz\Notification\Service\NotificationService;
use Codeages\Biz\Framework\Dao\BatchUpdateHelper;

class NotificationServiceImpl extends BaseService implements NotificationService
{
    public function searchBatches($conditions, $orderbys, $start, $limit, $columns = [])
    {
        return $this->getNotificationBatchDao()->search($conditions, $orderbys, $start, $limit, $columns);
    }

    public function countBatches($conditions)
    {
        return $this->getNotificationBatchDao()->count($conditions);
    }

    public function getBatch($id)
    {
        return $this->getNotificationBatchDao()->get($id);
    }

    public function createBatch($batch)
    {
        if (!ArrayToolkit::requireds($batch, ['eventId', 'sn', 'strategyId', 'source'])) {
            $this->createNewException(CommonException::ERROR_PARAMETER_MISSING());
        }

        $batch = ArrayToolkit::parts($batch, ['eventId', 'sn', 'extra', 'strategyId', 'source']);

        return $this->getNotificationBatchDao()->create($batch);
    }

    public function updateBatch($id, $fields)
    {
        return $this->getNotificationBatchDao()->update($id, $fields);
    }

    public function getEvent($id)
    {
        return $this->getNotificationEventDao()->get($id);
    }

    public function findEventsByIds($ids)
    {
        return $this->getNotificationEventDao()->findByEventIds($ids);
    }

    public function createEvent($event)
    {
        if (!ArrayToolkit::requireds($event, ['title', 'content', 'totalCount', 'status'])) {
            $this->createNewException(CommonException::ERROR_PARAMETER_MISSING());
        }

        $event = ArrayToolkit::parts($event, ['title', 'content', 'totalCount', 'status']);

        return $this->getNotificationEventDao()->create($event);
    }

    public function createStrategy($strategy)
    {
        if (!ArrayToolkit::requireds($strategy, ['eventId', 'type', 'seq'])) {
            $this->createNewException(CommonException::ERROR_PARAMETER_MISSING());
        }

        $strategy = ArrayToolkit::parts($strategy, ['eventId', 'type', 'seq']);

        return $this->getNotificationStrategyDao()->create($strategy);
    }

    public function batchHandleNotificationResults($batchs)
    {
        if (empty($batchs)) {
            return [];
        }

        $batchs = array_filter($batchs, function ($item) {
            if ('finished' != $item['status']) {
                return true;
            }
        });
        $sns = ArrayToolkit::column($batchs, 'sn');
        try {
            $result = $this->getSDKNotificationService()->batchGetNotifications($sns);
        } catch (\Exception $e) {
            throw new RuntimeException('获取发送结果错误');
        }

        if (empty($result['data'])) {
            return [];
        }

        $cloudRecords = ArrayToolkit::index($result['data'], 'sn');
        $this->batchUpdateRecord($batchs, $cloudRecords);
    }

    public function createWeChatNotificationRecord($sn, $key, $data, $source)
    {
        global $kernel;
        $templates = $kernel->getContainer()->get('extension.manager')->getWeChatTemplates();
        $template = $templates[$key];
        $content = $this->spliceContent($template['detail'], $data);
        $event = [
            'title' => $this->trans($template['name']),
            'content' => $content,
            'totalCount' => 0,
            'status' => 'sending',
        ];
        $event = $this->createEvent($event);
        $strategy = [
            'eventId' => $event['id'],
            'type' => 'wechat',
            'seq' => 1,
        ];
        $strategy = $this->createStrategy($strategy);
        $batch = [
            'eventId' => $event['id'],
            'strategyId' => $strategy['id'],
            'sn' => $sn,
            'status' => 'created',
            'source' => $source,
        ];

        return $this->createBatch($batch);
    }

    public function createSmsNotificationRecord($batchId, $data, $smsParams)
    {
        global $kernel;
        $templates = $kernel->getContainer()->get('extension.manager')->getMessageSubscribeTemplates();
        $template = $templates[$smsParams['key']];
        $content = $this->spliceContent($template['smsDetail'][$smsParams['smsTemplateId']], $data);
        $event = [
            'title' => $this->trans($template['name']),
            'content' => $content,
            'totalCount' => $smsParams['sendNum'],
            'status' => 'sending',
        ];
        $event = $this->createEvent($event);
        $strategy = [
            'eventId' => $event['id'],
            'type' => 'sms',
            'seq' => 1,
        ];
        $strategy = $this->createStrategy($strategy);

        return $this->updateBatch($batchId, ['smsEventId' => $event['id']]);
    }

    protected function spliceContent($content, $data)
    {
        foreach ($data as $key => $value) {
            $content = str_replace('{{'.$key.'.DATA}}', $value['value'], $content);
        }

        return $content;
    }

    protected function batchUpdateRecord($batchs, $results)
    {
        $eventHelper = new BatchUpdateHelper($this->getNotificationEventDao());
        $batchHelper = new BatchUpdateHelper($this->getNotificationBatchDao());
        foreach ($batchs as $batch) {
            if (!empty($results[$batch['sn']]) && $results[$batch['sn']]['is_finished']) {
                $eventHelper->add('id', $batch['eventId'], [
                    'totalCount' => $results[$batch['sn']]['total_count'],
                    'succeedCount' => $results[$batch['sn']]['succeed_count'],
                    'status' => 'finish',
                    'reason' => empty($results[$batch['sn']]['failure_reason']) ? [] : $results[$batch['sn']]['failure_reason'],
                ]);
                $batchHelper->add('id', $batch['id'], ['status' => 'finished']);
            }
        }
        $eventHelper->flush();
        $batchHelper->flush();
    }

    protected function getSDKNotificationService()
    {
        return $this->biz['ESCloudSdk.notification'];
    }

    /**
     * @return NotificationBatchDao
     */
    protected function getNotificationBatchDao()
    {
        return $this->createDao('Notification:NotificationBatchDao');
    }

    /**
     * @return NotificationEventDao
     */
    protected function getNotificationEventDao()
    {
        return $this->createDao('Notification:NotificationEventDao');
    }

    /**
     * @return NotificationStrategyDao
     */
    protected function getNotificationStrategyDao()
    {
        return $this->createDao('Notification:NotificationStrategyDao');
    }
}
