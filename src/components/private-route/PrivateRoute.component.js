import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

import { loginSuccess } from '../login/loginSlice'

import { fetchNewAccessJWT } from '../../api/userApi'

import DefaultLayout from '../../layout/Default.layout'

const isAuth = true

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.login)

  useEffect(() => {
    const updateAccessJWT = async () => {
      const result = await fetchNewAccessJWT()
      result && dispatch(loginSuccess())
    }

    !sessionStorage.getItem('accessJWT') &&
      localStorage.getItem('crmapp') &&
      updateAccessJWT()

    !isAuth && sessionStorage.getItem('accessJWT') && dispatch(loginSuccess())
  }, [dispatch, isAuth])

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <DefaultLayout>{children}</DefaultLayout> : <Redirect to='/' />
      }
    />
  )
}

export default PrivateRoute
