import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import CheckoutRegisterForm from '../components/checkout-register-form'
import Footer from '../components/footer'
import './checkout-register.css'

const CheckoutRegister = (props) => {
  return (
    <div id="checkout_register_page" className="checkout-register-container">
      <Helmet>
        <title>CheckoutRegister - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="CheckoutRegister - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name9"></Navbar>
      <div className="checkout-register-main">
        <div className="checkout-register-login-form">
          <img
            alt="Line1110"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="checkout-register-line1"
          />
          <img
            alt="Rectangle1140"
            src="/playground_assets/rectangle1140-huv-800h.png"
            className="checkout-register-rectangle1"
          />
          <img
            alt="Rectangle2141"
            src="/playground_assets/rectangle2141-ud15-600w.png"
            className="checkout-register-rectangle2"
          />
          <CheckoutRegisterForm rootClassName="checkout-register-form-root-class-name"></CheckoutRegisterForm>
          <div className="checkout-register-ordersummary">
            <span className="checkout-register-text">
              <span>Order Summary</span>
            </span>
            <span className="checkout-register-text02">
              <span>Sub total</span>
            </span>
            <span className="checkout-register-text04">
              <span>Tax</span>
            </span>
            <span className="checkout-register-text06">
              <span>Shipping</span>
            </span>
            <span className="checkout-register-text08">
              <span>Total</span>
            </span>
            <span className="checkout-register-text10">$320.45</span>
            <span className="checkout-register-text11">Free</span>
            <span className="checkout-register-text12">$3.45</span>
            <span className="checkout-register-text13">$316.55</span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CheckoutRegister
