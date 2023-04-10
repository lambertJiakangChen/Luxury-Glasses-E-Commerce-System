import React from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

import './add-review.css'

const AddReview = (props) => {
	const { itemId } = useParams();
	
  const submitHandler = async(e) => {
	  e.preventDefault();
	  
	  let rating = document.getElementById("rating-select-review").value;
	  let comments = document.getElementById("comments-input-review").value;
	  let userEmail = document.getElementById("email-input-review").value;
	  
      var url= "http://localhost:8080/catalog/addReview?item=" + itemId + "&rating=" + rating 
      + "&comments=" + comments + "&userEmail=" + userEmail;
      var request = new XMLHttpRequest();
      request.open('POST', url); // Add review to review list of this item
      request.send();
      request.onload = function() {
        let data = request.responseText;
        if (data.includes("Review added")){
          alert("Thanks for the review");
          var form = document.getElementsByClassName("add-review-form")[0];
          
          url="http://localhost:8080/catalog/findItem?itemId=" + itemId;
          request = new XMLHttpRequest(); // find item from itemId passed through url
	      request.open('GET', url);
	      request.send(); 
	      request.onload = function() {
		  var data2 = request.response;
      		if (!data2) {
				  alert("Error: " + data2)
			} else {
				var userDataObj = JSON.parse(data2);
				props.updateReviewCount(userDataObj.reviews.length, userDataObj.reviews); // update review count on parent component
			}
          }
          form.reset();  // Reset form data
        } else {
          alert("Error occurred: " + data);
        }
      }
  }

	
  return (
    <div id="add-review-container" className="add-review-container">
      <h3>{props.heading}</h3>
      <form className="add-review-form" 
        action="/catalog/addReview"
        method="GET"
        enctype="application/x-www-form-urlencoded"
        onSubmit={submitHandler}>
        <label
          id="email-label-review"
          htmlFor="email-input-review"
          className="add-review-text1"
        >
          <span>EMAIL</span>
          <br></br>
        </label>
        <input
          type="email"
          id="email-input-review"
          name="email"
          pattern="^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"
          required
          placeholder={props.textinput_placeholder}
          className="add-review-textinput input"
        />
        <label
          id="comments-label-review"
          htmlFor="comments-input-review"
          className="add-review-text4"
        >
          {props.text}
        </label>
        <input
          type="text"
          id="comments-input-review"
          name="comments"
          required
          placeholder={props.textinput_placeholder1}
          className="add-review-textinput1 input"
        />
        <select
          name="rating"
          id="rating-select-review"
          className="add-review-select"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button id="add-review-button" className="add-review-button button" type="submit">
          {props.button}
        </button>
      </form>
    </div>
  )
}

AddReview.defaultProps = {
  heading: 'Add Review:',
  textinput_placeholder: 'email',
  text: 'COMMENTS',
  textinput_placeholder1: 'comments',
  button: 'Submit Review',
}

AddReview.propTypes = {
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
}

export default AddReview