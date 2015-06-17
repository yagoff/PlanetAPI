var express = require('express');
var router = express.Router();

var db = {};

router.route('/')
  .all(function (req, res, next) {
    next();
  })
  .post(function (req, res) {

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

  })
  .get(function (req, res) {

    res.json({
      planetas: db
    });

  });

router.route('/:id')
  .get(function (req, res) {

    var id = req.params.id;
    var planeta = db[id];

    if (!planeta) {
      return res.status(404).send({ error: 'Planeta no encontrado' });
    }

    res.json({
      planeta: planeta
    });

  });

module.exports = router;
