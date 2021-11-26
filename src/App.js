import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css'

import PrivateRoute from './components/private-route/PrivateRoute.component'

import Ticket from './pages/ticket/Ticket.page'
import TicketLists from './pages/ticket-list/TicketLists.page'
import Dashboard from './pages/dashboard/Dashboard.page'
import { UserVerification } from './pages/user-verification/UserVerification.page'
import Entry from './pages/entry/Entry.page'
import { PasswordOtpForm } from './pages/password-reset/PasswordOtpForm.page'
import { Registration } from './pages/registration/Registration.page'
import AddTicket from './pages/new-ticket/AddTicket.page'

const App = () => {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Entry />
          </Route>
          <Route exact path='/registration'>
            <Registration />
          </Route>
          <Route exact path='/password-reset'>
            <PasswordOtpForm />
          </Route>
          <Route exact path='/verification/:_id/:email'>
            <UserVerification />
          </Route>

          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path='/add-ticket'>
            <AddTicket />
          </PrivateRoute>
          <PrivateRoute path='/tickets'>
            <TicketLists />
          </PrivateRoute>
          <PrivateRoute path='/ticket/:tId'>
            <Ticket />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  )
}

export default App
