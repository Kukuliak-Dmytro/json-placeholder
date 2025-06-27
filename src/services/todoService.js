import axiosClient from "../utils/http";
export async function getAllTodos(){
    try{
        const response = await axiosClient.get("/todos");
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}
export async function getTodosByUser(id){
    try{
        const response = await axiosClient.get("/todos");    
        const userTodos = response.data.filter((todo)=>todo.userId==id)
        return userTodos;
    }
    catch(error){
        console.error(error);
    }
}