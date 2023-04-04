import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-register-form.css'

const CheckoutRegisterForm = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div
      id="checkout_register_form"
      className={`checkout-register-form-log-in ${props.rootClassName} `}
    >
      <form
        id="checkoutregister"
        name="checkout account register"
        email
        fname
        lname
        action="/checkout/proceedregister"
        method="POST"
        enctype="application/x-www-form-urlencoded"
        password
        username
        className="checkout-register-form-form"
      >
        <div className="checkout-register-form-checkout-stage">
          <span className="checkout-register-form-text">
            <span className="">Account</span>
          </span>
          <span className="checkout-register-form-text02">
            <span className="">Shipping</span>
          </span>
          <span className="checkout-register-form-text04">
            <span className="">Payment</span>
          </span>
          <span className="checkout-register-form-text06">{props.text4}</span>
          <div className="checkout-register-form-group6">
            <img
              alt={props.Line5_alt}
              src={props.Line5_src}
              className="checkout-register-form-line5"
            />
            <img
              alt={props.Line6_alt}
              src={props.Line6_src}
              className="checkout-register-form-line6"
            />
            <img
              alt={props.checkboxcirclefill3_alt}
              src={props.checkboxcirclefill3_src}
              className="checkout-register-form-checkboxcirclefill3"
            />
          </div>
          <div className="checkout-register-form-group61">
            <img
              alt={props.Line5_alt1}
              src={props.Line5_src1}
              className="checkout-register-form-line51"
            />
            <img
              alt={props.Line6_alt1}
              src={props.Line6_src1}
              className="checkout-register-form-line61"
            />
            <img
              alt={props.checkboxcirclefill3_alt1}
              src={props.checkboxcirclefill3_src1}
              className="checkout-register-form-checkboxcirclefill31"
            />
          </div>
          <div className="checkout-register-form-group5">
            <img
              alt={props.Line5_alt2}
              src={props.Line5_src2}
              className="checkout-register-form-line52"
            />
            <img
              alt={props.Line6_alt2}
              src={props.Line6_src2}
              className="checkout-register-form-line62"
            />
            <img
              alt={props.checkboxcirclefill3_alt2}
              src={props.checkboxcirclefill3_src2}
              className="checkout-register-form-checkboxcirclefill32"
            />
          </div>
        </div>
        <h2 className="checkout-register-form-text07">{props.heading}</h2>
        <label
          id="fname-label-register"
          htmlFor="fname-input-register"
          className="checkout-register-form-text08"
        >
          {props.first_name}
        </label>
        <input
          type="text"
          id="fname-input-register"
          name="fname"
          placeholder={props.fname_input}
          className="checkout-register-form-textinput input"
        />
        <label
          id="lname-label-register"
          htmlFor="lname-input-register"
          className="checkout-register-form-text09"
        >
          {props.last_name}
        </label>
        <input
          type="text"
          id="lname-input-register"
          name="lname"
          placeholder={props.lname_input}
          className="checkout-register-form-textinput1 input"
        />
        <label
          id="email-label-register"
          htmlFor="email-input-register"
          className="checkout-register-form-text10"
        >
          {props.email}
        </label>
        <input
          type="text"
          id="email-input-register"
          name="email"
          placeholder={props.email_input}
          className="checkout-register-form-textinput2 input"
        />
        <label
          id="username-label-register"
          htmlFor="username-input-register"
          className="checkout-register-form-text11"
        >
          {props.text5}
        </label>
        <input
          type="text"
          id="username-input-register"
          name="username"
          placeholder={props.username_input}
          className="checkout-register-form-textinput3 input"
        />
        <label
          id="password-label-register"
          htmlFor="password-input-register"
          className="checkout-register-form-label"
        >
          {props.text51}
        </label>
        <input
          type="text"
          id="password-input-register"
          name="password"
          placeholder={props.password_input}
          className="checkout-register-form-textinput4 input"
        />
        <div className="checkout-register-form-account-options">
          <span className="checkout-register-form-text12">
            <span className="">Login</span>
          </span>
          <span className="checkout-register-form-text14">{props.login}</span>
          <span className="checkout-register-form-text15">{props.text3}</span>
          <Link
            to="/checkout-shipping"
            className="checkout-register-form-navlink button"
          >
            {props.button_register}
          </Link>
        </div>
        <div className="checkout-register-form-proceed-options">
          <span className="checkout-register-form-text16">
            <span className="">Login</span>
          </span>
          <span className="checkout-register-form-text18">
            <span className="">Cancel order</span>
          </span>
          <Link
            to="/checkout-shipping"
            className="checkout-register-form-navlink1 button"
          >
            {props.button_payment}
          </Link>
        </div>
      </form>
    </div>
  )
}

CheckoutRegisterForm.defaultProps = {
  text5: 'Username',
  rootClassName: '',
  Line5_alt2: 'Line51356',
  button_register: 'Register',
  Line5_alt1: 'Line51350',
  password_input: '********',
  Line5_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  email_input: 'Email',
  email: 'Email',
  checkboxcirclefill3_alt: 'checkboxcirclefill31352',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  Line6_alt1: 'Line61351',
  Line6_alt2: 'Line61357',
  checkboxcirclefill3_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  lname_input: 'Last Name',
  button_payment: 'Shipping details',
  checkboxcirclefill3_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  last_name: 'Last Name',
  username_input: 'Username',
  text3: 'Continue as guest',
  heading: 'Account details',
  Line6_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  Line6_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  Line5_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  Line5_alt: 'Line51350',
  first_name: 'First Name',
  login: 'Already registered? Sign in',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  checkboxcirclefill3_alt1: 'checkboxcirclefill31352',
  text4: 'Review',
  fname_input: 'First Name',
  checkboxcirclefill3_alt2: 'checkboxcirclefill31358',
  Line6_alt: 'Line61351',
  text51: 'Password',
  checkboxcirclefill3_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/91bb983f-b403-438f-9a2c-f687461681a5?org_if_sml=1454',
}

CheckoutRegisterForm.propTypes = {
  text5: PropTypes.string,
  rootClassName: PropTypes.string,
  Line5_alt2: PropTypes.string,
  button_register: PropTypes.string,
  Line5_alt1: PropTypes.string,
  password_input: PropTypes.string,
  Line5_src1: PropTypes.string,
  email_input: PropTypes.string,
  email: PropTypes.string,
  checkboxcirclefill3_alt: PropTypes.string,
  Line6_src2: PropTypes.string,
  Line6_alt1: PropTypes.string,
  Line6_alt2: PropTypes.string,
  checkboxcirclefill3_src: PropTypes.string,
  lname_input: PropTypes.string,
  button_payment: PropTypes.string,
  checkboxcirclefill3_src1: PropTypes.string,
  last_name: PropTypes.string,
  username_input: PropTypes.string,
  text3: PropTypes.string,
  heading: PropTypes.string,
  Line6_src1: PropTypes.string,
  Line6_src: PropTypes.string,
  Line5_src: PropTypes.string,
  Line5_alt: PropTypes.string,
  first_name: PropTypes.string,
  login: PropTypes.string,
  Line5_src2: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  text4: PropTypes.string,
  fname_input: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  Line6_alt: PropTypes.string,
  text51: PropTypes.string,
  checkboxcirclefill3_src2: PropTypes.string,
}

export default CheckoutRegisterForm
