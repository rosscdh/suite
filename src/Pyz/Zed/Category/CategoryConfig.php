<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\Category;

use Spryker\Zed\Category\CategoryConfig as CategoryCategoryConfig;

class CategoryConfig extends CategoryCategoryConfig
{
    /**
     * @return array
     */
    public function getTemplateList()
    {
        $templateList = parent::getTemplateList();

        return $templateList;
    }
}
