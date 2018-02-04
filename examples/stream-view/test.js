const assert = require('assert');
const server = require('./app').listen();
const request = require('supertest').agent(server);

describe('Stream View', function () {
  after(() => {
    server.close();
  });

  it('GET /', function (done) {
    request
      .get('/')
      .expect(200, function (err, res) {
        if (err) return done(err);

        assert.equal(res.type, 'text/html');
        assert(res.text.includes('<title>Hello World</title>'));
        assert(res.text.includes('<p>Hello World</p>'));

        done();
      });
  });
});