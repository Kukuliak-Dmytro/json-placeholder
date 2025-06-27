import Accordion from "../../ui/Accordion/Accordion";
import "./AlbumCard.css";
import { getPhotosByAlbum } from "../../../services/photoService";
import { useState, useEffect } from "react";
export default function AlbumCard({item}){
    const album = item;
    const [photos, setPhotos] = useState([]);
    useEffect(()=>{
        const fetchPhotos = async () => {
            const photos = await getPhotosByAlbum(album.id);
            setPhotos(photos);
        }
        fetchPhotos();
    },[album.id])
    return(
        <div className="album-card">
            <Accordion title={album.title}>
                <ul>
                    {photos.map((photo)=>(
                        <li key={photo.id}>
                            <img src={photo.url} alt={photo.title} />
                        </li>
                    ))}
                </ul>
            </Accordion>
        </div>
    )
}