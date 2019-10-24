# Change directory to frontend location.
cd angular

# By default, npm install will install all modules listed as dependencies in package.json.
npm install

# Compiles an Angular app into an output directory named dist/ at the given output path.
# Must be executed from within a workspace directory.
ng build

# Change directory to backend location.
cd ../spring

# Run an executable archive application.
mvn spring-boot:run
