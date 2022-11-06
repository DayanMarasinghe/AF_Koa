import Router from '@koa/router';
import { get,create, getById,update, remove } from './postAPI.js';

const postsRouter = new Router({
    prefix:'/posts'
})

postsRouter.get('/',async ctx =>{
    ctx.body=await get();
})

postsRouter.get('/:id',async (ctx) =>{
    const {id} = ctx.params;
    ctx.response.status = 200;
    ctx.body=await getById(id);
})

postsRouter.post('/',async ctx =>{
    const {title,description,user} = ctx.request.body;
    ctx.body=await create({title,description,user});
})

postsRouter.put('/:id', async ctx =>{
    const id = ctx.params.id;
    let posts = ctx.request.body;
    posts=await update(id,posts);
    ctx.response.status = 200;
    ctx.body=posts;
})

postsRouter.delete('/:id',async ctx =>{
    const id = ctx.params.id;
    await remove(id);
})

export default postsRouter;