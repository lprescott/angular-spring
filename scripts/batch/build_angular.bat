Rem Import variables from config.bat
call config.bat

Rem Change directory to frontend location.
cd /d ../../%frontend_location%

Rem By default, npm install will install all modules listed as dependencies in package.json.
npm install

Rem Builds and serves your app, rebuilding on file changes.
ng build
