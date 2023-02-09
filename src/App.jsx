import React, { useEffect, useState } from 'react'
import './App.css'
import Title from './components/Title'
import TodoItem from './components/TodoItem'

const App = () => {
  const [todoToAdd, setTodoToAdd] = useState('')
  const [todos, setTodos] = useState([createTodo('Ma première todo')])
  
  function createTodo(name) {
    return {
      id: (Math.random() * 200).toString(),
      name, // = name: name
      done: false,
    }
  }

  const addTodo = () => {
    if (!todoToAdd) {
      return
    }

    const newTodo = createTodo(todoToAdd)
    setTodos(prevTodos => {
      return [...prevTodos, newTodo]
    })

    setTodoToAdd('')
  }

  const updateTodo = (id, done) => {
    const newTodos = todos.map(todo => {
      if (todo.id !== id) {
        return todo
      }

      return {
        ...todo,
        done,
      }
    })

    setTodos(newTodos)
  }

  useEffect(() => {
    if (todos.length > 1) {
      alert('TODO BIEN AJOUTE')
    }
  }, [todos])

  useEffect(() => {
    console.log('BIENVENUE 1')
  }, [])

  return (
    <div className='container'>
      <Title name='Ma Todo List' secondName='second' />
      <div className="row">
        <label htmlFor="">
          Todo à ajouter
          <input type="text" value={todoToAdd} onChange={e => setTodoToAdd(e.target.value)} />
          <button className='btn btn-primary' onClick={() => addTodo()}>Ajouter</button>
        </label>
      </div>
      <div className="row">
        <div className="col-5">
          Mes todos en cours
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              id={todo.id}
              name={todo.name}
              done={todo.done}
              updateTodo={updateTodo}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
