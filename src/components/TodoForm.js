import React from "react";
import {v4 as id} from "uuid"

function TodoForm({newTodo, setNewTodo, todos, setTodos,editTodo,setUpdatedTodo}) {

    const addNewTodo= (e)=>{
        setNewTodo(e.target.value);
    }

    const UpdateTodo = (title,id,completed) =>{
        // eslint-disable-next-line no-unused-expressions
        const addTodo= todos.map((todo) => { todo.id === id ? {title, id, completed} : todo })
        setTodos(addTodo);
        setUpdatedTodo("");
    }

     
    const handleSubmit = (e)=> {
        e.preventDefault();
        if(!editTodo){
            setTodos([...todos,{id:id(),title: newTodo,completed:false}]);
        setNewTodo("");

        }else {
            UpdateTodo(newTodo,editTodo.id,editTodo.completed)
        }
        
    }
     


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter a todo...." className="text-input"
                value={newTodo} required 
                onChange={addNewTodo}/>
            <button className="btn btn-dark" type="submit">Add Todo</button>
        </form>
    )
}


export default TodoForm;