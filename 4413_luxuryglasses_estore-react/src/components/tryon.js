import React from 'react'

import PropTypes from 'prop-types'

import './tryon.css'

const Tryon = (props) => {
  return (
    <div className={`tryon-container ${props.rootClassName} `}>
      <div className="tryon-container1">
        <div className="tryon-container2">
          <form
            id="product_tryon_form"
            name="product_tryon_form"
            action="/catalog/tryon"
            method="GET"
            enctype="multipart/form-data"
            className="tryon-form"
          >
            <input
              type="file"
              id="photo"
              accept="image/png, image/jpeg"
              placeholder={props.textinput_placeholder}
              className="tryon-textinput input"
            />
          </form>
        </div>
        <div className="tryon-container3">
          <img
            alt={props.image_alt}
            src="/playground_assets/image-not-available-200h.png"
            className="tryon-image"
          />
        </div>
      </div>
    </div>
  )
}

Tryon.defaultProps = {
  rootClassName: '',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
  textinput_placeholder: 'placeholder',
  image_alt1: 'image',
  image_alt: 'image',
  image_src1: 'd8828acc-0de5-4ac6-a90c-3eb4192f584a',
}

Tryon.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Tryon
