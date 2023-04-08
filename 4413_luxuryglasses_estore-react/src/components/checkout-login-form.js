import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-login-form.css'

const CheckoutLoginForm = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const submitHandler = async(e) => {
    e.preventDefault();

    let username = document.getElementById("username-input-checkout").value;
    let password = document.getElementById("password-input-checkout").value;

    var url="http://localhost:8080/checkout/proceedlogin?username=" + username + "&password=" + password;
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.send();
    request.onload = function() {
      let data = request.responseText;
      if (data.length == 0) {
        alert ("User not found. Username or password is incorrect.");
      } else if (data.includes("Login Success")){
		  setIsLoggedIn(true);
		  var proceed = "Proceed to shipping details";
		  //document.getElementsByClassName("checkout-login-form-proceed-options").innerHTML = proceed;
		  alert (proceed);
      } else {
          alert("Error occurred: " + data);
      }
    }
  }
  
  const guestLoginHandler = async(e) => {
    e.preventDefault();

    var url="http://localhost:8080/checkout/proceed";
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("Something went wrong. Try again later");
      } else if (data.includes("User can continue as guest")){
		var proceed = " Proceed to shipping details";
        alert (data + proceed);
      } else {
          alert("Error occurred: " + data);
      }
    }
  }
  
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
        onSubmit={submitHandler}
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
          <span className="checkout-login-form-text06">{props.review}</span>
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
          {props.username_label}
        </label>
        <input
          type="text"
          id="username-input-checkout"
          name="username"
          placeholder={props.username_input}
          required
          className="checkout-login-form-textinput input"
        />
        <label
          id="password-label-checkout"
          htmlFor="password-input-checkout"
          className="checkout-login-form-label"
        >
          {props.password_label}
        </label>
        <input
          type="password"
          id="password-input-checkout"
          name="password"
          placeholder={props.password_input}
          required
          className="checkout-login-form-textinput1 input"
        />
        <div className="checkout-login-form-proceed-options">
          <span id="loggedin"></span>
          <Link to="/checkout-register" className="checkout-login-form-text09">
            {props.register}
          </Link>
          <span className="checkout-login-form-text10" onClick={guestLoginHandler}>
            {props.guest_login}
          </span>
          <button
            type="submit"
            className="checkout-login-form-button button"
          >
            {props.login_button}
          </button>
        </div>
        <div className="checkout-login-form-proceed-options1">
          <Link to="/view-cart" className="checkout-login-form-text11">
            <span>Cancel order</span>
          </Link>
          <Link
            to="/checkout-shipping"
            className="checkout-login-form-navlink button"
          >
            {props.button_shipping}
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
  username_label: 'Username',
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
  password_label: 'Password',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  checkboxcirclefill3_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  rootClassName: '',
  register: 'Register for account',
  login_button: 'Login',
  Line6_alt: 'Line61351',
  guest_login: 'Continue as guest',
  password_input: '********',
  username_input: 'username',
  review: 'Review',
  checkboxcirclefill3_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/91bb983f-b403-438f-9a2c-f687461681a5?org_if_sml=1454',
  Line5_alt: 'Line51350',
  checkboxcirclefill3_alt1: 'checkboxcirclefill31352',
  button_shipping: 'Shipping details',
  checkboxcirclefill3_alt2: 'checkboxcirclefill31358',
  heading: 'Account details',
}

CheckoutLoginForm.propTypes = {
  Line6_src: PropTypes.string,
  Line6_alt1: PropTypes.string,
  username_label: PropTypes.string,
  Line5_alt1: PropTypes.string,
  Line5_src: PropTypes.string,
  Line5_src1: PropTypes.string,
  Line6_alt2: PropTypes.string,
  Line5_alt2: PropTypes.string,
  Line6_src1: PropTypes.string,
  checkboxcirclefill3_src: PropTypes.string,
  checkboxcirclefill3_alt: PropTypes.string,
  password_label: PropTypes.string,
  Line5_src2: PropTypes.string,
  checkboxcirclefill3_src1: PropTypes.string,
  Line6_src2: PropTypes.string,
  rootClassName: PropTypes.string,
  register: PropTypes.string,
  login_button: PropTypes.string,
  Line6_alt: PropTypes.string,
  guest_login: PropTypes.string,
  password_input: PropTypes.string,
  username_input: PropTypes.string,
  review: PropTypes.string,
  checkboxcirclefill3_src2: PropTypes.string,
  Line5_alt: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  button_shipping: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  heading: PropTypes.string,
}

export default CheckoutLoginForm