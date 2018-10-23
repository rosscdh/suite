#!/bin/bash

set -xe

if [ "$APPLICATION_NAME" == "Yves" ]; then
    vendor/bin/install -r development-heroku -s twig-cache-warmup
else
    vendor/bin/install -r development-heroku -s database-flush -s database-migrate -s queue
fi
