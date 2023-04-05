import React from 'react'

import PropTypes from 'prop-types'

import './cart-empty.css'

const CartEmpty = (props) => {
  return (
    <div className={`cart-empty-container ${props.rootClassName} `}>
      <p id="cart-empty-text" className="cart-empty-text">
        {props.text}
      </p>
    </div>
  )
}

CartEmpty.defaultProps = {
  text: 'Your Shopping Cart is Empty',
  rootClassName: '',
}

CartEmpty.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default CartEmpty
