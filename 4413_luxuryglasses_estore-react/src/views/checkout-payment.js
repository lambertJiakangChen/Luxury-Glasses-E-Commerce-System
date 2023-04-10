import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import CheckoutPaymentForm from '../components/checkout-payment-form'
import Footer from '../components/footer'
import './checkout-payment.css'

const CheckoutPayment = (props) => {
  return (
    <div id="checkout_payment_page" className="checkout-payment-container">
      <Helmet>
        <title>CheckoutPayment - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="CheckoutPayment - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name6"></Navbar>
      <div className="checkout-payment-main">
        <div className="checkout-payment-payment-form">
          <img
            alt="Line1110"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="checkout-payment-line1"
          />
          <img
            alt="Rectangle1140"
            src="/playground_assets/rectangle1140-huv-800h.png"
            className="checkout-payment-rectangle1"
          />
          <img
            alt="Rectangle2141"
            src="/playground_assets/rectangle2141-ud15-600w.png"
            className="checkout-payment-rectangle2"
          />
          <div className="checkout-payment-ordersummary">
            <span className="checkout-payment-text">
              <span>Order Summary</span>
            </span>
            <span className="checkout-payment-text02">
              <span>Sub total</span>
            </span>
            <span className="checkout-payment-text04">
              <span>Tax</span>
            </span>
            <span className="checkout-payment-text06">
              <span>Shipping</span>
            </span>
            <span className="checkout-payment-text08">
              <span>Total</span>
            </span>
            <span className="checkout-payment-text10">
              <span>£320.45</span>
            </span>
            <span className="checkout-payment-text12">
              <span>Free</span>
            </span>
            <span className="checkout-payment-text14">$3.45</span>
            <span className="checkout-payment-text15">$316.55</span>
          </div>
          <CheckoutPaymentForm rootClassName="checkout-payment-form-root-class-name"></CheckoutPaymentForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CheckoutPayment
