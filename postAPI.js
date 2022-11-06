import { save,getAll,getDataById,updateById, deleteById } from "./postsDataAdapter.js";

// const posts = new Map();


const create = async ({
                title='',
                description='',
                user=''
            }) => {
            
                const post = {title,description,user,posted:new Date()};
                post.id =await save(post);
                return post; 
}

const get = () => {

return getAll();
}

const getById = async (id) => {

    // if(posts.has(id)){
        return getDataById(id);
    // }
    // throw new Error('Not found for id ${id}')
}

const update = async (id,{title,description,user}) =>{
    return await updateById(id, {title,description,user});

}

const remove = async (id)=>{
    return await deleteById(id);
}

export {create,get,getById,update,remove};