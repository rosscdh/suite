<?php

namespace Pyz\Zed\Propel\Communication\Console;

use Spryker\Shared\Config\Config;
use Spryker\Shared\Propel\PropelConstants;
use Spryker\Zed\Propel\Communication\Console\MigrateConsole as SprykerMigrateConsole;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Process\Process;

class MigrateConsole extends SprykerMigrateConsole
{


    /**
     * @param \Symfony\Component\Console\Input\InputInterface $input
     * @param \Symfony\Component\Console\Output\OutputInterface $output
     *
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->info('Run migrations');

        $config = Config::get(PropelConstants::PROPEL);
        $command = 'vendor/bin/propel migrate --config-dir '
            . $config['paths']['phpConfDir'];

        $process = new Process($command, APPLICATION_ROOT_DIR, null, null, 3600);

        return $process->run(function ($type, $buffer) {
            echo $buffer;
        });
    }
}
