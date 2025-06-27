import { useContext } from "react";
import UserCard from "../../components/cards/UserCard/UserCard";
import List from "../../layouts/List/List";
import UsersContext from "../../providers/usersProviders";
export default function Users(){
  const {users} = useContext(UsersContext);
    
    return (
      <div>
        <List items={users} Component={UserCard}></List>
      </div>
    );
}