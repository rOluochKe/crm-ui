import React from 'react'
import './App.css'
import DefaultLayout from './layout/Default.layout'
import Dashboard from './pages/dashboard/Dashboard.page'

// import Entry from './pages/entry/Entry.page'

const App = () => {
  return (
    <div className='app'>
      {/* <Entry /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  )
}

export default App
