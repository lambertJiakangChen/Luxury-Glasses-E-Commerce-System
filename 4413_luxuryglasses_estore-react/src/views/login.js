import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import LoginRegisterAccount from '../components/login-register-account'
import Footer from '../components/footer'
import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>Login - 4413_LuxuryGlasses_EStore</title>
        <meta property="og:title" content="Login - 4413_LuxuryGlasses_EStore" />
      </Helmet>
      <Navbar></Navbar>
      <div className="login-main">
        <LoginRegisterAccount></LoginRegisterAccount>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Login
