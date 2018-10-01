<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Client\ProductStorage;

use Spryker\Client\AvailabilityStorage\Plugin\ProductViewAvailabilityStorageExpanderPlugin;
use Spryker\Client\PriceProductStorage\Plugin\ProductViewPriceExpanderPlugin;
use Spryker\Client\ProductStorage\Plugin\ProductViewVariantExpanderPlugin;
use Spryker\Client\ProductStorage\ProductStorageDependencyProvider as SprykerProductStorageDependencyProvider;

class ProductStorageDependencyProvider extends SprykerProductStorageDependencyProvider
{
    /**
     * @return \Spryker\Client\ProductStorage\Dependency\Plugin\ProductViewExpanderPluginInterface[]
     */
    protected function getProductViewExpanderPlugins()
    {
        /** @var \Spryker\Client\ProductStorage\Dependency\Plugin\ProductViewExpanderPluginInterface[] $plugins */
        $plugins = [
            new ProductViewVariantExpanderPlugin(),
            new ProductViewPriceExpanderPlugin(),
            new ProductViewAvailabilityStorageExpanderPlugin(),
        ];

        return $plugins;
    }

    /**
     * @return \Spryker\Client\ProductStorageExtension\Dependency\Plugin\ProductAbstractRestrictionPluginInterface[]
     */
    protected function getProductAbstractRestrictionPlugins(): array
    {
        return [];
    }

    /**
     * @return \Spryker\Client\ProductStorageExtension\Dependency\Plugin\ProductConcreteRestrictionPluginInterface[]
     */
    protected function getProductConcreteRestrictionPlugins(): array
    {
        return [];
    }
}
