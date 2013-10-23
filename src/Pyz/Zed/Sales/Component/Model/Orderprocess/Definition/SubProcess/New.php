<?php

/**
 * @property \Generated\Zed\Sales\Component\SalesFactory $factory
 * @property \ProjectA_Zed_Sales_Component_Model_Orderprocess_StateMachine_Setup $setup
 */
<<<<<<< HEAD

class Pyz_Zed_Sales_Component_Model_Orderprocess_Definition_Subprocess_New extends \ProjectA_Zed_Sales_Component_Model_Orderprocess_Definition_Abstract implements
=======
class Pyz_Zed_Sales_Component_Model_Orderprocess_Definition_SubProcess_New extends ProjectA_Zed_Sales_Component_Model_Orderprocess_Definition_Abstract implements
>>>>>>> 339f3cd03951fe311fcc3e5dd49913a0e016b4f4
    Pyz_Zed_Sales_Component_Interface_OrderprocessConstant
{

    /**
     * @param string $processName
     */
    public function __construct ($processName = 'New Subprocess')
    {
        parent::__construct($processName);
    }

    protected function createDefinition ()
    {
        $this->getNewSetup();
        $this->addTransitions();
        $this->addMetaInfo();
        $this->addCommands();
        $this->addFlags();
    }

    protected function addTransitions()
    {
    }

    protected function addCommands()
    {
    }

    protected function addFlags()
    {
    }

    protected function addMetaInfo()
    {
        $states = [
            self::STATE_NEW,
        ];

        foreach ($states as $state) {
            $this->setup->addStateMetaInfo($state, 'group', $this->getName());
        }
    }
}
