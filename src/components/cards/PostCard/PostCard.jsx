import Accordion from "../../ui/Accordion/Accordion";
import "./PostCard.css";
import { getCommentsByPost } from "../../../services/commentsService";
import { useState, useEffect } from "react";
export default function PostCard({item}){
    const post = item;
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        const fetchComments = async () => {
            const comments = await getCommentsByPost(post.id);
            setComments(comments);
        }
        fetchComments();
    },[post.id])
    return(
        <div className="post-card">
            <Accordion title={post.title}>
                <h4>{post.body}</h4>
                <ul>
                    {comments.map((comment)=>(
                        <li key={comment.id}>
                            <p>{comment.name}</p>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                            <hr />
                        </li>
                    ))}
                </ul>
            </Accordion>
        </div>
    )
}