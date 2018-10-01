<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Yves\CartPage;

use SprykerShop\Yves\CartPage\CartPageDependencyProvider as SprykerCartPageDependencyProvider;
use SprykerShop\Yves\CheckoutWidget\Plugin\CartPage\CheckoutBreadcrumbWidgetPlugin;
use SprykerShop\Yves\ProductMeasurementUnitWidget\Plugin\CartPage\QuantitySalesUnitWidgetPlugin;

class CartPageDependencyProvider extends SprykerCartPageDependencyProvider
{
    /**
     * @return array
     */
    protected function getCartPageWidgetPlugins(): array
    {
        return [
            CheckoutBreadcrumbWidgetPlugin::class,
            QuantitySalesUnitWidgetPlugin::class,
        ];
    }

    /**
     * @return \SprykerShop\Yves\CartPage\Dependency\Plugin\CartItemTransformerPluginInterface[]
     */
    protected function getCartItemTransformerPlugins(): array
    {
        return [];
    }
}
