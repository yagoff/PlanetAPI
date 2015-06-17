var request = require('supertest');
var api = require('../server.js');
var expect = require('chai').expect;

request = request(api);

describe('Test de planetas: ', function() {

  describe('POST /planetas', function() {
    it('deberia crear un planeta', function(done) {
      var data = {
        "planeta": {
          "nombre": "Mercurio",
          "radio": "2.440 km",
          "distSol": "57.910.000 km",
          "dia": "1.404 horas",
          "ano": "87,97 dias",
          "tempMedia": "179º C",
          "gravedad": "2,78 m/s2"
        }
      };

      request
        .post('/planetas')
        .set('Accept', 'application/json')
        .send(data)
        .expect(201)
        .expect('Content-Type', /application\/json/)
        .end(function(err, res) {
          var planeta;

          var body = res.body;
          console.log('body', body);

          // Planeta existe
          expect(body).to.have.property('planeta');
          planeta = body.planeta;

          // Propiedades
          expect(planeta).to.have.property('nombre', 'Mercurio');
          expect(planeta).to.have.property('radio', '2.440 km');
          expect(planeta).to.have.property('distSol', '57.910.000 km');
          expect(planeta).to.have.property('dia', '1.404 horas');
          expect(planeta).to.have.property('ano', '87,97 dias');
          expect(planeta).to.have.property('tempMedia', '179º C');
          expect(planeta).to.have.property('gravedad', '2,78 m/s2');
          expect(planeta).to.have.property('id');

          done(err);
        });
    });
  });

});
