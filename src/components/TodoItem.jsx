import React from 'react';

const TodoItem = ({ id, name, done, updateTodo }) => {
  return (
    <li>
        {!done ? (
           <input type="checkbox" checked={done} onChange={() => updateTodo(id, true)} />
        ) : (
            <button className='btn btn-secondary' onClick={() => updateTodo(id, false)}>Reset</button>
        )}
      {name} - {done ? 'Fini' : 'En cours'}   
    </li>
  );
}

export default TodoItem;
