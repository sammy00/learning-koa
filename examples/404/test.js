const agent = require('superagent');
const assert = require('assert');
const server = require('./app').listen(8080);

describe('404', function () {
  const url = 'http://localhost:8080';

  after(() => server.close());

  describe('when GET /', function () {
    it('should return the 404 page', function () {
      agent.get(url).end((err, res) => {
        assert.equal(res.status, 404);
        assert(/Page Not Found/.test(res.text));
      });
    });
  });
});