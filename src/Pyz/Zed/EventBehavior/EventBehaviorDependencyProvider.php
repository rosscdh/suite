<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\EventBehavior;

use Spryker\Zed\AvailabilityStorage\Communication\Plugin\Event\AvailabilityEventResourceQueryContainerPlugin;
use Spryker\Zed\CategoryStorage\Communication\Plugin\Event\CategoryNodeEventResourceQueryContainerPlugin;
use Spryker\Zed\CategoryStorage\Communication\Plugin\Event\CategoryTreeEventResourceQueryContainerPlugin;
use Spryker\Zed\EventBehavior\EventBehaviorDependencyProvider as SprykerEventBehaviorDependencyProvider;
use Spryker\Zed\GlossaryStorage\Communication\Plugin\Event\GlossaryEventResourceQueryContainerPlugin;
use Spryker\Zed\NavigationStorage\Communication\Plugin\Event\NavigationEventResourceQueryContainerPlugin;
use Spryker\Zed\PriceProductStorage\Communication\Plugin\Event\PriceProductAbstractEventResourceQueryContainerPlugin;
use Spryker\Zed\PriceProductStorage\Communication\Plugin\Event\PriceProductConcreteEventResourceQueryContainerPlugin;
use Spryker\Zed\ProductCategoryFilterStorage\Communication\Plugin\Event\ProductCategoryFilterEventResourceQueryContainerPlugin;
use Spryker\Zed\ProductCategoryStorage\Communication\Plugin\Event\ProductCategoryEventResourceQueryContainerPlugin;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\Event\ProductPageEventResourceQueryContainerPlugin;
use Spryker\Zed\ProductSearchConfigStorage\Communication\Plugin\Event\ProductSearchConfigEventResourceQueryContainerPlugin;
use Spryker\Zed\ProductStorage\Communication\Plugin\Event\ProductAbstractEventResourceQueryContainerPlugin;
use Spryker\Zed\ProductStorage\Communication\Plugin\Event\ProductConcreteEventResourceQueryContainerPlugin;
use Spryker\Zed\UrlStorage\Communication\Plugin\Event\RedirectEventResourceQueryContainerPlugin;
use Spryker\Zed\UrlStorage\Communication\Plugin\Event\UrlEventResourceQueryContainerPlugin;

class EventBehaviorDependencyProvider extends SprykerEventBehaviorDependencyProvider
{
    /**
     * @return \Spryker\Zed\EventBehavior\Dependency\Plugin\EventResourcePluginInterface[]
     */
    protected function getEventTriggerResourcePlugins()
    {
        return [
            new ProductPageEventResourceQueryContainerPlugin(),
            new AvailabilityEventResourceQueryContainerPlugin(),
            new CategoryTreeEventResourceQueryContainerPlugin(),
            new CategoryNodeEventResourceQueryContainerPlugin(),
            new GlossaryEventResourceQueryContainerPlugin(),
            new NavigationEventResourceQueryContainerPlugin(),
            new PriceProductConcreteEventResourceQueryContainerPlugin(),
            new PriceProductAbstractEventResourceQueryContainerPlugin(),
            new ProductCategoryFilterEventResourceQueryContainerPlugin(),
            new ProductCategoryEventResourceQueryContainerPlugin(),
            new ProductSearchConfigEventResourceQueryContainerPlugin(),
            new ProductAbstractEventResourceQueryContainerPlugin(),
            new ProductConcreteEventResourceQueryContainerPlugin(),
            new UrlEventResourceQueryContainerPlugin(),
            new RedirectEventResourceQueryContainerPlugin(),
        ];
    }
}
