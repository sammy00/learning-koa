const assert = require('assert');
const http = require('http');
const server = require('../demo/404').listen(8080);

describe('404', function () {
  after(() => server.close());

  describe('when GET /', function () {
    it('should return the 404 page', function (done) {
      const req = http.get('http://localhost:808/', res => {
        assert.equal(res.statusCode, 404);

        let rawData = '';
        res.on('data', (chunk) => {
          rawData += chunk;
        });
        res.on('end', () => {
          assert.ok(/Page Not Found/.test(rawData));
          done();
        }).on('error', err => done(err));
      });
      req.on('error', err => done(err));
    });
  });
});