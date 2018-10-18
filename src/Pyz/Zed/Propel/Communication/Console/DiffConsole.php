<?php


namespace Pyz\Zed\Propel\Communication\Console;

use Spryker\Zed\Propel\Communication\Console\DiffConsole as SprykerDiffConsole;

class DiffConsole extends SprykerDiffConsole
{
    public const PROCESS_TIMEOUT = 3600;
}
