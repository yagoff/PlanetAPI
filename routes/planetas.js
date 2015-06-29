var express = require('express');
var router = express.Router();
var Planeta = require('../models/planeta');

router.route('/')
  .all(function (req, res, next) {
    res.set('Content-Type','application/json');
    next();
  })
  .post(function (req, res) {

    if (!req.body.planeta) {
      res.status(400).send({ error: 'Por favor, introduce un planeta' });
    }

    // manipulamos la request
    var nuevoPlaneta = req.body.planeta;
    
    // Almacenamos el documento
    Planeta.create(nuevoPlaneta)
    .then(function (planeta) {
      //preparamos la respuesta
      res.status(201);
      // Enviamos la respuesta
      res.json({
        planeta: planeta
      });
    });

  })
  .get(function (req, res) {

    Planeta.find({}, function (err, planetas) {
     if (err) {
        res.send({'error': 'Ha ocurrido un error en el servidor'});
      }
      res.json({
        planetas: planetas
      });
    });

  });

router.route('/:id')
  .get(function (req, res) {

    var id = req.params.id;

    Planeta.findById(id, function (err, planeta) {
      if (err) {
        res.send({'error':'Ha ocurrido un error en el servidor'});
      }

      if (!planeta) {
        return res.status(404).send({ error: 'Planeta no encontrado' });
      }

      res.json({
        planeta: planeta
      });

    });
  })

  .put(function (req, res) {
    var id = req.params.id;

    if (!id) {
      return next();
    }

    var planetaActualizado = req.body.planeta;

    Planeta.update({ _id: id }, planetaActualizado, { overwrite: true }, function (err, planeta) {
      if (err) {
        res.send({'error':'Ha ocurrido un error en el servidor'});
      }
      Planeta.findById(id, function (err, planeta) {
        if (err) {
          res.send({});
        }

        res.json({
          planeta: planeta
        });

      });

    });
  })

  .delete(function (req, res) {
    var id = req.params.id;

    if (!id) {
      return next();
    }

    Planeta.remove({ _id: id }, function (err) {
      if (err) {
        res.send({'error':'Ha ocurrido un error en el servidor'});
      }

      res
      .status(204)
      .send();

    });
  });

module.exports = router;
