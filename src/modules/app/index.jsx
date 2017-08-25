import React from 'react'
import { Route } from 'react-router-dom'

import * as r from './constants/routes'

import Dashboard from './dashboard'
import Header from './header'

import './style.scss'

export default ({ match }) => (
  <div className='content-container'>
    <Header />
   
    <div>
      <Route exact path={`${match.url}${r.dashboard}`} component={Dashboard}/>
       <Route exact path={match.url} render={() => (
        <h3>Main App page.</h3>
      )}/>
    </div>
  </div>
)