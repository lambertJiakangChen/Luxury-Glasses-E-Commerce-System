import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import CheckoutShippingForm from '../components/checkout-shipping-form'
import Footer from '../components/footer'
import './checkout-shipping.css'

const CheckoutShipping = (props) => {
  return (
    <div id="checkout_shipping_page" className="checkout-shipping-container">
      <Helmet>
        <title>CheckoutShipping - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="CheckoutShipping - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <div className="checkout-shipping-main">
        <div className="checkout-shipping-shipping-form">
          <img
            alt="Line1110"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="checkout-shipping-line1"
          />
          <img
            alt="Rectangle1140"
            src="/playground_assets/rectangle1140-huv-800h.png"
            className="checkout-shipping-rectangle1"
          />
          <img
            alt="Rectangle2141"
            src="/playground_assets/rectangle2141-ud15-600w.png"
            className="checkout-shipping-rectangle2"
          />
          <div className="checkout-shipping-ordersummary">
            <span className="checkout-shipping-text">
              <span>Order Summary</span>
            </span>
            <span className="checkout-shipping-text02">
              <span>Sub total</span>
            </span>
            <span className="checkout-shipping-text04">
              <span>Tax</span>
            </span>
            <span className="checkout-shipping-text06">
              <span>Shipping</span>
            </span>
            <span className="checkout-shipping-text08">
              <span>Total</span>
            </span>
            <span className="checkout-shipping-text10">
              <span>£320.45</span>
            </span>
            <span className="checkout-shipping-text12">
              <span>Free</span>
            </span>
            <span className="checkout-shipping-text14">$3.45</span>
            <span className="checkout-shipping-text15">$316.55</span>
          </div>
          <CheckoutShippingForm rootClassName="checkout-shipping-form-root-class-name"></CheckoutShippingForm>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CheckoutShipping
