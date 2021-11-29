import React from 'react'
import { Header } from './partial/Header.component'
import { Footer } from './partial/Footer.component'

export const DefaultLayout = ({ children }) => {
  return (
    <div className='default-layout'>
      <header className='header mb-2'>
        <Header />
      </header>

      <main className='main'>{children}</main>

      <footer className='footer'>
        <Footer />
      </footer>
    </div>
  )
}
