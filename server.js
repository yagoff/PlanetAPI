// Dependencias
var express = require('express');
var MongoClient = require('mongodb').MongoClient // Driver para conectarse con MongoDB
var logger = require('morgan');
var bodyParser = require('body-parser');

// Setup App
var app = module.exports = express();
var port = process.env.PORT || 8000;

MongoClient.connect('mongodb://localhost:27017/planetasDB', function (err, db) {
  if(err) throw err;

  // Middleware
  app.use(logger('dev'));
  app.use(bodyParser.json());

  // Rutas
  var Planetas = require('./routes/planetas');
  var planetasRouter = new Planetas(db).router;
  app.use('/planetas', planetasRouter);

  app.listen(port, function () {
    console.log('Escuchando en el puerto ' + port + '...');
  });
});