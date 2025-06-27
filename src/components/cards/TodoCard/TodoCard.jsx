import Accordion from "../../ui/Accordion/Accordion";
import "./TodoCard.css";

export default function TodoCard({item}){
    const todo = item;
    
    return(
        <div className="todo-card">
            <Accordion title={todo.title}>
                <label>
                    Completed:
                    <input type="checkbox" checked={todo.completed} readOnly />
                </label>
            </Accordion>
        </div>
    )
}