var ObjectId = require('mongodb').ObjectID;

function PlanetaDAO(db) {
  
  var planetas = db.collection("planetas");

  this.insertPlaneta = function (planeta, cb) {
    planetas.insert(planeta, function (err) {
      if (err) {
        return cb(err);
      }
      return cb(null, planeta);
    })
  };

  this.getPlanetas = function (cb) {
    planetas.find().toArray(function(err, items) {
      if (err) {
        return cb(err);
      }
      return cb(null, items);
    });
  };

  this.getPlanetaById = function (id, cb) {
    planetas.findOne({ '_id': new ObjectId(id) }, function (err, doc) {
      if (err) {
        return cb(err);
      }
      return cb(null, doc);
    });
  };

  this.updatePlaneta = function (id, planeta, cb) {
    planetas.update({ '_id': new ObjectId(id) }, planeta, function (err) {
      if (err) {
        return cb(err);
      }
      planetas.findOne({ '_id': new ObjectId(id) }, function (err, doc) {
        if (err) {
          return cb(err);
        }
        return cb(null, doc);
      });
    });
  };

  this.removePlaneta = function (id, cb) {
    planetas.remove({ '_id': new ObjectId(id) }, function (err) {
      if (err) {
        return cb(err);
      }
      return cb();
    });
  };

}

module.exports.PlanetaDAO = PlanetaDAO;