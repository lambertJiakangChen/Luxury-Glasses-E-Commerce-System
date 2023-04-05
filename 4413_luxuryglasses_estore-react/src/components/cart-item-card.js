import React from 'react'

import PropTypes from 'prop-types'

import './cart-item-card.css'

const CartItemCard = (props) => {
  return (
    <div className="cart-item-card-container cart-item-card">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="cart-item-card-image"
      />
      <p className="cart-item-card-text cart-item-name-replace">{props.text}</p>
      <form className="cart-item-card-form">
        <button className="cart-item-card-button button">{props.button}</button>
        <input
          type="number"
          id="item-quantity"
          name="quanitty"
          value="1"
          disabled
          placeholder={props.textinput_placeholder}
          className="cart-item-card-textinput input"
        />
        <button className="cart-item-card-button1 button">
          {props.button1}
        </button>
      </form>
      <p className="cart-item-price-replace">{props.text1}</p>
      <button className="cart-item-card-button2 button">
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="cart-item-card-icon"
        >
          <path d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
        </svg>
      </button>
    </div>
  )
}

CartItemCard.defaultProps = {
  image_alt: 'image',
  button: '--',
  button1: '+',
  textinput_placeholder: '1',
  text1: '$0.00',
  text: '(REPLACE ITEM NAME HERE) ',
  image_src: '/playground_assets/image-not-available-300w.png',
}

CartItemCard.propTypes = {
  image_alt: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default CartItemCard
