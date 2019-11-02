Rem Import variables from config.bat
call config.bat

Rem Change directory to backend location.
cd /d ../../%backend_location%

Rem Run an executable archive application.
mvn spring-boot:run
