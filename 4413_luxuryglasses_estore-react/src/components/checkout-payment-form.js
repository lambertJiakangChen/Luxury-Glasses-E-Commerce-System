import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-payment-form.css'

const CheckoutPaymentForm = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  var clickCount = 0
  
  const submitHandler = async(e) => {
	  e.preventDefault();
	  clickCount += 1;
	  let fullname = document.getElementById("fullname-input-checkout").value;
	  let card = document.getElementById("card-input-checkout").value;
	  let exp = document.getElementById("exp-input-checkout").value;
	  let cvv = document.getElementById("cvv-input-checkout").value;
	  
	  if (clickCount % 3 === 0) {
		  // Payment is denied at every 3rd request
		  clickCount = 0;
		  alert("Credit Card Authorization Failed.");
	  } else {
	    // process payment
	     var url= "http://localhost:8080/checkout/payment?fullname=" + fullname + "&card=" + card 
	     + "&exp=" + exp + "&cvv=" + cvv;
	     var request = new XMLHttpRequest();
	     request.open('POST', url);
	     request.send();
	     request.onload = function() {
			 let data = request.responseText;
			 if (data.includes("successfully")){
				 alert(data + " \nProceed to payment details");
			 } else {
				alert("Error occurred: " + data);
			 }
		}
	  }
  }
  
  return (
    <div
      id="checkout_payment_form"
      className={`checkout-payment-form-log-in ${props.rootClassName} `}
    >
      <form
        id="checkoutpayment"
        cvv
        exp
        card
        name="checkout payment"
        action="/checkout/payment"
        method="POST"
        enctype="application/x-www-form-urlencoded"
        className="checkout-payment-form-form"
        onSubmit={submitHandler}
      >
        <div className="checkout-payment-form-checkout-stage">
          <span className="checkout-payment-form-text">
            <span className="">Account</span>
          </span>
          <span className="checkout-payment-form-text02">
            <span className="">Shipping</span>
          </span>
          <span className="checkout-payment-form-text04">
            <span className="">Payment</span>
          </span>
          <span className="checkout-payment-form-text06">{props.review}</span>
          <div className="checkout-payment-form-group6">
            <img
              alt={props.Line5_alt}
              src={props.Line5_src}
              className="checkout-payment-form-line5"
            />
            <img
              alt={props.Line6_alt}
              src={props.Line6_src}
              className="checkout-payment-form-line6"
            />
            <img
              alt={props.checkboxcirclefill3_alt}
              src={props.checkboxcirclefill3_src}
              className="checkout-payment-form-checkboxcirclefill3"
            />
          </div>
          <div className="checkout-payment-form-group61">
            <img
              alt={props.Line5_alt1}
              src={props.Line5_src1}
              className="checkout-payment-form-line51"
            />
            <img
              alt={props.Line6_alt1}
              src={props.Line6_src1}
              className="checkout-payment-form-line61"
            />
            <img
              alt={props.checkboxcirclefill3_alt1}
              src={props.checkboxcirclefill3_src1}
              className="checkout-payment-form-checkboxcirclefill31"
            />
          </div>
          <div className="checkout-payment-form-group5">
            <img
              alt={props.Line5_alt2}
              src={props.Line5_src2}
              className="checkout-payment-form-line52"
            />
            <img
              alt={props.Line6_alt2}
              src={props.Line6_src2}
              className="checkout-payment-form-line62"
            />
            <img
              alt={props.checkboxcirclefill3_alt2}
              src={props.checkboxcirclefill3_src2}
              className="checkout-payment-form-checkboxcirclefill32"
            />
          </div>
        </div>
        <h2 className="checkout-payment-form-text07">{props.heading}</h2>
        <label
          id="fullname-label-checkout"
          htmlFor="fullname-input-checkout"
          className="checkout-payment-form-label"
        >
          {props.fullname_label}
        </label>
        <input
          type="text"
          id="fullname-input-checkout"
          name="fullname"
          required
          placeholder={props.fullname_input}
          className="checkout-payment-form-textinput input"
        />
        <label
          id="card-label-checkout"
          htmlFor="card-input-checkout"
          className="checkout-payment-form-label1"
        >
          {props.card_label}
        </label>
        <input
          type="text"
          id="card-input-checkout"
          name="card"
          placeholder={props.card_input}
          className="checkout-payment-form-textinput1 input"
        />
        <label
          id="exp-label-checkout"
          htmlFor="exp-input-checkout"
          className="checkout-payment-form-label2"
        >
          {props.exp_label}
        </label>
        <input
          type="text"
          id="exp-input-checkout"
          name="exp"
          required
          placeholder={props.exp_input}
          className="checkout-payment-form-textinput2 input"
        />
        <label
          id="cvv-label-checkout"
          htmlFor="cvv-input-checkout"
          className="checkout-payment-form-label3"
        >
          {props.cvv_label}
        </label>
        <input
          type="text"
          id="cvv-input-checkout"
          name="cvv"
          required
          placeholder={props.cvv_input}
          className="checkout-payment-form-textinput3 input"
        />
        <div className="checkout-payment-form-proceed-options">
          <button
            type="submit"
            className="checkout-payment-form-button button">
            {props.button_payment}
          </button>
        </div>
        <div className="checkout-payment-form-proceed-options1">
          <Link to="/view-cart" className="checkout-payment-form-text08">
            <span>Cancel order</span>
          </Link>
          <Link
            to="/checkout-review"
            className="checkout-payment-form-navlink button"
          >
            {props.button_review}
          </Link>
        </div>
      </form>
    </div>
  )
}

CheckoutPaymentForm.defaultProps = {
  checkboxcirclefill3_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  checkboxcirclefill3_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/91bb983f-b403-438f-9a2c-f687461681a5?org_if_sml=1454',
  rootClassName: '',
  checkboxcirclefill3_alt2: 'checkboxcirclefill31358',
  Line6_alt: 'Line61351',
  Line5_alt: 'Line51350',
  cvv_input: '000',
  Line5_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  Line6_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  review: 'Review',
  Line5_alt2: 'Line51356',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  checkboxcirclefill3_alt1: 'checkboxcirclefill31352',
  Line5_alt1: 'Line51350',
  heading: 'Payment Details',
  cvv_label: 'Security code',
  button_review: 'Review Order',
  checkboxcirclefill3_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  card_label: 'Card Number',
  Line6_alt1: 'Line61351',
  checkboxcirclefill3_alt: 'checkboxcirclefill31352',
  fullname_input: 'Full Name',
  exp_input: 'MM/YY',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  Line5_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  card_input: '1234-5678-1234-5678',
  fullname_label: 'Full Name',
  Line6_alt2: 'Line61357',
  Line6_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c9c20ea4-ce47-4f31-930b-2b5ff88bff7d?org_if_sml=1152',
  exp_label: 'Expiration date',
  button_payment: 'Process Payment',
}

CheckoutPaymentForm.propTypes = {
  checkboxcirclefill3_src1: PropTypes.string,
  checkboxcirclefill3_src2: PropTypes.string,
  rootClassName: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  Line6_alt: PropTypes.string,
  Line5_alt: PropTypes.string,
  cvv_input: PropTypes.string,
  Line5_src1: PropTypes.string,
  Line6_src: PropTypes.string,
  review: PropTypes.string,
  Line5_alt2: PropTypes.string,
  Line5_src2: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  Line5_alt1: PropTypes.string,
  heading: PropTypes.string,
  cvv_label: PropTypes.string,
  button_review: PropTypes.string,
  checkboxcirclefill3_src: PropTypes.string,
  card_label: PropTypes.string,
  Line6_alt1: PropTypes.string,
  checkboxcirclefill3_alt: PropTypes.string,
  fullname_input: PropTypes.string,
  exp_input: PropTypes.string,
  Line6_src2: PropTypes.string,
  Line5_src: PropTypes.string,
  card_input: PropTypes.string,
  fullname_label: PropTypes.string,
  Line6_alt2: PropTypes.string,
  Line6_src1: PropTypes.string,
  exp_label: PropTypes.string,
  button_payment: PropTypes.string,
}

export default CheckoutPaymentForm