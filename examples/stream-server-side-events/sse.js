/**
 * Create a transform stream that converts a stream
 * to valid `data: <value>\n\n' events for SSE.
 */

const Transform = require('stream').Transform;

module.exports = () => new SSE();

class SSE extends Transform {
  constructor(options) {
    super();

    options = options || {};
    Transform.call(this, options);
  }

  _transform(data, enc, cb) {
    this.push('data: ' + data.toString('utf8') + '\n\n');
    cb();
  }
}