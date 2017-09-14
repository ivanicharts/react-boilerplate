import React from 'react'
import PropTypes from 'prop-types'
import styled from 'emotion/react'
import { css } from 'emotion'

const states = {
  completed: css`
    color: green;
  `,
  uncompleted: css`
    color: red;
  `
}

const TodoItem = styled('div')`
  composes: ${({ isCompleted }) => (isCompleted ? states['completed'] : states['uncompleted']) }
`

const Todo = ({ onClick, isCompleted, text }) => (
  <TodoItem
    isCompleted={isCompleted}
    onClick={onClick}>
    { text }
  </TodoItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo