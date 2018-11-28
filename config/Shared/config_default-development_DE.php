<?php

use Spryker\Shared\Application\ApplicationConstants;
use Spryker\Shared\Collector\CollectorConstants;
use Spryker\Shared\Event\EventConstants;
use Spryker\Shared\Mail\MailConstants;
use Spryker\Shared\Propel\PropelConstants;
use Spryker\Shared\Queue\QueueConstants;
use Spryker\Shared\RabbitMq\RabbitMqEnv;
use Spryker\Shared\Search\SearchConstants;
use Spryker\Shared\Setup\SetupConstants;

// // ---------- Propel
// $config[PropelConstants::ZED_DB_DATABASE] = 'DE_development_zed';

// // ---------- MailCatcher
// $config[MailConstants::MAILCATCHER_GUI] = sprintf('http://%s:1080', $config[ApplicationConstants::HOST_ZED]);


$config[SetupConstants::JENKINS_CSRF_PROTECTION_ENABLED] = true;
$config[RabbitMqEnv::RABBITMQ_API_VIRTUAL_HOST] = '/DE_development_zed';
