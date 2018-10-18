<?php


namespace Pyz\Zed\Propel\Communication\Console;

use Spryker\Shared\Config\Config;
use Spryker\Shared\Propel\PropelConstants;
use Spryker\Zed\Propel\Communication\Console\DiffConsole as SprykerDiffConsole;
use Spryker\Zed\Propel\Communication\Console\SchemaCopyConsole;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Process\Process;

class DiffConsole extends SprykerDiffConsole
{
    public const PROCESS_TIMEOUT = 3600;
    /**
     * @param \Symfony\Component\Console\Input\InputInterface $input
     * @param \Symfony\Component\Console\Output\OutputInterface $output
     *
     * @return int
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->runDependingCommand(SchemaCopyConsole::COMMAND_NAME);

        $this->info('Create diff');

        $config = Config::get(PropelConstants::PROPEL);
        $command = 'vendor/bin/propel diff --config-dir '
            . $config['paths']['phpConfDir']
            . ' --schema-dir ' . $config['paths']['schemaDir'];

        $process = new Process($command, APPLICATION_ROOT_DIR);
        $process->setTimeout(static::PROCESS_TIMEOUT);

        return $process->run(function ($type, $buffer) {
            echo $buffer;
        });
    }
}
