# angular-spring

## About

This is a boilerplate/template project for a RESTfull implementation of any Angular app.
The goal of the project is to:

- Highlight techniques of making and securing a RESTfull app using [SpringBoot 2.2+](https://projects.spring.io/spring-boot)
- How to consume a RESTfull service and make an HTML5 based Single Page App using [Angular 8+](https://github.com/angular/angular)

## Prerequisites

### Ensure you have this installed before use:

- Java 11
- Maven 3.6.0
- Node v10.16.3
- npm 6.12
- Angular-cli 8.3.13
- MySQL, Connector/J & Community Server

## Getting Started

Navigate to where you want your project to be contained.

```bash
git clone https://github.com/lprescott/angular-spring
cd angular-spring/angular
npm install             # Install javascript package requirements
ng build                # Build the Angular Frontend  
cd ../spring    
mvn spring-boot:run     # Build and run Spring Boot Backend
```
_Or_

```bash
git clone https://github.com/lprescott/angular-spring
scripts/build_angular.sh
script/deploy_spring.sh
```

### Serving from Tomcat
Check this [file](angular/src/proxy.conf.json) for details pertaining to accessing Tomcat (on port 8080) from the Webpack Server (on port 4200). This template defaults to redirecting
http calls under the directory ```/api/*``` to localhost:8080.
    
### Workflow 
##### Version 1
Generally, when **working without Spring Security** you can serve the front end and the backend developer servers at the same time. 

In one terminal call: ```scripts/deploy_angular.sh```
and then in another: ```scripts/deploy_spring.sh```

Use: http://localhost:4200.

##### Version 2
However, when **working with Spring Security** (or you have some other reason to use the backend to serve your static files) you can build the frontend and then serve the backend developer server. Supply ```ng build``` with the ```--watch``` argument allows for node to rebuild upon noticing changes in the frontend, effectively giving the same outcome. 

In one terminal call: ```scripts/build_angular_watch.sh```
and then in another: ```scripts/deploy_spring.sh```

Use: http://localhost:8080.

## Technology Stack

Component         | Technology                                                         | Server
---               | ---                                                                | ---
Frontend          | [Angular 8](https://github.com/angular/angular)                    |
Backend (REST)    | [SpringBoot 2.2.0](https://projects.spring.io/spring-boot) (Java)  | [Embedded Tomcat Server](https://spring.io/blog/2014/03/07/deploying-spring-boot-applications)
Database          | [MySQL](https://www.mysql.com/)                                    | [Community Server](https://dev.mysql.com/downloads/mysql/)
Security          | Spring Security                                                    |
Persistence       | JPA (Using Spring Data)                                            |
Client Build Tools| [angular-cli](https://github.com/angular/angular-cli), Webpack, npm| [webpack-dev-server](https://webpack.js.org/guides/development/#webpack-dev-server)
Server Build Tools| Maven(Java)                                                        |

## Folder Structure

```bash
.
│  README.md
└──[scripts]
│  └──[sql]
│  └──[bash]
│     │  deploy.cfg                    #If changing module names, update variables in this file.
│     │  deploy.sh                     #Build and deploy all.
│     │  deploy_angular.sh     
│     │  develop.sh                    # Requires moreutils package, but should live-reload front and backend.
│     │  deploy_spring.sh
│     └──package.sh                    #Package using defaults.
│
└──[angular]
│  │  package.json
│  │  angular-cli.json                 #ng build configurations
│  │  package.json
│  └──[src]                            #Frontend source files
│  └──[dist]                           #Frontend build files, auto-created after running angular build: ng -build
│
└──[spring]
   │  HELP.md                          #Resources for Spring Boot
   │  pom.xml
   │  mvnw                             #Maven compiliation for Linux Bash
   │  mvnw.cmd                         # '' for Windows environment
   └──[src]
   │  └──[main]
   │     └──[java]
   │     └──[resources]
   │        │  application.properties  #Contains Spring Boot cofigurations
   │        └──[static]
   │        └──[templates]
   │
   └──[target]                         #Java build files, auto-created after running java build: mvn install
      └──[classes]
      └──[public]
```

## Other Resources

See [HELP.md](spring/HELP.md) for helpful documentation regarding Spring Boot and [README.md](angular/README.md) for important commands and documentation relating to Angular and its embedded server. 

- I used [gitignore.io](https://www.gitignore.io/) to generate [_this_](.gitignore) gitignore file but otherwise used predefined defaults.
- [LiveReload](http://livereload.com/extensions/) and your browser of choice.
