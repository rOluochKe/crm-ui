import React from 'react'
import Footer from './partial/Footer.component'
import Header from './partial/Header.component'

const DefaultLayout = ({ children }) => {
  return (
    <div className='default-layout'>
      <header className='header'>
        <Header />
      </header>

      <main className='main'>{children}</main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default DefaultLayout
