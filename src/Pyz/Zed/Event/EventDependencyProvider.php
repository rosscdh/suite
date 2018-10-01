<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\Event;

use Spryker\Zed\AvailabilityStorage\Communication\Plugin\Event\Subscriber\AvailabilityStorageEventSubscriber;
use Spryker\Zed\CategoryStorage\Communication\Plugin\Event\Subscriber\CategoryStorageEventSubscriber;
use Spryker\Zed\Event\EventDependencyProvider as SprykerEventDependencyProvider;
use Spryker\Zed\GlossaryStorage\Communication\Plugin\Event\Subscriber\GlossaryStorageEventSubscriber;
use Spryker\Zed\NavigationStorage\Communication\Plugin\Event\Subscriber\NavigationStorageEventSubscriber;
use Spryker\Zed\PriceProductStorage\Communication\Plugin\Event\Subscriber\PriceProductStorageEventSubscriber;
use Spryker\Zed\ProductCategoryFilterStorage\Communication\Plugin\Event\Subscriber\ProductCategoryFilterStorageEventSubscriber;
use Spryker\Zed\ProductCategoryStorage\Communication\Plugin\Event\Subscriber\ProductCategoryStorageEventSubscriber;
use Spryker\Zed\ProductMeasurementUnitStorage\Communication\Plugin\Event\Subscriber\ProductMeasurementUnitStorageEventSubscriber;
use Spryker\Zed\ProductPageSearch\Communication\Plugin\Event\Subscriber\ProductPageSearchEventSubscriber;
use Spryker\Zed\ProductSearchConfigStorage\Communication\Plugin\Event\Subscriber\ProductSearchConfigStorageEventSubscriber;
use Spryker\Zed\ProductStorage\Communication\Plugin\Event\Subscriber\ProductStorageEventSubscriber;
use Spryker\Zed\UrlStorage\Communication\Plugin\Event\Subscriber\UrlStorageEventSubscriber;

class EventDependencyProvider extends SprykerEventDependencyProvider
{
    /**
     * @return \Spryker\Zed\Event\Dependency\EventCollectionInterface
     */
    public function getEventListenerCollection()
    {
        return parent::getEventListenerCollection();
    }

    /**
     * @return \Spryker\Zed\Event\Dependency\EventSubscriberCollectionInterface
     */
    public function getEventSubscriberCollection()
    {
        $eventSubscriberCollection = parent::getEventSubscriberCollection();

        /**
         * Storage Events
         */
        $eventSubscriberCollection->add(new GlossaryStorageEventSubscriber());
        $eventSubscriberCollection->add(new UrlStorageEventSubscriber());
        $eventSubscriberCollection->add(new AvailabilityStorageEventSubscriber());
        $eventSubscriberCollection->add(new CategoryStorageEventSubscriber());
        $eventSubscriberCollection->add(new NavigationStorageEventSubscriber());
        $eventSubscriberCollection->add(new PriceProductStorageEventSubscriber());
        $eventSubscriberCollection->add(new ProductStorageEventSubscriber());
        $eventSubscriberCollection->add(new ProductCategoryStorageEventSubscriber());
        $eventSubscriberCollection->add(new ProductCategoryFilterStorageEventSubscriber());
        $eventSubscriberCollection->add(new ProductSearchConfigStorageEventSubscriber());
        $eventSubscriberCollection->add(new ProductMeasurementUnitStorageEventSubscriber());

        /**
         * Search Events
         */
        $eventSubscriberCollection->add(new ProductPageSearchEventSubscriber());

        return $eventSubscriberCollection;
    }
}
