import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Ordersummary from '../components/ordersummary'
import CheckoutLoginForm from '../components/checkout-login-form'
import Footer from '../components/footer'
import './checkout-login.css'

const CheckoutLogin = (props) => {
  return (
    <div id="checkout_login_page" className="checkout-login-container">
      <Helmet>
        <title>CheckoutLogin - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="CheckoutLogin - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name2"></Navbar>
      <div className="checkout-login-main">
        <div id="checkout_loginform" className="checkout-login-login-form">
          <img
            alt="Line1110"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="checkout-login-line1"
          />
          <img
            alt="Rectangle1140"
            src="/playground_assets/rectangle1140-huv-800h.png"
            className="checkout-login-rectangle1"
          />
          <img
            alt="Rectangle2141"
            src="/playground_assets/rectangle2141-ud15-600w.png"
            className="checkout-login-rectangle2"
          />
          <Ordersummary rootClassName="ordersummary-root-class-name"></Ordersummary>
          <CheckoutLoginForm rootClassName="checkout-login-form-root-class-name"></CheckoutLoginForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CheckoutLogin
