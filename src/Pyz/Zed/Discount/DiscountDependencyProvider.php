<?php

/**
 * This file is part of the Spryker Suite.
 * For full license information, please view the LICENSE file that was distributed with this source code.
 */

namespace Pyz\Zed\Discount;

use Spryker\Zed\Discount\DiscountDependencyProvider as SprykerDiscountDependencyProvider;
use Spryker\Zed\SalesQuantity\Communication\Plugin\DiscountExtension\NonSplittableDiscountableItemTransformerStrategyPlugin;
use Spryker\Zed\ShipmentDiscountConnector\Communication\Plugin\DecisionRule\ShipmentCarrierDecisionRulePlugin;
use Spryker\Zed\ShipmentDiscountConnector\Communication\Plugin\DecisionRule\ShipmentMethodDecisionRulePlugin;
use Spryker\Zed\ShipmentDiscountConnector\Communication\Plugin\DecisionRule\ShipmentPriceDecisionRulePlugin;
use Spryker\Zed\ShipmentDiscountConnector\Communication\Plugin\DiscountCollector\ItemByShipmentCarrierPlugin;
use Spryker\Zed\ShipmentDiscountConnector\Communication\Plugin\DiscountCollector\ItemByShipmentMethodPlugin;
use Spryker\Zed\ShipmentDiscountConnector\Communication\Plugin\DiscountCollector\ItemByShipmentPricePlugin;
use Spryker\Zed\Store\Communication\Plugin\Form\StoreRelationToggleFormTypePlugin;

class DiscountDependencyProvider extends SprykerDiscountDependencyProvider
{
    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\DecisionRulePluginInterface[]
     */
    protected function getDecisionRulePlugins()
    {
        return array_merge(parent::getDecisionRulePlugins(), [
            new ShipmentCarrierDecisionRulePlugin(),
            new ShipmentMethodDecisionRulePlugin(),
            new ShipmentPriceDecisionRulePlugin(),
        ]);
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\CollectorPluginInterface[]
     */
    protected function getCollectorPlugins()
    {
        return array_merge(parent::getCollectorPlugins(), [
            new ItemByShipmentCarrierPlugin(),
            new ItemByShipmentMethodPlugin(),
            new ItemByShipmentPricePlugin(),
        ]);
    }

    /**
     * @return array
     */
    protected function getDiscountableItemFilterPlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\DiscountExtension\Dependency\Plugin\DiscountableItemTransformerStrategyPluginInterface[]
     */
    protected function getDiscountableItemTransformerStrategyPlugins(): array
    {
        return [
            new NonSplittableDiscountableItemTransformerStrategyPlugin(),
        ];
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\CollectorStrategyPluginInterface[]
     */
    protected function getCollectorStrategyPlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\DiscountPostCreatePluginInterface[]
     */
    protected function getDiscountPostCreatePlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\DiscountPostUpdatePluginInterface[]
     */
    protected function getDiscountPostUpdatePlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\DiscountConfigurationExpanderPluginInterface[]
     */
    protected function getDiscountConfigurationExpanderPlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\Form\DiscountFormExpanderPluginInterface[]
     */
    protected function getDiscountFormExpanderPlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\Form\DiscountFormDataProviderExpanderPluginInterface[]
     */
    protected function getDiscountFormDataProviderExpanderPlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\DiscountViewBlockProviderPluginInterface[]
     */
    protected function getDiscountViewTemplateProviderPlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Discount\Dependency\Plugin\DiscountApplicableFilterPluginInterface[]
     */
    protected function getDiscountApplicableFilterPlugins()
    {
        return [];
    }

    /**
     * @return \Spryker\Zed\Kernel\Communication\Form\FormTypeInterface
     */
    protected function getStoreRelationFormTypePlugin()
    {
        return new StoreRelationToggleFormTypePlugin();
    }
}
