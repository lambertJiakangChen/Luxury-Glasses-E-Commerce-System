import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-review-form.css'

const CheckoutReviewForm = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div
      id="checkout_cofirmation_form"
      className={`checkout-review-form-log-in ${props.rootClassName} `}
    >
      <form
        id="checkoutreview"
        name="checkout review"
        action="/checkout/reviewOrder"
        method="POST"
        enctype="application/x-www-form-urlencoded"
        confirmed="true"
        className="checkout-review-form-form"
      >
        <div className="checkout-review-form-checkout-stage">
          <span className="checkout-review-form-text">
            <span className="">Account</span>
          </span>
          <span className="checkout-review-form-text02">
            <span className="">Shipping</span>
          </span>
          <span className="checkout-review-form-text04">
            <span className="">Payment</span>
          </span>
          <span className="checkout-review-form-text06">{props.text4}</span>
          <div className="checkout-review-form-group6">
            <img
              alt={props.Line5_alt}
              src={props.Line5_src}
              className="checkout-review-form-line5"
            />
            <img
              alt={props.Line6_alt}
              src={props.Line6_src}
              className="checkout-review-form-line6"
            />
            <img
              alt={props.checkboxcirclefill3_alt}
              src={props.checkboxcirclefill3_src}
              className="checkout-review-form-checkboxcirclefill3"
            />
          </div>
          <div className="checkout-review-form-group61">
            <img
              alt={props.Line5_alt1}
              src={props.Line5_src1}
              className="checkout-review-form-line51"
            />
            <img
              alt={props.Line6_alt1}
              src={props.Line6_src1}
              className="checkout-review-form-line61"
            />
            <img
              alt={props.checkboxcirclefill3_alt1}
              src={props.checkboxcirclefill3_src1}
              className="checkout-review-form-checkboxcirclefill31"
            />
          </div>
          <div className="checkout-review-form-group5">
            <img
              alt={props.Line5_alt2}
              src={props.Line5_src2}
              className="checkout-review-form-line52"
            />
            <img
              alt={props.Line6_alt2}
              src={props.Line6_src2}
              className="checkout-review-form-line62"
            />
            <img
              alt={props.checkboxcirclefill3_alt2}
              src={props.checkboxcirclefill3_src2}
              className="checkout-review-form-checkboxcirclefill32"
            />
          </div>
        </div>
        <h2 className="checkout-review-form-text07">{props.heading}</h2>
        <div className="checkout-review-form-proceed-options">
          <span className="checkout-review-form-text08">
            <span className="">Cancel order</span>
          </span>
          <Link
            to="/checkout-review"
            className="checkout-review-form-navlink button"
          >
            {props.button_review}
          </Link>
        </div>
        <div className="checkout-review-form-confirmation">
          <label
            id="confirmation-label-review"
            htmlFor="confirmation-checkbox-review"
            className="checkout-review-form-text10"
          >
            {props.cofirmation}
          </label>
          <input
            type="checkbox"
            id="confirmation-checkbox-review"
            name="cofirmed"
            value="true"
            checked="true"
            required
            className="checkout-review-form-checkbox"
          />
        </div>
      </form>
    </div>
  )
}

CheckoutReviewForm.defaultProps = {
  Line6_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  checkboxcirclefill3_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  button_review: 'Place Order',
  Line5_alt2: 'Line51356',
  Line5_alt: 'Line51350',
  heading: 'Review Order',
  checkboxcirclefill3_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  rootClassName: '',
  checkboxcirclefill3_alt: 'checkboxcirclefill31352',
  Line5_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  Line6_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  Line6_alt2: 'Line61357',
  Line6_alt: 'Line61351',
  checkboxcirclefill3_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/91bb983f-b403-438f-9a2c-f687461681a5?org_if_sml=1454',
  Line5_alt1: 'Line51350',
  text4: 'Review',
  checkboxcirclefill3_alt1: 'checkboxcirclefill31352',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  Line6_alt1: 'Line61351',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  Line5_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  checkboxcirclefill3_alt2: 'checkboxcirclefill31358',
  cofirmation: 'Check to confirm order',
}

CheckoutReviewForm.propTypes = {
  Line6_src1: PropTypes.string,
  checkboxcirclefill3_src1: PropTypes.string,
  button_review: PropTypes.string,
  Line5_alt2: PropTypes.string,
  Line5_alt: PropTypes.string,
  heading: PropTypes.string,
  checkboxcirclefill3_src: PropTypes.string,
  rootClassName: PropTypes.string,
  checkboxcirclefill3_alt: PropTypes.string,
  Line5_src: PropTypes.string,
  Line6_src: PropTypes.string,
  Line6_alt2: PropTypes.string,
  Line6_alt: PropTypes.string,
  checkboxcirclefill3_src2: PropTypes.string,
  Line5_alt1: PropTypes.string,
  text4: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  Line5_src2: PropTypes.string,
  Line6_alt1: PropTypes.string,
  Line6_src2: PropTypes.string,
  Line5_src1: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  cofirmation: PropTypes.string,
}

export default CheckoutReviewForm
