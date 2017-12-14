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
├─webapp              # frontend source folder platform DomRock
  ├─build             # frontend dev scripts which contains the modules webpack
  ├─src               # frontend src
  │  ├─assets         # image 
  │  │  ├─css
  │  │  ├─fonts
  │  │  └─images
  │  ├─components     # vue components 
  │  ├─service        # axios configuration for request http
  │  ├─locale         # 
  │  ├─router         # vue-router configuration define routes for system
  │  ├─socket         # 
  │  ├─storage        # 
  │  ├─store          # vuex store states for system
  │  │  └─modules
  │  └─view           # app pages
  │     └─auth
  └─static            # static folder for image static for system
```
## FRAMEWORK UI FOR PLATAFORM
> Material Component Framework
