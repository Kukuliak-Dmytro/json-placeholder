import axiosClient from "../utils/http";
export async function getAllPhotos(){
    try{
        const response = await axiosClient.get("/photos");
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}
export async function getPhotosByAlbum(albumId){
    try{
        const response = await axiosClient.get(`/photos`);
        const albumPhotos = response.data.filter((photo)=>photo.albumId==albumId)
        return albumPhotos;
    }
    catch(error){
        console.error(error);
    }
}