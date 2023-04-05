import React from 'react'

import PropTypes from 'prop-types'

import './category-card.css'

const CategoryCard = (props) => {
  return (
    <div className="category-card-category-card">
      <div className="category-card-container">
        <img
          alt={props.image_alt1}
          src={props.image_src}
          className="category-card-image"
        />
      </div>
      <span className="category-card-text">{props.name}</span>
    </div>
  )
}

CategoryCard.defaultProps = {
  image_src: '/playground_assets/cicely-1500w.jpg',
  image_alt1: 'image',
  name: 'Desks',
}

CategoryCard.propTypes = {
  image_src: PropTypes.string,
  image_alt1: PropTypes.string,
  name: PropTypes.string,
}

export default CategoryCard
