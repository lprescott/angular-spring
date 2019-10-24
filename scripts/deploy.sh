#!/bin/bash

# Change to current working directory.
cd "$(dirname "$0")"

# Import variables from deploy.config
. ./deploy.cfg

# Change directory to frontend location.
# shellcheck disable=SC2154

echo "../$frontend_module"
cd "../$frontend_module" || exit

# By default, npm install will install all modules listed as dependencies in package.json.
npm install

# Compiles an Angular app into an output directory named dist/ at the given output path.
# Must be executed from within a workspace directory.
ng build

# Change directory to backend location.
# shellcheck disable=SC2154
cd "../$backend_module" || exit

# Run an executable archive application.
mvn spring-boot:run
