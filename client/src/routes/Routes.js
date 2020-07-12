import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import history from '../constants/history'
import LandingPage from '../views/LandingPage'
import Launches from '../views/Launches'
import Rockets from '../views/Rockets'
import LaunchDetails from '../views/LaunchDetails'

class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={LandingPage} exact />
          <Route path="/launches" component={Launches} exact />
          <Route path="/rockets" component={Rockets} />
          <Route path="/launches/:id" component={LaunchDetails} />
        </Switch>
      </Router>
    )
  }
}

export default Routes
