import React from 'react'

import PropTypes from 'prop-types'

import './ordersummary.css'

const Ordersummary = (props) => {
  return (
    <div
      id="ordersummary"
      className={`ordersummary-ordersummary ${props.rootClassName} `}
    >
      <span className="ordersummary-text">
        <span className="">Order Summary</span>
      </span>
      <span className="ordersummary-text02">
        <span className="">Sub total</span>
      </span>
      <span className="ordersummary-text04">
        <span className="">Tax</span>
      </span>
      <span className="ordersummary-text06">
        <span className="">Shipping</span>
      </span>
      <span className="ordersummary-text08">
        <span className="">Total</span>
      </span>
      <span className="ordersummary-text10">{props.text}</span>
      <span className="ordersummary-text11">{props.text1}</span>
      <span className="ordersummary-text12">{props.text2}</span>
      <span className="ordersummary-text13">{props.text3}</span>
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
