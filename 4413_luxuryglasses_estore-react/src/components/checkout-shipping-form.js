import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-shipping-form.css'

const CheckoutShippingForm = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div
      id="checkout_shipping_form"
      className={`checkout-shipping-form-log-in ${props.rootClassName} `}
    >
      <form
        id="checkoutshipping"
        name="checkout shipping"
        line1
        line2
        action="/checkout/shipping?"
        method="POST"
        postal
        country
        enctype="application/x-www-form-urlencoded"
        fullname
        province
        className="checkout-shipping-form-form"
      >
        <div className="checkout-shipping-form-checkout-stage">
          <span className="checkout-shipping-form-text">
            <span className="">Account</span>
          </span>
          <span className="checkout-shipping-form-text02">
            <span className="">Shipping</span>
          </span>
          <span className="checkout-shipping-form-text04">
            <span className="">Payment</span>
          </span>
          <span className="checkout-shipping-form-text06">{props.text4}</span>
          <div className="checkout-shipping-form-group6">
            <img
              alt={props.Line5_alt}
              src={props.Line5_src}
              className="checkout-shipping-form-line5"
            />
            <img
              alt={props.Line6_alt}
              src={props.Line6_src}
              className="checkout-shipping-form-line6"
            />
            <img
              alt={props.checkboxcirclefill3_alt}
              src={props.checkboxcirclefill3_src}
              className="checkout-shipping-form-checkboxcirclefill3"
            />
          </div>
          <div className="checkout-shipping-form-group61">
            <img
              alt={props.Line5_alt1}
              src={props.Line5_src1}
              className="checkout-shipping-form-line51"
            />
            <img
              alt={props.Line6_alt1}
              src={props.Line6_src1}
              className="checkout-shipping-form-line61"
            />
            <img
              alt={props.checkboxcirclefill3_alt1}
              src={props.checkboxcirclefill3_src1}
              className="checkout-shipping-form-checkboxcirclefill31"
            />
          </div>
          <div className="checkout-shipping-form-group5">
            <img
              alt={props.Line5_alt2}
              src={props.Line5_src2}
              className="checkout-shipping-form-line52"
            />
            <img
              alt={props.Line6_alt2}
              src={props.Line6_src2}
              className="checkout-shipping-form-line62"
            />
            <img
              alt={props.checkboxcirclefill3_alt2}
              src={props.checkboxcirclefill3_src2}
              className="checkout-shipping-form-checkboxcirclefill32"
            />
          </div>
        </div>
        <h2 className="checkout-shipping-form-text07">{props.heading}</h2>
        <label
          id="country-label-shipping"
          htmlFor="country-input-shipping"
          className="checkout-shipping-form-label"
        >
          {props.text}
        </label>
        <input
          type="text"
          id="country-input-shipping"
          required
          placeholder={props.country}
          className="checkout-shipping-form-textinput input"
        />
        <label
          id="name-label-shipping"
          htmlFor="name-input-shipping"
          className="checkout-shipping-form-label1"
        >
          {props.text6}
        </label>
        <input
          type="text"
          id="name-input-shipping"
          required
          placeholder={props.name}
          className="checkout-shipping-form-textinput1 input"
        />
        <label
          id="line1-label-checkout"
          htmlFor="line1-input-shipping"
          className="checkout-shipping-form-text08"
        >
          {props.text5}
        </label>
        <input
          type="text"
          id="line1-input-shipping"
          name="line1"
          required
          placeholder={props.line1}
          className="checkout-shipping-form-textinput2 input"
        />
        <label
          id="line2-label-checkout"
          htmlFor="line2-input-shipping"
          className="checkout-shipping-form-label2"
        >
          {props.text51}
        </label>
        <input
          type="text"
          id="line2-input-shipping"
          name="line2"
          placeholder={props.line2}
          className="checkout-shipping-form-textinput3 input"
        />
        <label
          id="postal-label-checkout"
          htmlFor="postal-input-shipping"
          className="checkout-shipping-form-label3"
        >
          {props.text511}
        </label>
        <input
          type="text"
          id="postal-input-shipping"
          name="postal"
          required
          placeholder={props.postal}
          className="checkout-shipping-form-textinput4 input"
        />
        <label
          id="province-label-checkout"
          htmlFor="province-input-shipping"
          className="checkout-shipping-form-label4"
        >
          {props.text5111}
        </label>
        <input
          type="text"
          id="province-input-shipping"
          name="province"
          required
          placeholder={props.province}
          className="checkout-shipping-form-textinput5 input"
        />
        <div className="checkout-shipping-form-proceed-options">
          <span className="checkout-shipping-form-text09">
            <span className="">Login</span>
          </span>
          <span className="checkout-shipping-form-text11">
            <span className="">Cancel order</span>
          </span>
          <Link
            to="/checkout-payment"
            className="checkout-shipping-form-navlink button"
          >
            {props.button_payment}
          </Link>
        </div>
      </form>
    </div>
  )
}

CheckoutShippingForm.defaultProps = {
  text5: 'Line 1',
  Line5_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  Line5_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  checkboxcirclefill3_alt1: 'checkboxcirclefill31352',
  checkboxcirclefill3_alt2: 'checkboxcirclefill31358',
  rootClassName: '',
  Line6_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  checkboxcirclefill3_alt: 'checkboxcirclefill31352',
  heading: 'Shipping Details',
  Line6_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  line1: '123 Keele Street',
  text6: 'Full Name',
  checkboxcirclefill3_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  text511: 'Postal Code',
  text5111: 'Province',
  text4: 'Review',
  postal: 'Postal Code',
  line2: '',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  button_payment: 'Payment details',
  checkboxcirclefill3_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/91bb983f-b403-438f-9a2c-f687461681a5?org_if_sml=1454',
  Line5_alt2: 'Line51356',
  Line6_alt2: 'Line61357',
  name: 'Full Name',
  Line5_alt: 'Line51350',
  province: 'Province',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  Line6_alt1: 'Line61351',
  country: 'Country',
  text51: 'Line 2',
  Line5_alt1: 'Line51350',
  Line6_alt: 'Line61351',
  text: 'Country',
  checkboxcirclefill3_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
}

CheckoutShippingForm.propTypes = {
  text5: PropTypes.string,
  Line5_src: PropTypes.string,
  Line5_src1: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  rootClassName: PropTypes.string,
  Line6_src: PropTypes.string,
  checkboxcirclefill3_alt: PropTypes.string,
  heading: PropTypes.string,
  Line6_src1: PropTypes.string,
  line1: PropTypes.string,
  text6: PropTypes.string,
  checkboxcirclefill3_src: PropTypes.string,
  text511: PropTypes.string,
  text5111: PropTypes.string,
  text4: PropTypes.string,
  postal: PropTypes.string,
  line2: PropTypes.string,
  Line6_src2: PropTypes.string,
  button_payment: PropTypes.string,
  checkboxcirclefill3_src2: PropTypes.string,
  Line5_alt2: PropTypes.string,
  Line6_alt2: PropTypes.string,
  name: PropTypes.string,
  Line5_alt: PropTypes.string,
  province: PropTypes.string,
  Line5_src2: PropTypes.string,
  Line6_alt1: PropTypes.string,
  country: PropTypes.string,
  text51: PropTypes.string,
  Line5_alt1: PropTypes.string,
  Line6_alt: PropTypes.string,
  text: PropTypes.string,
  checkboxcirclefill3_src1: PropTypes.string,
}

export default CheckoutShippingForm
