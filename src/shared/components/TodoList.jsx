import React from 'react'
import PT from 'prop-types'

import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <div>
    {
      todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
      ))
    }
  </div>
)

TodoList.propTypes = {
  todos: PT.arrayOf(
    PT.shape({
      id: PT.number.isRequired,
      isCompleted: PT.bool.isRequired,
      text: PT.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PT.func.isRequired
}

export default TodoList