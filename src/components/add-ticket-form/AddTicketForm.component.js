import React from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

import './add-ticket-form.style.css'

export const AddTicketForm = ({
  handleOnSubmit,
  handleOnChange,
  formDataError,
  formData,
}) => {
  console.log(formData)
  return (
    <Card className='mt-3 add-new-ticket bg-light'>
      <Card.Body>
        <h1 className='text-info text-center'>Add New Ticket</h1>
        <hr />
        <Form autoComplete='off' onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Subject
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                name='subject'
                value={formData.subject}
                // minLength="3"
                maxLength='100'
                onChange={handleOnChange}
                placeholder='Subject'
                required
              />
              <Form.Text className='text-danger'>
                {formDataError.subject && 'SUbject is required!'}
              </Form.Text>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>
              Issue Found
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                type='date'
                name='issueDate'
                value={formData.issueDate}
                onChange={handleOnChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              as='textarea'
              name='detail'
              rows='5'
              value={formData.detail}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Button type='submit' variant='info' block>
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
  formDataError: PropTypes.object.isRequired,
}
