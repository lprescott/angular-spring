Rem Import variables from config.bat
call config.bat

Rem Change directory to backend location.
cd /d ../../%backend_location%

Rem Package using defaults.
mvn package
