const Koa = require('koa');
const Router = require('koa-router');
const Bodyparser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

const networkIp = require('./networkIp');
const LISTEN_PORT = 8083;

app.use(Bodyparser());

// 允许跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE');
    ctx.set(
        'Access-Control-Allow-Headers',
        'x-requested-with, accept, origin, content-type',
    );
    ctx.set('Content-Type', 'application/json;charset=utf-8');
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Max-Age', 300);
    await next();
});

router.get('/', ctx => {
    ctx.body = {
        code: 0,
        msg: '',
        data: 'welcome koa demo',
    };
});

router.get('/message', ctx => {
    ctx.body = {
        code: 0,
        msg: '',
        data: 'message',
    };
});

router.post('/search', ctx => {
    const reqBody = ctx.request.body;
    ctx.body = {
        code: 0,
        msg: '',
        data: 'search',
    };
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(LISTEN_PORT);

console.log(`mock服务运行在：http://localhost:${LISTEN_PORT}`);
console.log(`mock服务运行在：http://${networkIp}:${LISTEN_PORT}`);
