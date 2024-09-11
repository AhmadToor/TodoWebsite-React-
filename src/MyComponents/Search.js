import React from 'react';
import Todo from '../MyComponents/Todo';

export default function Search({ todos, onDelete }) {
    if (!todos) {
        return(
            <div>
      <h3 className='todolist'>Your Search Result:</h3>
      <div className='container car' >
        
        <p>No result found.</p>
        
      </div>
    </div>
        )
        
    }
  return (
    <div>
      <h3 className='todolist'>Your Search Result:</h3>
      <div className='container car' >
        
          <Todo key={todos.sno} todo={todos} onDelete={onDelete} />
        
      </div>
    </div>
  );
}
