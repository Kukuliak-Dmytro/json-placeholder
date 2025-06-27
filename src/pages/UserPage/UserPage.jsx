import { useParams } from "react-router";
import { useContext, useState, useEffect } from "react";    
import UsersContext from "../../providers/usersProviders";
import { useSearchParams } from "react-router";
import { getPostsByUser } from "../../services/postsService";
import List from "../../layouts/List/List";
import PostCard from "../../components/cards/PostCard/PostCard";
import AlbumCard from "../../components/cards/AlbumCard/AlbumCard";
import { getAlbumsByUser } from "../../services/albumsService";
import TodoCard from "../../components/cards/TodoCard/TodoCard";
import { getTodosByUser } from "../../services/todoService";
import "./UserPage.css";
export default function UserPage() {
    const { users } = useContext(UsersContext);
    const { id } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [posts, setPosts] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const posts = await getPostsByUser(id);
            setPosts(posts);
            const albums = await getAlbumsByUser(id);
            setAlbums(albums);
            const todos = await getTodosByUser(id);
            setTodos(todos);
        };
        if (id) {
            getData();
        }
    }, [id]);

    if (!users.length) {
        return <div>Loading users...</div>;
    }

    const user = users.find((u) => u.id === Number(id));

    if (!user) {
        return <div>User not found</div>;
    }
    const view = searchParams.get("view");
    return (
        <div className="page-wrapper">
            <div className="user-card-page">
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                <p>{user.phone}</p>
                <p>{user.website}</p>
                <p>{user.address.street}</p>
                <p>{user.address.suite}</p>
                <p>{user.address.city}</p>
                <p>{user.address.zipcode}</p>
                <p>{user.address.geo.lat}</p>
                <p>{user.address.geo.lng}</p>
            </div>
            <div className="section-selector">
                <button
                    onClick={() => {
                        setSearchParams({ view: "posts" });
                    }}
                >
                    Posts
                </button>
                <button
                    onClick={() => {
                        setSearchParams({ view: "albums" });
                    }}
                >
                    Albums
                </button>
                <button
                    onClick={() => {
                        setSearchParams({ view: "todos" });
                    }}
                >
                    Todos
                </button>
            </div>
            <div className="view-section">
                {view === "posts" && <List items={posts} Component={PostCard}/>}
                {view === "albums" && <List items={albums} Component={AlbumCard}/>}
                {view === "todos" && <List items={todos} Component={TodoCard}/>}
            </div>
        </div>
    );
}