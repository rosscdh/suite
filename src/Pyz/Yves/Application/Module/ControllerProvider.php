<?php
namespace Pyz\Yves\Application\Module;

use ProjectA\Yves\Library\Silex\Controller\ControllerProvider as YvesProvider;

class ControllerProvider extends YvesProvider
{

    const ROUTE_HOME = 'home';

    protected function defineControllers()
    {
        $this->createGetController('/', self::ROUTE_HOME, 'IndexController');
    }
}
