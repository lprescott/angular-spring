Rem Import variables from config.bat
call config.bat

Rem Change directory to backend location.
cd /d ../../%backend_location%

Rem Clean target folder.
mvn clean:clean

Rem Empty static folder.
del src/main/resources/static/*
