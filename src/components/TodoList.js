import React from "react";


function TodoList({todos, setTodos,setUpdatedTodo}){

    const  deleteTodo = ({id})=>{
        setTodos(todos.filter((todo)=> todo.id !== id))
    }

    const editTodos=({id})=>{
        const findTodo = todos.find((todo)=> todo.id === id)
        setUpdatedTodo(findTodo)
       

    }


    return(
        <div>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input 
                    type="text" 
                    className="list"
                    value={todo.title} 
                    onChange={e=>e.preventDefault()}/>
                    <div>
                        <button className="button-edit" onClick={()=>editTodos(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button className="button-delete" onClick={()=>deleteTodo(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>

            ))}
        </div>
    )
}





export default TodoList;