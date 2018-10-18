#!/bin/bash

set -e

if ["$APPLICATION_NAME" -eq "Yves"]; then
    vendor/bin/install -s clear generate yves-frontend
else
    vendor/bin/install -s generate database-migrate demodata jenkins-up zed-frontend
fi
