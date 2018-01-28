const logger = require('koa-logger');
const Koa = require('koa');
const app = new Koa();

// passing any middleware to this middleware
// will make it conditional, and will not be used
// when an asset is requested, illustrating how
// middleware may "wrap" other middleware.

function ignoreAssets(mw) {
  return async function (ctx, next) {
    if (/(\.js|\.css|\.ico)$/.test(ctx.path)) {
      await next();
    } else {
      // must .call() to explicitly set the receiver
      await mw.call(this, ctx, next);
    }
  };
}

// TRY:
// $ curl http://localhost:3000/
// should get log in the console, something like
// <-- GET /style
// --> GET /style 200 9ms 11b

// $ curl http://localhost:3000/style.css
// should see nothing in the console

// $ curl http://localhost:3000/some.html
// should get log in the console

app.use(ignoreAssets(logger()));

app.use(async function (ctx) {
  ctx.body = 'Hello World';
});

app.listen(3000);