import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-register-form.css'

const CheckoutRegisterForm = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  
  const submitHandler = async(e) => {
    e.preventDefault();

    let fname = document.getElementById("fname-input-checkout").value;
    let lname = document.getElementById("lname-input-checkout").value;
    let email = document.getElementById("email-input-checkout").value;
    let username = document.getElementById("username-input-checkout").value;
    let password = document.getElementById("password-input-checkout").value;

      var url="http://localhost:8080/checkout/proceedregister?type=REGULAR&fname=" + fname 
      	+ "&lname=" + lname + "&email=" + email + "&username=" + username + "&password=" + password;
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.send();
      request.onload = function() {
        let data = request.responseText;
        if (data.includes("Unable to register account")) {
			alert(data);
        } else if (data.includes("Successfully")){
			setIsLoggedIn(true);
			alert(data + " Proceed to shipping details");
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
		  setIsLoggedIn(true);
		var proceed = " Proceed to shipping details";
        alert (data + proceed);
      } else {
          alert("Error occurred: " + data);
      }
    }
  }
  
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
        onSubmit={submitHandler}
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
          id="fname-label-checkout"
          htmlFor="fname-input-checkout"
          className="checkout-register-form-text08"
        >
          {props.fname_label}
        </label>
        <input
          type="text"
          id="fname-input-checkout"
          name="fname"
          placeholder={props.fname_input}
          className="checkout-register-form-textinput input"
        />
        <label
          id="lname-label-checkout"
          htmlFor="lname-input-checkout"
          className="checkout-register-form-text09"
        >
          {props.lname_label}
        </label>
        <input
          type="text"
          id="lname-input-checkout"
          name="lname"
          placeholder={props.lname_input}
          className="checkout-register-form-textinput1 input"
        />
        <label
          id="email-label-checkout"
          htmlFor="email-input-checkout"
          className="checkout-register-form-text10"
        >
          {props.email_label}
        </label>
        <input
          type="text"
          id="email-input-checkout"
          name="email"
          placeholder={props.email_input}
          className="checkout-register-form-textinput2 input"
        />
        <label
          id="username-label-checkout"
          htmlFor="username-input-checkout"
          className="checkout-register-form-text11"
        >
          {props.username_label}
        </label>
        <input
          type="text"
          id="username-input-checkout"
          name="username"
          placeholder={props.username_input}
          className="checkout-register-form-textinput3 input"
        />
        <label
          id="password-label-checkout"
          htmlFor="password-input-checkout"
          className="checkout-register-form-label"
        >
          {props.password_label}
        </label>
        <input
          type="password"
          id="password-input-checkout"
          name="password"
          placeholder={props.password_input}
          className="checkout-register-form-textinput4 input"
        />
        <div className="checkout-register-form-account-options">
          <Link to="/checkout-login" className="checkout-register-form-text12">
            {props.login}
          </Link>
          <span className="checkout-register-form-text13" onClick={guestLoginHandler}>
            {props.guest_login}
          </span>
          <button
            type="submit"
            className="checkout-register-form-button button"
          >
            {props.button_register}
          </button>
        </div>
        <div className="checkout-register-form-proceed-options">
          <Link to="/view-cart" className="checkout-register-form-text14">
            <span>Cancel order</span>
          </Link>
          <Link
            to="/checkout-shipping"
            className="checkout-register-form-navlink button"
          >
            {props.button_shipping}
          </Link>
        </div>
      </form>
    </div>
  )
}

CheckoutRegisterForm.defaultProps = {
  username_label: 'Username',
  rootClassName: '',
  Line5_alt2: 'Line51356',
  button_register: 'Register',
  Line5_alt1: 'Line51350',
  password_input: '********',
  Line5_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  email_input: 'Email',
  email_label: 'Email',
  checkboxcirclefill3_alt: 'checkboxcirclefill31352',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  Line6_alt1: 'Line61351',
  Line6_alt2: 'Line61357',
  checkboxcirclefill3_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  lname_input: 'Last Name',
  button_shipping: 'Shipping Details',
  checkboxcirclefill3_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  lname_label: 'Last Name',
  username_input: 'Username',
  guest_login: 'Continue as guest',
  heading: 'Account details',
  Line6_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  Line6_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  Line5_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  Line5_alt: 'Line51350',
  fname_label: 'First Name',
  login: 'Already registered? Sign in',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  checkboxcirclefill3_alt1: 'checkboxcirclefill31352',
  review: 'Review',
  fname_input: 'First Name',
  checkboxcirclefill3_alt2: 'checkboxcirclefill31358',
  Line6_alt: 'Line61351',
  password_label: 'Password',
  checkboxcirclefill3_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/91bb983f-b403-438f-9a2c-f687461681a5?org_if_sml=1454',
}

CheckoutRegisterForm.propTypes = {
  username_label: PropTypes.string,
  rootClassName: PropTypes.string,
  Line5_alt2: PropTypes.string,
  button_register: PropTypes.string,
  Line5_alt1: PropTypes.string,
  password_input: PropTypes.string,
  Line5_src1: PropTypes.string,
  email_input: PropTypes.string,
  email_label: PropTypes.string,
  checkboxcirclefill3_alt: PropTypes.string,
  Line6_src2: PropTypes.string,
  Line6_alt1: PropTypes.string,
  Line6_alt2: PropTypes.string,
  checkboxcirclefill3_src: PropTypes.string,
  lname_input: PropTypes.string,
  button_shipping: PropTypes.string,
  checkboxcirclefill3_src1: PropTypes.string,
  lname_label: PropTypes.string,
  username_input: PropTypes.string,
  guest_login: PropTypes.string,
  heading: PropTypes.string,
  Line6_src1: PropTypes.string,
  Line6_src: PropTypes.string,
  Line5_src: PropTypes.string,
  Line5_alt: PropTypes.string,
  fname_label: PropTypes.string,
  login: PropTypes.string,
  Line5_src2: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  review: PropTypes.string,
  fname_input: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  Line6_alt: PropTypes.string,
  password_label: PropTypes.string,
  checkboxcirclefill3_src2: PropTypes.string,
}


export default CheckoutRegisterForm
