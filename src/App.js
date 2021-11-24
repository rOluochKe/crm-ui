import React from 'react'
import './App.css'
import DefaultLayout from './layout/Default.layout'
// import Dashboard from './pages/dashboard/Dashboard.page'

// import Entry from './pages/entry/Entry.page'
import AddTicket from './pages/new-ticket/AddTicket.page'

const App = () => {
  return (
    <div className='app'>
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  )
}

export default App
