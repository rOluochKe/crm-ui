import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Spinner,
  Alert,
} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { loginPending, loginSuccess, loginFail } from './loginSlice'
import { userLogin } from '../../api/userApi'
import { getUserProfile } from '../../pages/dashboard/userAction'

const LoginForm = ({ formSwitcher }) => {
  const dispatch = useDispatch()
  const history = useHistory()

  const { isLoading, isAuth, error } = useSelector((state) => state.login)

  useEffect(() => {
    sessionStorage.getItem('accessJWT') && history.push('/dashboard')
  }, [history, isAuth])

  const [email, setEmail] = useState('e2@e.com')
  const [password, setPassword] = useState('password')

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

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      return alert('Fill up all the form!')
    }

    dispatch(loginPending())

    try {
      const isAuth = await userLogin({ email, password })

      if (isAuth.status === 'error') {
        return dispatch(loginFail(isAuth.message))
      }

      dispatch(loginSuccess())
      dispatch(getUserProfile())
      history.push('/dashboard')
    } catch (error) {
      dispatch(loginFail(error.message))
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-info text-center'>Client Login</h1>
          <hr />
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form autoComplete='off' onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                value={email}
                onChange={handleOnChange}
                placeholder='Enter email'
                required
              />
              <Form.Control
                type='password'
                name='password'
                value={password}
                onChange={handleOnChange}
                placeholder='Type password'
                required
              />
            </Form.Group>
            <Button type='submit'>Login</Button>
            {isLoading && <Spinner variant='primary' animation='border' />}
          </Form>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          <a href='/password-reset'>Forget Password?</a>
        </Col>
      </Row>
      <Row className='py-4'>
        <Col>
          Are you new here? <a href='/registration'>Register Now</a>
        </Col>
      </Row>
    </Container>
  )
}

LoginForm.propTypes = {
  formSwitcher: PropTypes.func.isRequired,
}

export default LoginForm
