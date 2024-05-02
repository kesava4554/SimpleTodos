import React from 'react'
import './index.css'

const TodoItem = props => {
  // Destructuring props
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  // Function to handle todo deletion
  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
