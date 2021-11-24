import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import LoginForm from '../../components/login/Login.component'
import PasswordReset from '../../components/password-reset/PasswordReset.component'

import './entry.style.css'

const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState('login')

  const handleOnChange = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'email':
        setEmail(value)
        break
      case 'password':
        setPassword(value)
        break
      default:
        break
    }
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    if (!email || !password) {
      return alert('Fill up all the required fields!')
    }

    // TODO Call api to submit form
    console.log(email, password)
  }

  const handleOnResetSubmit = (e) => {
    e.preventDefault()

    if (!email) {
      return alert('Fill up the required field!')
    }

    // TODO Call api to submit form
    console.log(email)
  }

  const formSwitcher = (formType) => {
    setFormLoad(formType)
  }

  return (
    <div className='entry-page bg-info'>
      <Card className='form-box'>
        <Card.Body>
          {formLoad === 'login' && (
            <LoginForm
              handleOnChange={handleOnChange}
              email={email}
              password={password}
              handleOnSubmit={handleOnSubmit}
              formSwitcher={formSwitcher}
            />
          )}

          {formLoad === 'reset' && (
            <PasswordReset
              handleOnChange={handleOnChange}
              email={email}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Entry
