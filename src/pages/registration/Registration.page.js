import React from 'react'
import { Card } from 'react-bootstrap'

import RegistrationForm from '../../components/registration-form/RegistrationForm.component'

import './registration.style.css'

export const Registration = () => {
  return (
    <div className='registration-page bg-info'>
      <div className='mt-5'>
        <Card className='form-box'>
          <Card.Body>
            <RegistrationForm />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}
