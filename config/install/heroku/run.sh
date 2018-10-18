#!/bin/bash

set -xe

if [ "$APPLICATION_NAME" == "Yves" ]; then
    vendor/bin/install -s clear -s generate -s yves-frontend
else
    vendor/bin/install -s generate -s database-migrate -s demodata -s jenkins-up -s zed-frontend
fi
