import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import LoginForm from '../../components/login/Login.component'
import PasswordReset from '../../components/password-reset/PasswordReset.component'

import './entry.style.css'

const Entry = () => {
  const [formLoad, setFormLoad] = useState('login')

  const handleOnResetSubmit = (e) => {
    e.preventDefault()
  }

  const formSwitcher = (frmType) => {
    setFormLoad(frmType)
  }

  return (
    <div className='entry-page bg-info'>
      <Card className='form-box'>
        <Card.Body>
          {formLoad === 'login' && <LoginForm formSwitcher={formSwitcher} />}

          {formLoad === 'rest' && (
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
