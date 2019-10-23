cd angular
echo "Checking frontend dependencies:"
npm install

echo "Building frontend:"
ng build

cd ../spring
echo "Building and deploying backend to http://localhost:8080/ (press Ctrl+C to stop Tomcat Server):"
mvn spring-boot:run
