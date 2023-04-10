import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './checkout-shipping-form.css'

const CheckoutShippingForm = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  
  const checkboxChangeHandler = (event) => {
    setIsChecked(event.target.checked);
  };
  
  const submitHandler = async(e) => {

    e.preventDefault();

    let country = document.getElementById("country-input-checkout").value;
    let fullname = document.getElementById("fullname-input-checkout").value;
    let line1 = document.getElementById("line1-input-checkout").value;
    let line2 = document.getElementById("line2-input-checkout").value;
    let city = document.getElementById("city-input-checkout").value;
    let province = document.getElementById("province-input-checkout").value;
    let postal = document.getElementById("postal-input-checkout").value;
    let phone = document.getElementById("phone-input-checkout").value;
    let makedefault = isChecked;

      var url= "http://localhost:8080/checkout/shipping?country=" + country + "&fullname=" + fullname 
      + "&phone=" + phone + "&line1=" + line1 + "&line2=" + line2 + "&city=" + city + "&province=" + province 
      + "&postal=" + postal + "&default=" + makedefault;
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.send();
      request.onload = function() {
        let data = request.responseText;
        if (data.includes("successfully")){
          alert(data + " Proceed to payment details");
        } else {
          alert("Error occurred: " + data);
        }
      }
  }
  
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
        onSubmit={submitHandler}
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
          <span className="checkout-shipping-form-text06">{props.review}</span>
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
          id="country-label-checkout"
          htmlFor="country-input-checkout"
          className="checkout-shipping-form-label"
        >
          {props.country_label}
        </label>
        <input
          type="text"
          id="country-input-checkout"
          name="country"
          required
          placeholder={props.country_input}
          className="checkout-shipping-form-textinput input"
        />
        <label
          id="fullname-label-checkout"
          htmlFor="fullname-input-checkout"
          className="checkout-shipping-form-label1"
        >
          {props.fullname_label}
        </label>
        <input
          type="text"
          id="fullname-input-checkout"
          name="fullname"
          required
          placeholder={props.fullname_input}
          className="checkout-shipping-form-textinput1 input"
        />
        <label
          id="line1-label-checkout"
          htmlFor="line1-input-checkout"
          className="checkout-shipping-form-label2"
        >
          {props.line1_label}
        </label>
        <input
          type="text"
          id="line1-input-checkout"
          name="line1"
          required
          placeholder={props.line1_input}
          className="checkout-shipping-form-textinput2 input"
        />
        <label
          id="line2-label-checkout"
          htmlFor="line2-input-checkout"
          className="checkout-shipping-form-label3"
        >
          {props.line2_label}
        </label>
        <input
          type="text"
          id="line2-input-checkout"
          name="line2"
          placeholder={props.line2_input}
          className="checkout-shipping-form-textinput3 input"
        />
        <label
          id="city-label-checkout"
          htmlFor="city-input-checkout"
          className="checkout-shipping-form-label4"
        >
          {props.city_label}
        </label>
        <input
          type="text"
          id="city-input-checkout"
          name="city"
          required
          placeholder={props.city_input}
          className="checkout-shipping-form-textinput4 input"
        />
        <label
          id="postal-label-checkout"
          htmlFor="postal-input-checkout"
          className="checkout-shipping-form-label5"
        >
          {props.postal_label}
        </label>
        <input
          type="text"
          id="postal-input-checkout"
          name="postal"
          required
          placeholder={props.postal_input}
          className="checkout-shipping-form-textinput5 input"
        />
        <label
          id="province-label-checkout"
          htmlFor="province-input-checkout"
          className="checkout-shipping-form-label6"
        >
          {props.province_label}
        </label>
        <input
          type="text"
          id="province-input-checkout"
          name="province"
          required
          placeholder={props.province_input}
          className="checkout-shipping-form-textinput6 input"
        />
        <label
          id="phone-label-checkout"
          htmlFor="phone-input-checkout"
          className="checkout-shipping-form-label7"
        >
          {props.phone_label}
        </label>
        <input
          type="text"
          id="phone-input-checkout"
          name="phone"
          required
          placeholder={props.phone_input}
          className="checkout-shipping-form-textinput7 input"
        />
        <label
          id="default-label-checkout"
          htmlFor="default-checkbox-checkout"
          className="checkout-shipping-form-label8"
        >
          {props.default_label}
        </label>
        <input
          type="checkbox"
          id="default-checkbox-checkout"
          name="default"
          className="checkout-shipping-form-checkbox"
          checked={isChecked}
          onChange={checkboxChangeHandler}
        />
       <div className="checkout-shipping-form-proceed-options">
          <button
            type="submit"
            className="checkout-shipping-form-navlink button"
          >
            {props.button_shipping}
          </button>
        </div>
        <div className="checkout-shipping-form-proceed-options1">
          <Link to="/view-cart" className="checkout-shipping-form-text08">
            <span>Cancel order</span>
          </Link>
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
  line1_input: '123 Keele Street',
  fullname_label: 'Full Name',
  checkboxcirclefill3_src:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  postal_label: 'Postal Code',
  province_label: 'Province',
  review: 'Review',
  postal_input: 'Postal Code',
  line2_input: '',
  Line6_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/bac9efea-8f1c-4ce5-8229-33945e3e4c05?org_if_sml=1152',
  button_shipping: 'Process Shipping',
  checkboxcirclefill3_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/91bb983f-b403-438f-9a2c-f687461681a5?org_if_sml=1454',
  Line5_alt2: 'Line51356',
  Line6_alt2: 'Line61357',
  fullname_input: 'Full Name',
  Line5_alt: 'Line51350',
  province_input: 'Province',
  Line5_src2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/c352bc07-2b10-437e-aea8-277dd565012d?org_if_sml=1152',
  Line6_alt1: 'Line61351',
  country_input: 'Country',
  line2_label: 'Line 2',
  Line5_alt1: 'Line51350',
  Line6_alt: 'Line61351',
  button_payment: 'Payment details',
  country_label: 'Country',
  checkboxcirclefill3_src1:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ca5dbe3f-c614-4ce0-a245-7460cd9a6cc1/2d9ddbb0-70c5-406a-bbc1-1939926e3985?org_if_sml=1454',
  phone_label: 'Phone',
  phone_input: '(416)-123-9999',
  city_label: 'City',
  city_input: 'City',
  default_label: 'Make default',
  line1_label: 'Line 1',
}

CheckoutShippingForm.propTypes = {
  Line5_src: PropTypes.string,
  Line5_src1: PropTypes.string,
  checkboxcirclefill3_alt1: PropTypes.string,
  checkboxcirclefill3_alt2: PropTypes.string,
  rootClassName: PropTypes.string,
  Line6_src: PropTypes.string,
  checkboxcirclefill3_alt: PropTypes.string,
  heading: PropTypes.string,
  Line6_src1: PropTypes.string,
  line1_input: PropTypes.string,
  fullname_label: PropTypes.string,
  checkboxcirclefill3_src: PropTypes.string,
  postal_label: PropTypes.string,
  province_label: PropTypes.string,
  review: PropTypes.string,
  postal_input: PropTypes.string,
  line2_input: PropTypes.string,
  Line6_src2: PropTypes.string,
  button_shipping: PropTypes.string,
  checkboxcirclefill3_src2: PropTypes.string,
  Line5_alt2: PropTypes.string,
  Line6_alt2: PropTypes.string,
  fullname_input: PropTypes.string,
  Line5_alt: PropTypes.string,
  province_input: PropTypes.string,
  Line5_src2: PropTypes.string,
  Line6_alt1: PropTypes.string,
  country_input: PropTypes.string,
  line2_label: PropTypes.string,
  Line5_alt1: PropTypes.string,
  Line6_alt: PropTypes.string,
  button_payment: PropTypes.string,
  country_label: PropTypes.string,
  checkboxcirclefill3_src1: PropTypes.string,
  phone_label: PropTypes.string,
  phone_input: PropTypes.string,
  city_label: PropTypes.string,
  city_input: PropTypes.string,
  default_label: PropTypes.string,
  line1_label: PropTypes.string,
}

export default CheckoutShippingForm