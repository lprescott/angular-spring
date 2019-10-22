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
- Angular-cli 8.3.12
- MySQL & Community Server

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
└──[angular]
│  │  package.json
│  │  angular-cli.json                 #ng build configurations
│  └──[node_modules]
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
