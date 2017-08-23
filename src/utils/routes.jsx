import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import * as c from 'shared/constants/routes'
import * as m from 'modules'

export default ({ location }) => (
  <Router>
    <Switch>
        <Route path='/home' component={m.home} />
        <Route path='/admin' component={m.admin} />
        <Route path='/app' component={m.app} />
        <Route component={m.app} />
    </Switch>
  </Router>
)