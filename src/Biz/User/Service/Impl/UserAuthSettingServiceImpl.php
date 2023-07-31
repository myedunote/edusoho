<?php

namespace Biz\User\Service\Impl;

use Biz\BaseService;
use Biz\System\Service\SettingService;
use Biz\User\Service\UserAuthSettingService;

class UserAuthSettingServiceImpl extends BaseService implements UserAuthSettingService
{
    public function update($auth)
    {
        $this->getSettingService()->set('auth', $auth);
        $this->notifyUserProtocolUpdate($auth);
    }

    protected function notifyUserProtocolUpdate($auth)
    {
        $this->dispatch('user.protocol.update', [
            'userTerms' => $auth['user_terms'] ?? 'closed',
            'userTermsBody' => $auth['user_terms_body'] ?? '',
            'privacyPolicy' => $auth['privacy_policy'] ?? 'closed',
            'privacyPolicyBody' => $auth['privacy_policy_body'] ?? '',
        ]);
    }

    /**
     * @return SettingService
     */
    protected function getSettingService()
    {
        return $this->biz->service('System:SettingService');
    }
}
