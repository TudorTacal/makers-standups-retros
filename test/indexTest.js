var should = require('should');
var request = require('supertest');

describe('Index', function() {
  var url = 'http://localhost:3000/';

  it('should have the status code 200', function() {
    request(url)
      .get('/')
      .end(function(err, res) {
        if (err) {
          throw err;
        }
        res.should.have.status(200);
        done();
      });
  });
});
