import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageBreadcrumb from '../../components/breadcrumb/Breadcrumb.component'
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm.component'

import { shortText } from '../../utils/validation'

const initialFrmDt = {
  subject: '',
  issueDate: '',
  detail: '',
}

const initialFrmError = {
  subject: false,
  issueDate: false,
  detail: false,
}
const AddTicket = () => {
  const [frmData, setFrmData] = useState(initialFrmDt)
  const [frmDataErro, setFrmDataErro] = useState(initialFrmError)

  useEffect(() => {}, [frmData, frmDataErro])

  const handleOnChange = (e) => {
    const { name, value } = e.target

    setFrmData({
      ...frmData,
      [name]: value,
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    setFrmDataErro(initialFrmError)

    const isSubjectValid = await shortText(frmData.subject)

    setFrmDataErro({
      ...initialFrmError,
      subject: !isSubjectValid,
    })

    console.log('Form submit request received', frmData)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page='New Ticket' />
        </Col>
      </Row>

      <Row>
        <Col>
          <AddTicketForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt={frmData}
            frmDataErro={frmDataErro}
          />
        </Col>
      </Row>
    </Container>
  )
}

export default AddTicket
