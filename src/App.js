import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./MyComponents/Header.js";
import TodoList from "./MyComponents/TodoList.js";
import Addtodo from "./MyComponents/Addtodo.js";
import Footer from "./MyComponents/Footer.js";
import About from "./MyComponents/About.js";
import Search  from "./MyComponents/Search.js";

function App() {
  const initialTodos = localStorage.getItem('todos')
    ? JSON.parse(localStorage.getItem('todos'))
    : [];
  const [todos, setTodos] = useState(initialTodos);
  const [searchIndex, setSearchIndex] = useState('');
  const [searchInput, setSearchInput] = useState('');
  


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todoToDelete) => {
    // Filter out the deleted todo
    const updatedTodos = todos.filter((todo) => todo !== todoToDelete);
    
    // Update the serial numbers based on the current index
    const updatedTodosWithSerialNumbers = updatedTodos.map((todo, index) => ({
      ...todo,
      sno: index + 1
    }));

    // Update the state with the updated todos
    setTodos(updatedTodosWithSerialNumbers);
  };

  const addTodo = (titleValue , descValue) => {
    const newTodo = {
      sno: todos.length + 1,
      heading: titleValue,
      desc: descValue,
    };
    
    setTodos([...todos, newTodo]);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchIndex(searchInput - 1);
  };

  

  return (
    <Router>
      <Header handleSearch={handleSearch} searchInput={searchInput} setSearchInput={setSearchInput} setSearchIndex={setSearchIndex} />
      <Routes>
        <Route path="/" element={<><Addtodo addTodo={addTodo} /> <TodoList todos={todos} addTodo={addTodo} onDelete={onDelete} /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/list" element={<TodoList todos={todos} addTodo={addTodo} onDelete={onDelete} />} />
        
        <Route path={`/search/${searchInput}`} element={<Search  todos={initialTodos[searchInput-1]} onDelete={onDelete} />} />

        {/* <Route path= '/search/' element={<Search searchIndex={searchIndex} todos={initialTodos[0]} onDelete={onDelete} />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
