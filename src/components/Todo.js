import React from 'react'
 
import './index.css'

export const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => (
  <div className="Todo">
    <h1
      onClick={() => toggleComplete(task.id)}
      className={`${task.completed ? 'completed' : ''}  h1`}
    >
      {task.task}
    </h1>
    <div className="color">
      <button className="icon1"
        onClick={() => editTodo(task.id)}>
        Edit
        </button>
      <button className="icon2"
        onClick={() => deleteTodo(task.id)}> 
        Delete
        </button>
    </div>
  </div>
)
