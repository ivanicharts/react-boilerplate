import { combineReducers } from 'redux'

export const todos = (state=[], action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return [ ...state, action.todo ]
  case 'TOGGLE_TODO':
    return state.map((todo) => todo.id === action.id ? {...todo, isCompleted: !todo.isCompleted} : todo)
  default:
    return state
  }
}

export const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch(action.type) {
  case 'SET_VISIBILITY_FILTER':
    return action.filter
  default:
    return state
  }
}

export default combineReducers({ todos, visibilityFilter })