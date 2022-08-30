<?php

namespace ApiBundle\Security\Firewall;

use ApiBundle\Api\Exception\ErrorCode;
use Biz\User\UserException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Csrf\CsrfToken;

class SessionAuthenticationListener extends BaseAuthenticationListener
{
    /**
     * @TODO key写死了
     */
    private $sessionKey = '_security_main';

    public function handle(Request $request)
    {
        if (null !== $this->getTokenStorage()->getToken()) {
            return;
        }
        $sessionIgnore = $request->headers->get('SessionIgnore', false);
        $session = $this->container->get('session');
        if ((bool) $sessionIgnore || null === $session || null === $token = $session->get($this->sessionKey)) {
            return;
        }

        if (!$this->isCrsfTokenValid($request)) {
            if(0 === stripos($request->getPathInfo(), '/api/save_answer')
            || 0 === stripos($request->getPathInfo(), '/api/submit_answer')) {
                throw new HttpException(500, "页面停留时间过长，请刷新页面", null, [], ErrorCode::CSRF_TOKEN_INVALID);
            }
            return;
        }

        $token = unserialize($token);

        if ($token instanceof TokenInterface) {
            $token = $this->refreshUser($token);
        } elseif (null !== $token) {
            $token = null;
        }

        $this->getTokenStorage()->setToken($token);
    }

    private function isCrsfTokenValid(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $token = $request->headers->get('X-CSRF-Token');
        } else {
            $token = $request->request->get('_csrf_token', '');
        }

        return $this->container->get('security.csrf.token_manager')->isTokenValid(new CsrfToken('site', $token));
    }

    /**
     * Refreshes the user by reloading it from the user provider.
     *
     * @param TokenInterface $token
     *
     * @return TokenInterface|null
     *
     * @throws UserException
     */
    protected function refreshUser(TokenInterface $token)
    {
        $user = $token->getUser();
        if (!$user instanceof UserInterface) {
            return $token;
        }

        foreach ($this->getUserProviders() as $provider) {
            try {
                $refreshedUser = $provider->refreshUser($user);
                $token->setUser($refreshedUser);

                return $token;
            } catch (UnsupportedUserException $e) {
                // let's try the next user provider
            } catch (UsernameNotFoundException $e) {
                return null;
            }
        }

        throw UserException::NO_USER_PROVIDER();
    }

    /**
     * @TODO 目前UserProvider只能写死
     */
    private function getUserProviders()
    {
        return array(
            $this->container->get('topxia.user_provider'),
        );
    }
}
