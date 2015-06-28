# PlanetAPI
API básico usando node.js y express.js para formación

# Pasos
  - paso 1
    - Primera versión, añadido el package.json y express como dependencia
    - creado servidor de express con un 'Hola mundo'
  - paso 2
    - Añadidos primeros middlewares: body-parser y morgan como logger
  - paso 3
    - Añadida primera ruta: POST /planetas
  - paso 4
    - Info en el readme  sobre uso de node-inspector y nodemon
  - paso 5
    - Añadidas rutas GET /planetas y GET /planetas/:id
  - paso 6
    - Rutas extraídas a su propio archivo
  - paso 7
    - Primer test con mocha
  - paso 8
    - Test para rutas GET y code coverage con istanbul
  - paso 9
    - Refactorización de los tests usando promises
  - paso 10
    - TDD --> Test para PUT (Fallando)
  - paso 11
    - TDD --> Implementamos PUT (Test pasa)
  - paso 12
    - TDD --> Test e implementación para DELETE

##Instalación
```
$ git clone https://github.com/yagoff/PlanetAPI.git
$ cd PlanetAPI
$ npm install
```
#Ejecución
`node server`

#Pruebas
`npm test`

#Debug
https://www.npmjs.com/package/node-inspector
npm install -g node-inspector
node-debug server.js

#Dev
https://www.npmjs.com/package/nodemon
npm install -g nodemon
nodemon server.js
