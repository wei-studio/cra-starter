import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { history } from '../config/store'

import Home from '../pages/Home/Loadable'
import Login from '../pages/Login/Loadable'

const Routes = (props) => {
  return (
    <ConnectedRouter history={history} >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </ConnectedRouter>
  )
}

export default Routes