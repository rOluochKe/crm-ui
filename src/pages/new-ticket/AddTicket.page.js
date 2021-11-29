import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.component'
import { AddTicketForm } from '../../components/add-ticket-form/AddTicketForm.component'

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='New Ticket' />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  )
}
