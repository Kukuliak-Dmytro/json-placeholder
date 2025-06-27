import axiosClient from "../utils/http";
export async function getAllComments(){
    try{
        const response = await axiosClient.get("/comments");
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}
export async function getCommentsByPost(postId){
    try{
        const response = await axiosClient.get(`/comments`);
        const postComments = response.data.filter((comment)=>comment.postId==postId)
        return postComments;
    }
    catch(error){
        console.error(error);
    }
}