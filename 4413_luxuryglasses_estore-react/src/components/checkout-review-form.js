import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-review-form.css'

const CheckoutReviewForm = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const checkboxChangeHandler = (event) => {
    setIsChecked(event.target.checked);
  };
  
  const submitHandler = async(e) => {
	  e.preventDefault();
	  
	  let confirm = isChecked;
	  
      var url= "http://localhost:8080/checkout/reviewOrder?confirm=" + confirm.toString();
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.send();
      request.onload = function() {
        let data = request.response;
        //console.log(data);
        if (data.includes("Order Confirmed")){
          alert("Order Successfully Completed.");
        } else {
          alert("Error occurred: " + data);
        }
      }
  }
  
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
        onSubmit={submitHandler}
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
        <label
          id="confirm-label-checkout"
          htmlFor="confirm-checkbox-checkout"
          className="checkout-review-form-text08"
        >
          {props.confirm_label}
        </label>
        <input
          type="checkbox"
          id="confirm-checkbox-checkout"
          name="confirm"
          required
          className="checkout-review-form-checkbox"
          checked={isChecked}
          onChange={checkboxChangeHandler}
        />
        <div className="checkout-review-form-proceed-options">
          <Link to="/view-cart" className="checkout-review-form-text09">
            <span>Cancel order</span>
          </Link>
          <button
            type="submit"
            className="checkout-review-form-button button"
          >
            {props.button_review}
            </button>
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
  button_review: 'Confirm Order',
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
  review: 'Review',
  checkboxcirclefill3_alt1: 'checkboxcirclefill31352',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  Line6_alt1: 'Line61351',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  Line5_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/f919b9de-c355-4cab-ac8d-5308db77b191?org_if_sml=1152',
  checkboxcirclefill3_alt2: 'checkboxcirclefill31358',
  confirm_label: 'Check to confirm order',
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
  review: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  Line5_src2: PropTypes.string,
  Line6_alt1: PropTypes.string,
  Line6_src2: PropTypes.string,
  Line5_src1: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  confirm_label: PropTypes.string,
}

export default CheckoutReviewForm