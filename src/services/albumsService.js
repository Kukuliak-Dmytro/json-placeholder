import axiosClient from "../utils/http";
export async function getAllAlbums(){
    try{
        const response = await axiosClient.get("/albums");
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}
export async function getAlbumsByUser(userId){
    try{
        const response = await axiosClient.get(`/albums`);
        const userAlbums = response.data.filter((album)=>album.userId==userId)
        return userAlbums;
    }
    catch(error){
        console.error(error);
    }
}