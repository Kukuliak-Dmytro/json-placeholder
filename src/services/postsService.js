import axiosClient from "../utils/http";
export async function getAllPosts(){
    try{
        const response = await axiosClient.get("/posts");
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}
export async function getPostsByUser(id){
    try{
        const response = await axiosClient.get("/posts");    
        const userPosts = response.data.filter((post)=>post.userId==id)
        return userPosts;
    }
    catch(error){
        console.error(error);
    }
}