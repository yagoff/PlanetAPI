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

app.get('/', function (req, res) {
  res.send('Hola mundo');
});

app.listen(port, function () {
  console.log('Listening on port ' + port + '...');
});
