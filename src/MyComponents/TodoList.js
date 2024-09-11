import React from 'react';
import Todo from "./Todo.js";

export default function TodoList(props) {
  

  // Check if todos array is empty
  if (props.todos.length === 0) {
    return (
      <div>
        <h3 className='todolist'>Todo List</h3>
        <div className='container car' >
          No Todos to display
        </div>
      </div>
    );
  }

  // If todos array is not empty, render Todo components
  return (
    <div>
      <h3 className='todolist'>Todo List</h3>
      <div className='container car' >
        {props.todos.map((todo) => (
          <Todo key={todo.sno} todo={todo} onDelete={props.onDelete} />
        ))}
      </div>
    </div>
  );
}
