import { useParams } from "react-router";
export default function UserPage() {
    const {id} = useParams();
    return <div>UserPage: {id}</div>;
}