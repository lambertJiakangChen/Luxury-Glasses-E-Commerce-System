import React from 'react'

import PropTypes from 'prop-types'

import './single-review-card.css'

const SingleReviewCard = (props) => {


// Render all stars based on rating -------------------------------------------------------------------  	
function renderStars(rate) {
	const stars = Array(rate).fill().map((_, i) => (
    <svg viewBox="0 0 1024 1024" className="single-review-card-icon" key={i}>
      <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
    </svg>
  ));
  return <div>{stars}</div>;
 }
 
 
  return (
    <div className="single-review-card-container single-review-card">
      <h3 className="single-review-card-text">{props.heading}</h3>
      <div className="review-content">
        <div className="stars" id="stars-display">{renderStars(props.rating)}
        </div>
        <p className="comments">{props.text}</p>
      </div>
    </div>
  )
}

SingleReviewCard.defaultProps = {
  heading: 'Email Goes Here',
  text: 'comments go here',
  rating: 'Rating goes here'
}

SingleReviewCard.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.string,
}

export default SingleReviewCard
