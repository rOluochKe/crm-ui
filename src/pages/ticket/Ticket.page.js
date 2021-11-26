import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.component'
import tickets from '../../assets/data/dummy-tickets.json'
import MessageHistory from '../../components/message-history/MessageHistory.component'
import UpdateTicket from '../../components/update-ticket/UpdateTicket.component'

// const ticket = tickets[0];

const Ticket = () => {
  const { tId } = useParams()

  const [message, setMessage] = useState('')
  const [ticket, setTicket] = useState('')

  useEffect(() => {
    for (let i = 0; i < tickets.length; i++) {
      // eslint-disable-next-line
      if (tickets[i].id == tId) {
        setTicket(tickets[i])
        continue
      }
    }
  }, [message, tId])

  const handleOnChange = (e) => {
    setMessage(e.target.value)
  }

  const handleOnSubmit = () => {
    alert('Form submited!')
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='Ticket' />
        </Col>
      </Row>
      <Row>
        <Col className='text-weight-bolder text-secondary'>
          <div className='subject'>Subject: {ticket.subject}</div>
          <div className='date'>Ticket Opened: {ticket.addedAt}</div>
          <div className='status'>Status: {ticket.status}</div>
        </Col>
        <Col className='text-right'>
          <Button variant='outline-info'>Close Ticket</Button>
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col>{ticket.history && <MessageHistory msg={ticket.history} />}</Col>
      </Row>
      <hr />

      <Row className='mt-4'>
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default Ticket