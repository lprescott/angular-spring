#!/bin/bash

# Change to current working directory.
cd "$(dirname "$0")"

# Import variables from deploy.config
. ./deploy.cfg

# Change directory to backend location.
# shellcheck disable=SC2154
cd "../${backend_module}" || exit

# Run an executable archive application.
mvn spring-boot:run
