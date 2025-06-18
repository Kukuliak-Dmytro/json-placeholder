import axiosClient from "../utils/http";

export async function getUsers(){
    try{
        const response = await axiosClient.get('/users');
        return response.data;
    }
    catch(error){
        console.error(error)
    }

}
export async function getUserById(id){
    try{
        const response = await axiosClient.get(`/users/${id}`);
        return response.data;
    }
    catch(error){
        console.error(error)
    }

}