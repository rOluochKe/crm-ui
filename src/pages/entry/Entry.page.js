import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import LoginForm from '../../components/login/Login.component'
import PasswordReset from '../../components/password-reset/PasswordReset.component'

import './entry.style.css'

//Workflow

// [] Create password reset page
// [] Add request OTP form
// [] Add redux store with Redux-toolkit to handle the network status
// [] sent OTP to email from API (API Already created)
// [] Load form to input OTP and new password
// [] New password must match confirm password, form validation
// [] Connect to API Endpoint (API Already created)
// [] Add reducer through Redux-toolkit to handle the network status and provide the feedback to the user
// [] Send email, OTP and new password to update the password.

const Entry = () => {
  const [frmLoad, setFrmLoad] = useState('login')

  const handleOnResetSubmit = (e) => {
    e.preventDefault()
  }

  const formSwitcher = (frmType) => {
    setFrmLoad(frmType)
  }

  return (
    <div className='entry-page bg-info'>
      <Card className='form-box'>
        <Card.Body>
          {frmLoad === 'login' && <LoginForm formSwitcher={formSwitcher} />}

          {frmLoad === 'rest' && (
            <PasswordReset
              // handleOnChange={handleOnChange}
              handleOnResetSubmit={handleOnResetSubmit}
              formSwitcher={formSwitcher}
              // email={email}
            />
          )}
        </Card.Body>
      </Card>
    </div>
  )
}

export default Entry
