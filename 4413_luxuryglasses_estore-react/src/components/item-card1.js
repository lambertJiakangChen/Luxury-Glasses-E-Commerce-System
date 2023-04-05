import React from 'react'

import PropTypes from 'prop-types'

import './item-card1.css'

const ItemCard1 = (props) => {
  return (
    <div className={`item-card1-gallery-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="item-card1-image"
      />
      <div className="item-card1-container">
        <h3 className="item-card1-text">{props.name}</h3>
        <div className="item-card1-container1">
          <svg viewBox="0 0 1024 1024" className="item-card1-icon">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card1-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card1-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card1-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card1-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="item-card1-container2">
          <span className="item-card1-currency">{props.currency}</span>
          <span className="item-card1-value">{props.value}</span>
        </div>
      </div>
    </div>
  )
}

ItemCard1.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  name: 'Project Title',
  currency: '$',
  value: '429',
  image_src:
    'https://images.unsplash.com/photo-1622434641406-a158123450f9?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHx3YXRjaHxlbnwwfHx8fDE2ODAzNjc5ODA&ixlib=rb-4.0.3&w=1500',
}

ItemCard1.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  name: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  image_src: PropTypes.string,
}

export default ItemCard1
