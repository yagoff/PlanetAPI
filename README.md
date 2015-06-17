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
