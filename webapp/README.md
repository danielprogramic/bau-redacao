# webapp

> Front End framework for Dom Rock

## Before dev
1. NodeJs installed. v6.10.3
2. Npm 3+


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
```
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
  │  ├─service/                                  # axios configuration for request http
  │  │  ├─...
  │  ├─locale/                                   # 
  │  │  ├─...
  │  ├─router/                                   # vue-router configuration define routes for system and auth-guard
  │  │  ├─...
  │  ├─store/                                    # vuex store states for system 
  │  │  ├─...
  └─static/                                      # pure static assets (directly copied)
```
## FRAMEWORK UI FOR PLATAFORM
> Material Component Framework
