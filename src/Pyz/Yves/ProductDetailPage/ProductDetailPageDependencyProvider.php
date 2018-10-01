<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Yves\ProductDetailPage;

use Pyz\Yves\ExampleProductColorGroupWidget\Plugin\ProductDetailPage\ExampleProductColorGroupWidgetPlugin;
use SprykerShop\Yves\AvailabilityWidget\Plugin\ProductDetailPage\AvailabilityWidgetPlugin;
use SprykerShop\Yves\PriceProductVolumeWidget\Plugin\ProductDetailPage\PriceProductVolumeWidgetPlugin;
use SprykerShop\Yves\PriceWidget\Plugin\ProductDetailPage\PriceWidgetPlugin;
use SprykerShop\Yves\ProductCategoryWidget\Plugin\ProductDetailPage\ProductCategoryWidgetPlugin;
use SprykerShop\Yves\ProductDetailPage\ProductDetailPageDependencyProvider as SprykerShopProductDetailPageDependencyProvider;
use SprykerShop\Yves\ProductMeasurementUnitWidget\Plugin\ProductDetailPage\ProductMeasurementUnitWidgetPlugin;

class ProductDetailPageDependencyProvider extends SprykerShopProductDetailPageDependencyProvider
{
    /**
     * {@inheritdoc}
     *
     * @return string[]
     */
    protected function getProductDetailPageWidgetPlugins(): array
    {
        return [
            PriceWidgetPlugin::class,
            ProductCategoryWidgetPlugin::class,
            AvailabilityWidgetPlugin::class,
            ExampleProductColorGroupWidgetPlugin::class,
            PriceProductVolumeWidgetPlugin::class, #PriceProductVolumeFeature
            ProductMeasurementUnitWidgetPlugin::class,
        ];
    }
}
