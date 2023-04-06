import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-login-form.css'

const CheckoutLoginForm = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div
      id="checkout_login_form"
      className={`checkout-login-form-log-in ${props.rootClassName} `}
    >
      <form
        id="checkoutlogin"
        name="checkout account login"
        action="/checkout/proceedlogin"
        method="POST"
        enctype="application/x-www-form-urlencoded"
        password
        username
        className="checkout-login-form-form"
      >
        <div className="checkout-login-form-checkout-stage">
          <span className="checkout-login-form-text">
            <span className="">Account</span>
          </span>
          <span className="checkout-login-form-text02">
            <span className="">Shipping</span>
          </span>
          <span className="checkout-login-form-text04">
            <span className="">Payment</span>
          </span>
          <span className="checkout-login-form-text06">{props.text4}</span>
          <div className="checkout-login-form-group6">
            <img
              alt={props.Line5_alt}
              src={props.Line5_src}
              className="checkout-login-form-line5"
            />
            <img
              alt={props.Line6_alt}
              src={props.Line6_src}
              className="checkout-login-form-line6"
            />
            <img
              alt={props.checkboxcirclefill3_alt}
              src={props.checkboxcirclefill3_src}
              className="checkout-login-form-checkboxcirclefill3"
            />
          </div>
          <div className="checkout-login-form-group61">
            <img
              alt={props.Line5_alt1}
              src={props.Line5_src1}
              className="checkout-login-form-line51"
            />
            <img
              alt={props.Line6_alt1}
              src={props.Line6_src1}
              className="checkout-login-form-line61"
            />
            <img
              alt={props.checkboxcirclefill3_alt1}
              src={props.checkboxcirclefill3_src1}
              className="checkout-login-form-checkboxcirclefill31"
            />
          </div>
          <div className="checkout-login-form-group5">
            <img
              alt={props.Line5_alt2}
              src={props.Line5_src2}
              className="checkout-login-form-line52"
            />
            <img
              alt={props.Line6_alt2}
              src={props.Line6_src2}
              className="checkout-login-form-line62"
            />
            <img
              alt={props.checkboxcirclefill3_alt2}
              src={props.checkboxcirclefill3_src2}
              className="checkout-login-form-checkboxcirclefill32"
            />
          </div>
        </div>
        <h2 className="checkout-login-form-text07">{props.heading}</h2>
        <label
          id="username-label-checkout"
          htmlFor="username-input-checkout"
          className="checkout-login-form-text08"
        >
          {props.text5}
        </label>
        <input
          type="text"
          id="username-input-checkout"
          name="username"
          placeholder={props.textinput_placeholder1}
          className="checkout-login-form-textinput input"
        />
        <label
          id="password-label-checkout"
          htmlFor="password-input-checkout"
          className="checkout-login-form-label"
        >
          {props.text51}
        </label>
        <input
          type="text"
          id="password-input-checkout"
          name="password"
          placeholder={props.textinput_placeholder11}
          className="checkout-login-form-textinput1 input"
        />
        <div className={styles['proceed-options']}>
          <span className={styles['text09']}>
            <span>Login</span>
          </span>
          <Link to="/checkout-register" className={styles['text11']}>
            {props.text2}
          </Link>
          <span className={styles['text12']}>{props.text3}</span>
          <button
            type="submit"
            className={` ${styles['button']} ${projectStyles['button']} `}
          >
            {props.Login_button}
          </button>
        </div>
        <div className={styles['proceed-options1']}>
          <span className={styles['text13']}>
            <span>Cancel order</span>
          </span>
          <Link
            to="/checkout-shipping"
            className={` ${styles['navlink']} ${projectStyles['button']} `}
          >
            {props.button_payment}
          </Link>
        </div>
      </form>
    </div>
  )
}

CheckoutLoginForm.defaultProps = {
  Line6_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  Line6_alt1: 'Line61351',
  text5: 'Username',
  Line5_alt1: 'Line51350',
  Line5_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  Line5_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  Line6_alt2: 'Line61357',
  Line5_alt2: 'Line51356',
  Line6_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  checkboxcirclefill3_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  checkboxcirclefill3_alt: 'checkboxcirclefill31352',
  text51: 'Password',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  checkboxcirclefill3_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  rootClassName: '',
  text2: 'Register for account',
  Login_button: 'Login',
  Line6_alt: 'Line61351',
  text3: 'Continue as guest',
  textinput_placeholder11: '********',
  textinput_placeholder1: 'username',
  text4: 'Review',
  checkboxcirclefill3_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/91bb983f-b403-438f-9a2c-f687461681a5?org_if_sml=1454',
  Line5_alt: 'Line51350',
  button: '',
  checkboxcirclefill3_alt1: 'checkboxcirclefill31352',
  button_payment: 'Shipping details',
  checkboxcirclefill3_alt2: 'checkboxcirclefill31358',
  heading: 'Account details',
}

CheckoutLoginForm.propTypes = {
  Line6_src: PropTypes.string,
  Line6_alt1: PropTypes.string,
  text5: PropTypes.string,
  Line5_alt1: PropTypes.string,
  Line5_src: PropTypes.string,
  Line5_src1: PropTypes.string,
  Line6_alt2: PropTypes.string,
  Line5_alt2: PropTypes.string,
  Line6_src1: PropTypes.string,
  checkboxcirclefill3_src: PropTypes.string,
  checkboxcirclefill3_alt: PropTypes.string,
  text51: PropTypes.string,
  Line5_src2: PropTypes.string,
  checkboxcirclefill3_src1: PropTypes.string,
  Line6_src2: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
  Login_button: PropTypes.string,
  Line6_alt: PropTypes.string,
  text3: PropTypes.string,
  textinput_placeholder11: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text4: PropTypes.string,
  checkboxcirclefill3_src2: PropTypes.string,
  Line5_alt: PropTypes.string,
  button: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  button_payment: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  heading: PropTypes.string,
}

export default CheckoutLoginForm
