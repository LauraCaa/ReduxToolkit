import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";


const AddTodo = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");  

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(todo));
        setTodo("");
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={todo} 
                    onChange={(e) => setTodo(e.target.value)}
                />
                <input type="submit" value="Add Todo"/>
            </form>
        </div>
    )
};

export default AddTodo;