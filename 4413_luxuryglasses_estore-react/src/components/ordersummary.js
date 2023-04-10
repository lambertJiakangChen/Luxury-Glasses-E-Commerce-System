import React from 'react'

import PropTypes from 'prop-types'

import './ordersummary.css'

const Ordersummary = (props) => {

	const getOrderSummary = async(e) => {
	    var total = 0.0;
	    e.preventDefault();
	
	    var url="http://localhost:8080/cart/getTotal";
	    var request = new XMLHttpRequest();
	    request.open('POST', url);
	    request.send();
	    request.onload = function() {
	      let data = request.responseText;
	      if (data.length == 0) {
			  document.getElementById("ordersummary-subTotal-output").innerHTML = "Error";
			  document.getElementById("ordersummary-tax-output").innerHTML = "Error";
			  document.getElementById("ordersummary-total-output").innerHTML = "Error";
	      } else {
			  var cartDataObj = JSON.parse(data);
			  
			  total += parseFloat(cartDataObj);
			  var tax = 0.02 * parseFloat(cartDataObj);
			  total += tax;
			  
			  document.getElementById("ordersummary-subTotal-output").innerHTML = "$" + cartDataObj;
			  document.getElementById("ordersummary-tax-output").innerHTML = "$" + tax;
			  document.getElementById("ordersummary-total-output").innerHTML = "$" + total;
	      }
	    }
  }
	
  return (
    <div
      id="ordersummary"
      className={`ordersummary-ordersummary ${props.rootClassName} `}
      onLoad={getOrderSummary}
    >
      <span className="ordersummary-title">
        <span className="">Order Summary</span>
      </span>
      <span className="ordersummary-subTotal">
        <span className="">Sub total</span>
      </span>
      <span className="ordersummary-tax">
        <span className="">Tax</span>
      </span>
      <span className="ordersummary-shipping">
        <span className="">Shipping</span>
      </span>
      <span className="ordersummary-total">
        <span className="">Total</span>
      </span>
      <span className="ordersummary-total-output">{props.text}</span>
      <span className="ordersummary-shipping-output">{props.text1}</span>
      <span className="ordersummary-tax-output">{props.text2}</span>
      <span className="ordersummary-subTotal-output">{props.text3}</span>
    </div>
  )
}

Ordersummary.defaultProps = {
  text1: 'Free',
  text2: '$3.45',
  rootClassName: '',
  text3: '$316.55',
  text: '$320.45',
}

Ordersummary.propTypes = {
  text1: PropTypes.string,
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
  text: PropTypes.string,
}

export default Ordersummary
