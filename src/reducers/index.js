import { combineReducers } from 'redux'

import app from './app'
import todo from 'modules/app/todo-list/reducers'

export default combineReducers(
  { app, todo }
)