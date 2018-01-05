# FRONT DOM ROCK.
> Front End framework for Dom Rock
> Proof of Concept
> Based on the VueJS 2.0 framework 

## Before dev
1. NodeJs installed. v6.10.3
2. Npm 3+

## Folders
1. webapp
2. server


# webapp  
> All files that make up front-end 


## Build Setup
``` bash
# install dependencies
npm install
# serve with hot reload at localhost:8080
npm run dev
# build for production with minification
npm run build
# build for production and view the bundle analyzer report
npm run build --report
# run unit tests
npm run unit
# run e2e tests
npm run e2e
# run all tests
npm test
```
## App structure

``` bash
├─webapp/                                        # source folder platform DomRock
  ├─build/                                       # webpack config files
  │  ├─... 
  ├─config/                                      
  │  ├─ index.js                                # main project config
  │  ├─...
  ├─src/   
  │  ├── main.js                                 # app entry file
  │  ├── App.vue                                 # main app component
  │  ├─assets/                                   #  
  │  ├─components/                               # ui componentes 
  │  │  ├─Shared/                                # components for all layers
  │  │  │  ├─Diagram/                            # everything related to diagrams
  │  │  │  │  ├─dr-tree/                         # diagram tree
  │  │  │  │  │  ├─...
  │  │  ├─Login/                                 # page login
  │  │  │  ├─...
  │  │  └─Navigation/                            # side bar fixed (Navigation) and overlaping (NavigationOverlaping)
  │  │  │  ├─...
  │  │  └─ToolBar/                               # toolbar higher 
  │  │  │  ├─...
  │  ├─services/                                 # axios configuration for request http
  │  │  ├─...
  │  ├─locales/                                  # 
  │  │  ├─...
  │  ├─mixins/                                   # reusable functionalities for Vue components
  │  │  ├─Helper.js
  │  ├─router/                                   # vue-router configuration define routes for system and auth-guard
  │  │  ├─...
  │  ├─store/                                    # vuex store states for system 
  │  │  ├─...
  ├─static/                                      # pure static assets (directly copied)
  ├─less/                                        # less functions mixin main
  ├─test/
  │  ├─unit/                                     # unit tests
  │  │  ├─specs/                                 # test spec files
  │  │  ├─setup.js                               # file that runs before Jest tests
  │  │  ├─index.js                               # test build entry file
  │  │  ├─karma.conf.js                          # test runner config file
  │  ├─ e2e/                                     # e2e tests
  │  │  ├─ specs/                                # test spec files
  │  │  ├─custom-assertions/                     # custom assertions for e2e tests
  │  │  ├─ runner.js                             # test runner script
  │  │  ├─nightwatch.conf.js                     # test runner config file
  ├─.babelrc                    # babel config
  ├─.postcssrc.js               # postcss config
  ├─.eslintrc.js                # eslint config
  ├─.editorconfig               # editor config
  ├─index.html                  # index.html template
  └─package.json                # build scripts and dependencies
```



# server
> for front test non-persistent database.

## Build Setup

# install dependencies
npm install
# serve with nodemon reload server
npm start
# test api




