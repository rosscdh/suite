<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\Category;

use Spryker\Zed\Category\CategoryDependencyProvider as SprykerDependencyProvider;
use Spryker\Zed\Category\Communication\Plugin\CategoryUrlPathPrefixUpdaterPlugin;
use Spryker\Zed\CategoryNavigationConnector\Communication\Plugin\UpdateNavigationRelationPlugin;
use Spryker\Zed\ProductCategory\Communication\Plugin\ReadProductCategoryRelationPlugin;
use Spryker\Zed\ProductCategory\Communication\Plugin\RemoveProductCategoryRelationPlugin;
use Spryker\Zed\ProductCategory\Communication\Plugin\UpdateProductCategoryRelationPlugin;

class CategoryDependencyProvider extends SprykerDependencyProvider
{
    /**
     * @return \Spryker\Zed\Category\Dependency\Plugin\CategoryRelationDeletePluginInterface[]
     */
    protected function getRelationDeletePluginStack()
    {
        return [
            new RemoveProductCategoryRelationPlugin(),
        ];
    }

    /**
     * @return \Spryker\Zed\Category\Dependency\Plugin\CategoryRelationUpdatePluginInterface[]
     */
    protected function getRelationUpdatePluginStack()
    {
        return [
            new UpdateProductCategoryRelationPlugin(),
            new UpdateNavigationRelationPlugin(),
        ];
    }

    /**
     * @return \Spryker\Zed\Category\Dependency\Plugin\CategoryRelationReadPluginInterface[]
     */
    protected function getRelationReadPluginStack()
    {
        return [
            new ReadProductCategoryRelationPlugin(),
        ];
    }

    /**
     * @return array
     */
    protected function getCategoryFormPlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Category\Dependency\Plugin\CategoryUrlPathPluginInterface[]
     */
    protected function getCategoryUrlPathPlugins()
    {
        return [
            new CategoryUrlPathPrefixUpdaterPlugin(),
        ];
    }
}
