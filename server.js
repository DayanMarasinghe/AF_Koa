import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import postsRouter from './postsRouter.js';
import './db/mongoClient.js';

const app = new Koa();

app.use(bodyParser());

app.use(postsRouter.routes())
    .use(postsRouter.allowedMethods());

app.use((ctx)=>{
    ctx.body='not found';
    ctx.status=404;
})

app.listen(3000)
console.log("Server started on port 3000")