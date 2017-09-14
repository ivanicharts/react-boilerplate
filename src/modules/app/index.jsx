import React from 'react'
import { Route } from 'react-router-dom'

import * as r from './constants/routes'

import Dashboard from './dashboard'
import Header from './header'
import TodoList from './todo-list'

import './style.scss'

export default ({ match }) => (
  <div className='content-container'>
    <Header />
   
    <div>
      <Route path={`${match.url}${r.dashboard}`} component={Dashboard}/>
      <Route exact path={match.url} render={() => (
        <h3>Main App page.</h3>
      )}/>
      <Route path={`${r.todoList}`} component={TodoList} />
    </div>
  </div>
)