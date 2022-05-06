<?php

namespace MarketingMallBundle\Api\Resource\MallCategory;

use ApiBundle\Api\ApiRequest;
use ApiBundle\Api\Resource\AbstractResource;
use Biz\Common\CommonException;
use Biz\Taxonomy\CategoryException;
use Biz\Taxonomy\Service\CategoryService;

class MallCategory extends AbstractResource
{
    public function search(ApiRequest $request)
    {
        $groupCode = $request->query->get('groupCode', '');
        $allowedGroupCodes = ['course', 'classroom'];
        if (!in_array($groupCode, $allowedGroupCodes, true)) {
            throw CommonException::ERROR_PARAMETER();
        }
        $group = $this->getCategoryService()->getGroupByCode($groupCode);
        if (!$group) {
            throw CategoryException::NOTFOUND_GROUP();
        }

        return $this->getCategoryService()->getCategoryStructureTree($group['id']);
    }

    /**
     * @return CategoryService
     */
    private function getCategoryService()
    {
        return $this->service('Taxonomy:CategoryService');
    }
}