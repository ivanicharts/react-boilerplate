import React from 'react'
import { Link, Route } from 'react-router-dom'

import Dashboard from './dashboard'
import Header from './header'

import './style.scss'

export default ({ match }) => (
  <div className='content-container'>
    

    <Header />
    
    {/*<Dashboard />*/}
   
    <div>
      <Route exact path={`${match.url}/dashboard`} component={Dashboard}/>

       <Route exact path={match.url} render={() => (
        <h3>Main page.</h3>
      )}/>
    </div>
  </div>
)