import { useState } from "react";
import "./App.css"
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


function App() {
 
  const [newTodo,setNewTodo]=useState("");
  const [todos,setTodos]=useState([]);
  const [editTodo,setUpdatedTodo]= useState(null);
  return (
  <div className="container">
    <div className="app-wrapper">
    <div >
      <hr />
      <Header />
      <hr />
    </div>
    <div>
      <TodoForm 
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          todos={todos}
          setTodos={setTodos}  
          editTodo={editTodo}  
          setUpdatedTodo={setUpdatedTodo}
      />
    </div>
    <TodoList todos={todos} setTodos={setTodos} setUpdatedTodo={setUpdatedTodo}/>

    </div>
    </div>
  );
}

export default App;
