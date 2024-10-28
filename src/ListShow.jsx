export default function ListShow({todos,setTodos}) {

    const UpperCaseAll = () => {
        const updatedTodos = todos.map(todo => ({
            ...todo,
            task: todo.task.toUpperCase()
        }));
        setTodos(updatedTodos);
    };

    const UpperCaseThisTask = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            } else {
                return todo; // Return unchanged todo if id doesn't match
            }
        });
        setTodos(updatedTodos);
    };
    let deleteTask = (id) => {
        setTodos((prevTodos) => prevTodos.filter((Todos) => Todos.id != id));
    };
    let toggleDone = (id) => {
        const updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    isDone: !todo.isDone
                };
            } else {
                return todo; // Return unchanged todo if id doesn't match
            }
        });
        setTodos(updatedTodos);
    };



    return (
        <>
        <ul>
        {
            todos.map((todo) => (
                <li key={todo.id} >
                    <button onClick={() => toggleDone(todo.id)}>Mark</button>
                    <span style={{ textDecoration : todo.isDone ? 'line-through' : 'none'}}>&nbsp; &nbsp;{todo.task}</span> 
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={() => deleteTask(todo.id)}>Remove</button>
                    {/* <button onClick={() => UpperCaseThisTask(todo.id)}>Update</button> */}
                </li>
            ))
        }
        </ul>
        {/* <button onClick={UpperCaseAll}>Update All</button> */}
        </>
    )
}