import React, { Component } from 'react'
import {Router, Switch, Route} from 'react-router-dom'
import history from "../constants/history"
import LandingPage from "../views/LandingPage"


 class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" component={LandingPage} />
                </Switch>
            </Router>
        )
    }
}

export default Routes