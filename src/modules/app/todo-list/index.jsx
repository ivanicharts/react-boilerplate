import React from 'react'
import { connect } from 'react-redux'
import { pure, compose } from 'recompose'

import TodoList from 'shared/components/TodoList'
import Footer from './components/Footer' 
import AddTodo from './components/AddTodo' 
import { getVisibleTodos } from './selectors'
import { toggleTodo } from './actions'

const TodoListContainer = ({ todos, onTodoClick }) => (
  <div>
    <AddTodo />
    <TodoList todos={todos} onTodoClick={onTodoClick} />
    <Footer />
  </div>
)

const mapStateToProps = ({todo}, props) => ({
  todos: getVisibleTodos(todo, props),
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => dispatch(toggleTodo(id))
})

const VisibleTodoList = compose(pure, connect(mapStateToProps, mapDispatchToProps))(TodoListContainer)

export default VisibleTodoList
