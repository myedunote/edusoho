<?php

namespace AppBundle\Common;

use Topxia\Service\Common\ServiceKernel;

class LiveWatermarkToolkit
{
    public static function build()
    {
        $liveCloudSetting = SettingToolkit::getSetting('live_cloud', []);
        if (empty($liveCloudSetting['live_watermark_enable']) || empty($liveCloudSetting['live_watermark_info'])) {
            return '';
        }
        $waterMark = '';
        foreach ($liveCloudSetting['live_watermark_info'] as $item) {
            $waterMark .= "{{{$item}}}";
        }
        $user = self::getServiceKernel()->getCurrentUser();
        $user = $user->toArray();
        $site = SettingToolkit::getSetting('site', []);
        $user['domain'] = $site['url'];

        return self::parsePattern($waterMark, $user);
    }

    protected static function parsePattern($pattern, $user)
    {
        $profile = self::getServiceKernel()->getBiz()->service('User:UserService')->getUserProfile($user['id']);

        $values = array_merge($user, $profile);
        $values = array_filter($values, function ($value) {
            return !is_array($value);
        });
        global $kernel;

        return $kernel->getContainer()->get('web.twig.extension')->simpleTemplateFilter($pattern, $values, '-');
    }

    protected static function getServiceKernel()
    {
        return ServiceKernel::instance();
    }
}
