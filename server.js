// Dependencias
var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

// Setup App
var app = express();
var port = process.env.PORT || 8000;

// Middleware
app.use(logger('dev'));
app.use(bodyParser.json());

// Rutas
app.post('/planetas', function (req, res) {

  // manipulamos la request
  var nuevoPlaneta = req.body.planeta;
  nuevoPlaneta.id = '123';

  //preparamos la respuesta
  res.set('Content-Type','application/json');
  res.status(201);

  // Enviamos la respuesta
  res.json({
    planeta: nuevoPlaneta
  });

});

app.listen(port, function () {
  console.log('Listening on port ' + port + '...');
});
