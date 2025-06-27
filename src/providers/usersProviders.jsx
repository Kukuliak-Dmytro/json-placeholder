import { createContext, useEffect, useState } from "react";
import { getUsers } from "../services/userService";
const UsersContext = createContext();
export const UsersProvider = ({children}) => {
const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await getUsers();
        setUsers(response);
        console.log(response);
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <UsersContext.Provider value={{users, setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersContext;