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

  describe('loading express', function () {
    var server;
    beforeEach(function () {
      server = require('../src/server');
    });
    afterEach(function () {
      server.close();
    });
    it('responds to /', function testSlash(done) {
      request(server)
        .get('/')
        .expect(200, done);
    })
    it('404 everything else', function testPath(done) {
      request(server)
        .get('/foo/bar')
        .expect(404, done);
    });
  });
});
