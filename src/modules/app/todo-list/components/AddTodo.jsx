import React from 'react'
import { withState, withHandlers, pure, compose } from 'recompose'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

const enhance = compose(
  pure,
  connect(),
  withState('text', 'handleChange', ''),
  withHandlers({
    onChange: ({ handleChange }) => ({target}) => handleChange(text => target.value),
    reset: ({ handleChange }) => () => handleChange(() => ''),
    onSubmit: ({ text, dispatch, handleChange }) => (e) => (e.preventDefault(), dispatch(addTodo(text)), handleChange(() => ''))
  })
)

const AddTodo = ({ text, onChange, onSubmit }) => (
  (console.log(text), <div>
    <form onSubmit={onSubmit}>
      <input onChange={onChange} type='text' value={text} />
    </form>
  </div>)
)


export default enhance(AddTodo)