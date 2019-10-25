#!/bin/bash

# Change to current working directory.
cd "$(dirname "$0")"

# Import variables from deploy.config
. ./deploy.cfg

# Change directory to root location.
# shellcheck disable=SC2154
cd "../../" || exit

# This command calls moreutils parrallel method so the first and second command can execute in parrallel
# while maintaining output to the terminal. This command runs spring and angular with their versions or live reload
# enabled.
parallel -j 2 -- "cd $backend_module && mvn spring-boot:run" "cd $frontend_module && ng build --watch"
