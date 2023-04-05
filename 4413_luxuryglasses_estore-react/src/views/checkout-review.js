import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import CheckoutReviewForm from '../components/checkout-review-form'
import Footer from '../components/footer'
import './checkout-review.css'

const CheckoutReview = (props) => {
  return (
    <div id="checkout_review_page" className="checkout-review-container">
      <Helmet>
        <title>CheckoutReview - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="CheckoutReview - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name7"></Navbar>
      <div className="checkout-review-main">
        <div className="checkout-review-confirm-form">
          <img
            alt="Line1110"
            src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
            className="checkout-review-line1"
          />
          <img
            alt="Rectangle1140"
            src="/playground_assets/rectangle1140-huv-800h.png"
            className="checkout-review-rectangle1"
          />
          <CheckoutReviewForm rootClassName="checkout-review-form-root-class-name"></CheckoutReviewForm>
          <img
            alt="Rectangle2141"
            src="/playground_assets/rectangle2141-ud15-600w.png"
            className="checkout-review-rectangle2"
          />
          <div className="checkout-review-ordersummary">
            <span className="checkout-review-text">
              <span>Order Summary</span>
            </span>
            <span className="checkout-review-text02">
              <span>Sub total</span>
            </span>
            <span className="checkout-review-text04">
              <span>Tax</span>
            </span>
            <span className="checkout-review-text06">
              <span>Shipping</span>
            </span>
            <span className="checkout-review-text08">
              <span>Total</span>
            </span>
            <span className="checkout-review-text10">$320.45</span>
            <span className="checkout-review-text11">
              <span>Free</span>
            </span>
            <span className="checkout-review-text13">$3.45</span>
            <span className="checkout-review-text14">$316.55</span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default CheckoutReview
