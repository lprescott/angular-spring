#!/bin/bash

# Change to current working directory.
cd "$(dirname "$0")"

# Import variables from deploy.config
. ./deploy.cfg

# Change directory to frontend location.
# shellcheck disable=SC2154
cd "../${frontend_module}" || exit

# By default, npm install will install all modules listed as dependencies in package.json.
npm install

# Builds and serves your app, rebuilding on file changes.
ng serve
