<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\Cart;

use Spryker\Zed\Cart\CartDependencyProvider as SprykerCartDependencyProvider;
use Spryker\Zed\Cart\Communication\Plugin\SkuGroupKeyPlugin;
use Spryker\Zed\Discount\Communication\Plugin\Cart\DiscountQuoteChangeObserverPlugin;
use Spryker\Zed\Kernel\Container;
use Spryker\Zed\PriceCartConnector\Communication\Plugin\CartItemPricePlugin;
use Spryker\Zed\PriceCartConnector\Communication\Plugin\CartItemPricePreCheckPlugin;
use Spryker\Zed\ProductBundle\Communication\Plugin\Cart\BundleItemPriceQuoteChangeObserverPlugin;
use Spryker\Zed\ProductBundle\Communication\Plugin\Cart\CartBundleAvailabilityPreCheckPlugin;
use Spryker\Zed\ProductBundle\Communication\Plugin\Cart\CartBundleItemsPreReloadPlugin;
use Spryker\Zed\ProductBundle\Communication\Plugin\Cart\CartItemWithBundleGroupKeyExpanderPlugin;
use Spryker\Zed\ProductBundle\Communication\Plugin\Cart\CartPostSaveUpdateBundlesPlugin;
use Spryker\Zed\ProductBundle\Communication\Plugin\Cart\ExpandBundleItemsPlugin;
use Spryker\Zed\ProductBundle\Communication\Plugin\Cart\ExpandBundleItemsWithImagesPlugin;
use Spryker\Zed\ProductCartConnector\Communication\Plugin\ProductCartPlugin;
use Spryker\Zed\ProductCartConnector\Communication\Plugin\ProductExistsCartPreCheckPlugin;
use Spryker\Zed\ProductCartConnector\Communication\Plugin\RemoveInactiveItemsPreReloadPlugin;
use Spryker\Zed\SalesQuantity\Communication\Plugin\Cart\IsQuantitySplittableItemExpanderPlugin;
use Spryker\Zed\ShipmentCartConnector\Communication\Plugin\Cart\CartShipmentExpanderPlugin;
use Spryker\Zed\ShipmentCartConnector\Communication\Plugin\Cart\CartShipmentPreCheckPlugin;

class CartDependencyProvider extends SprykerCartDependencyProvider
{
    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\Cart\Dependency\ItemExpanderPluginInterface[]
     */
    protected function getExpanderPlugins(Container $container)
    {
        return [
            new ProductCartPlugin(),
            new IsQuantitySplittableItemExpanderPlugin(),
            new CartItemPricePlugin(),
            new ExpandBundleItemsPlugin(),
            new ExpandBundleItemsWithImagesPlugin(),
            new SkuGroupKeyPlugin(),
            new CartItemWithBundleGroupKeyExpanderPlugin(),
            new CartShipmentExpanderPlugin(),
        ];
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\CartExtension\Dependency\Plugin\CartPreCheckPluginInterface[]
     */
    protected function getCartPreCheckPlugins(Container $container)
    {
        return [
            new ProductExistsCartPreCheckPlugin(),
            new CartItemPricePreCheckPlugin(),
            new CartBundleAvailabilityPreCheckPlugin(),
            new CartShipmentPreCheckPlugin(),
        ];
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\Cart\Dependency\PostSavePluginInterface[]
     */
    protected function getPostSavePlugins(Container $container)
    {
        return [
            new CartPostSaveUpdateBundlesPlugin(),
        ];
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\CartExtension\Dependency\Plugin\PreReloadItemsPluginInterface[]
     */
    protected function getPreReloadPlugins(Container $container)
    {
        return [
            new CartBundleItemsPreReloadPlugin(),
            new RemoveInactiveItemsPreReloadPlugin(),
        ];
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\CartExtension\Dependency\Plugin\CartTerminationPluginInterface[]
     */
    protected function getTerminationPlugins(Container $container)
    {
        return [];
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\CartExtension\Dependency\Plugin\CartRemovalPreCheckPluginInterface[]
     */
    protected function getCartRemovalPreCheckPlugins(Container $container)
    {
        return [];
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\CartExtension\Dependency\Plugin\QuoteChangeObserverPluginInterface[]
     */
    protected function getQuoteChangeObserverPlugins(Container $container): array
    {
        return [
            new DiscountQuoteChangeObserverPlugin(),
            new BundleItemPriceQuoteChangeObserverPlugin(),
        ];
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\CartExtension\Dependency\Plugin\CartOperationStrategyPluginInterface[]
     */
    protected function getCartAddItemStrategyPlugins(Container $container): array
    {
        return [];
    }

    /**
     * @param \Spryker\Zed\Kernel\Container $container
     *
     * @return \Spryker\Zed\CartExtension\Dependency\Plugin\CartOperationStrategyPluginInterface[]
     */
    protected function getCartRemoveItemStrategyPlugins(Container $container): array
    {
        return [];
    }
}
