import React, { useState } from 'react'
import './App.css';
import Form from "./components/Form"
import TodoList from "./components/ToDoList"
import Todo from './components/Todo'

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
   <div className="App">
    <header>
    <h1>My Todo List</h1>
    </header>
    <Form 
    inputText={inputText}
    todos={todos}
     setTodos={setTodos} 
     setInputText={setInputText} />
    <TodoList />
   </div>
  );
}

export default App;
