const server = require('./app').listen();
var request = require('supertest').agent(server);

describe('Hello World', function () {
  after(() => {
    server.close();
  });

  it('should say "Hello World"', function (done) {
    request
      .get('/')
      .expect(200)
      .expect('Hello World', done);
  });
});