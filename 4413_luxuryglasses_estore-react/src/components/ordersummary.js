import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import './ordersummary.css'

const Ordersummary = (props) => {
	
  useEffect(() => {
    //getOrderSummary();
    var url="http://localhost:8080/cart/getTotal";
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();
    request.onload = function() {
      let data = request.responseText;
      if (data.length == 0) {
		  document.getElementsByClassName("ordersummary-subTotal-output")[0].innerHTML = "$0.0";
		  document.getElementsByClassName("ordersummary-tax-output")[0].innerHTML  = "$0.0";
		  document.getElementsByClassName("ordersummary-total-output")[0].innerHTML  = "$0.0";
      } else {
		  var cartDataObj = JSON.parse(data);
		  
		  var total = parseFloat(cartDataObj);
		  document.getElementsByClassName("ordersummary-subTotal-output")[0].innerHTML  = "$" + total.toFixed(2);
		  var tax = 0.13 * total;
		  total += tax;
		  document.getElementsByClassName("ordersummary-tax-output")[0].innerHTML = "$" + tax.toFixed(2);
		  document.getElementsByClassName("ordersummary-total-output")[0].innerHTML = "$" + total.toFixed(2);
      }
    }
  }, []);

  /*const getOrderSummary = async(e) => {
    e.preventDefault();
  }
*/	
  return (
    <div
      id="ordersummary"
      className={`ordersummary-ordersummary ${props.rootClassName} `}
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
