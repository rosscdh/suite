<?php

namespace Pyz\Zed\Propel\Business;

use Pyz\Zed\Propel\Communication\Console\DiffConsole;
use Pyz\Zed\Propel\Communication\Console\MigrateConsole;
use Spryker\Zed\Propel\Business\PropelBusinessFactory as SprykerPropelBusinessFactory;

class PropelBusinessFactory extends SprykerPropelBusinessFactory
{
    /**
     * @return \Spryker\Zed\Propel\Communication\Console\MigrateConsole
     */
    protected function createMigrateConsole()
    {
        return new MigrateConsole();
    }

    /**
     * @return \Pyz\Zed\Propel\Communication\Console\DiffConsole|\Spryker\Zed\Propel\Communication\Console\DiffConsole
     */
    protected function createDiffConsole()
    {
        return new DiffConsole();
    }
}
