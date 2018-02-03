const Readable = require('stream').Readable;

/**
 * Returns a new subscription event.
 * Real APIs would care about the `event`.
 */

exports.subscribe = function (event, options) {
  return new Subscription(options);
};

/**
 * Subscription stream. Just increments the result.
 * Never ends!
 */
class Subscription extends Readable {
  constructor(options) {
    super();

    options = options || {};
    Readable.call(this, options);

    this.value = 0;
  }

  _read() {
    while (this.push(String(this.value++))) {}
  }
}