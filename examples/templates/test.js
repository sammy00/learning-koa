const server = require('./app').listen();
const request = require('supertest').agent(server);

describe('Templates', function () {
  after(() => {
    server.close();
  });

  describe('GET /', function () {
    it('should respond with a rendered view', function (done) {
      request
        .get('/')
        .expect(200)
        .expect('<p>Tobi is a 3 year old ferret.</p>', done);
    });
  });
});