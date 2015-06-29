var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlanetaSchema = new Schema({
  nombre: String,
  radio: String,
  distSol: String,
  dia: String,
  ano: String,
  tempMedia: String,
  gravedad: String
});

var planeta = mongoose.model('Planeta', PlanetaSchema);

module.exports = planeta;