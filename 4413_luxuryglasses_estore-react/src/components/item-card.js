import React from 'react'

import PropTypes from 'prop-types'

import './item-card.css'

const ItemCard = (props) => {
  return (
    <div className={`item-card-gallery-card ${props.rootClassName} `}>
      <div className="item-card-container">
        <div className="item-card-container1">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="item-card-image"
          />
        </div>
        <h3 className="item-card-text">{props.name}</h3>
        <div className="item-card-container2">
          <svg viewBox="0 0 1024 1024" className="item-card-icon">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon02">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon04">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon06">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
          <svg viewBox="0 0 1024 1024" className="item-card-icon08">
            <path
              d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"
              className=""
            ></path>
          </svg>
        </div>
        <div className="item-card-container3">
          <span className="item-card-currency">{props.currency}</span>
          <span className="item-card-value">{props.varOne}</span>
        </div>
      </div>
    </div>
  )
}

ItemCard.defaultProps = {
  name: 'Glasses_item',
  image_src: 'a294c255-8765-472c-8132-de368d706ea7',
  image_alt: 'image',
  currency: '$',
  value: '9999',
  rootClassName: '',
}

ItemCard.propTypes = {
  name: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  currency: PropTypes.string,
  value: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ItemCard
