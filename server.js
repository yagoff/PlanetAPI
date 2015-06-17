// Dependencias
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Setup App
var app = express();
var port = process.env.PORT || 8000;

//Database
var db = {};

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());

// Rutas
app.post('/planetas', function (req, res) {

  if (!req.body.planeta) {
    res.status(400).send({ error: 'Por favor, introduce un planeta' });
  }

  // manipulamos la request
  var nuevoPlaneta = req.body.planeta;
  nuevoPlaneta.id = Date.now();

  // Almacenamos el documento
  db[nuevoPlaneta.id] = nuevoPlaneta;

  //preparamos la respuesta
  res.set('Content-Type','application/json');
  res.status(201);

  // Enviamos la respuesta
  res.json({
    planeta: nuevoPlaneta
  });

});

app.get('/planetas', function(req, res) {
  res.json({
    planetas: db
  });
});

app.get('/planetas/:id', function(req, res) {
  var id = req.params.id;
  var planeta = db[id];

  if (!planeta) {
    return res.status(404).send({ error: 'Planeta no encontrado' });
  }

  res.json({
    planeta: planeta
  });
});

app.listen(port, function () {
  console.log('Escuchando en el puerto ' + port + '...');
});
