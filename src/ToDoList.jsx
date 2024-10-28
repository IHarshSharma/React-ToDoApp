import InputToDo from './InputToDo.jsx';
import ListShow from './ListShow.jsx';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoList() {
    let [todos, setTodos] = useState([{id: uuidv4(), task:"Sample Task", isDone: false}]);

    let addTask = (newTask) => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTask, id: uuidv4(), isDone: false}];
        });
    };

    return (
        <>
        <h3>ToDo App</h3>
        <InputToDo addTask={addTask}/>
        <ListShow todos={todos} setTodos={setTodos}/>
        </>
    )
}