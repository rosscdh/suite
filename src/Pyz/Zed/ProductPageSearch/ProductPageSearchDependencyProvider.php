<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\ProductPageSearch;

use Spryker\Shared\ProductPageSearch\ProductPageSearchConfig;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageDataExpander\PricePageDataLoaderExpanderPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageDataExpander\ProductCategoryPageDataLoaderExpanderPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageDataExpander\ProductImagePageDataLoaderExpanderPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageDataLoader\CategoryPageDataLoaderPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageDataLoader\ImagePageDataLoaderPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageDataLoader\PricePageDataLoaderPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageMapExpander\PricePageMapExpanderPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageMapExpander\ProductCategoryPageMapExpanderPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\PageMapExpander\ProductImagePageMapExpanderPlugin;
use Spryker\Zed\ProductPageSearch\ProductPageSearchDependencyProvider as SprykerProductPageSearchDependencyProvider;

class ProductPageSearchDependencyProvider extends SprykerProductPageSearchDependencyProvider
{
    public const PLUGIN_PRODUCT_LABEL_DATA = 'PLUGIN_PRODUCT_LABEL_DATA';

    /**
     * @return \Spryker\Zed\ProductPageSearch\Dependency\Plugin\ProductPageDataExpanderInterface[]
     */
    protected function getDataExpanderPlugins()
    {
        $dataExpanderPlugins = [];

        $dataExpanderPlugins[ProductPageSearchConfig::PLUGIN_PRODUCT_CATEGORY_PAGE_DATA] = new ProductCategoryPageDataLoaderExpanderPlugin();
        $dataExpanderPlugins[ProductPageSearchConfig::PLUGIN_PRODUCT_PRICE_PAGE_DATA] = new PricePageDataLoaderExpanderPlugin();
        $dataExpanderPlugins[ProductPageSearchConfig::PLUGIN_PRODUCT_IMAGE_PAGE_DATA] = new ProductImagePageDataLoaderExpanderPlugin();

        return $dataExpanderPlugins;
    }

    /**
     * @return \Spryker\Zed\ProductPageSearch\Dependency\Plugin\ProductPageMapExpanderInterface[]
     */
    protected function getMapExpanderPlugins()
    {
        return [
            new PricePageMapExpanderPlugin(),
            new ProductCategoryPageMapExpanderPlugin(),
            new ProductImagePageMapExpanderPlugin(),
        ];
    }

    /**
     * @return \Spryker\Zed\ProductPageSearchExtension\Dependency\Plugin\ProductPageDataLoaderPluginInterface[]
     */
    protected function getDataLoaderPlugins()
    {
        return [
            new ImagePageDataLoaderPlugin(),
            new CategoryPageDataLoaderPlugin(),
            new PricePageDataLoaderPlugin(),
        ];
    }
}
