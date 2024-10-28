import { useState } from "react"

export default function InputToDo({addTask}) {
    let [newTodo, setNewTodo] = useState("");

    let updateToDo = (event) => {
        setNewTodo(event.target.value);
    };

    let addNewTask = () => {
        if(newTodo==""){
            return;
        }
        addTask(newTodo);
        setNewTodo("");
    }

    return (
        <>
        <input placeholder="Add a task" onChange={updateToDo} value={newTodo}></input>
        <button onClick={addNewTask}>Add Task</button>
        </>
    )
}