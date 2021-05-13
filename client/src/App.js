import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import Register from './components/common/Register'
import Login from './components/common/Login'
import TeamIndex from './components/teams/TeamIndex'
import TeamShow from './components/teams/TeamShow'
import TeamNew from './components/teams/TeamNew'
import TeamUpdate from './components/teams/TeamUpdate'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/teams/:id/update" component={TeamUpdate} />
        <Route path="/teams/new" component={TeamNew} />
        <Route path="/teams/:id" component={TeamShow} />
        <Route path="/teams" component={TeamIndex} />
      </Switch>
    </BrowserRouter>
  )

}

export default App
