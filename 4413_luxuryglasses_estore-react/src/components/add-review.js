import React from 'react'

import PropTypes from 'prop-types'

import './add-review.css'

const AddReview = (props) => {
	
  const submitHandler = async(e) => {
	  e.preventDefault();
	  /*const urlParams = new URLSearchParams(window.location.search);
	  const itemId = urlParams.get('id');
	  
	  //let itemId = document.getElementById("item-input-checkout").value;
	  let rating = document.getElementById("rating-select-review").value;
	  let comments = document.getElementById("comments-input-review").value;
	  let userEmail = document.getElementById("email-input-review").value;
	  
      var url= "http://localhost:8080/catalog/addReview?item=" + itemId + "&rating=" + rating 
      + "&comments=" + comments + "&userEmail=" + userEmail;
      var request = new XMLHttpRequest();
      request.open('POST', url);
      request.send();
      request.onload = function() {
        let data = request.responseText;
        if (data.includes("Review added")){
          // alert("Order Successfully Completed.");
        } else {
          alert("Error occurred: " + data);
        }
      }*/
  }
	
  return (
    <div id="add-review-container" className="add-review-container">
      <h3>{props.heading}</h3>
      <form className="add-review-form" onSubmit={submitHandler}>
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
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]&#123;2,&#125;$"
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
        <button id="add-review-button" className="add-review-button button">
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
  button: 'REGISTER',
}

AddReview.propTypes = {
  heading: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  button: PropTypes.string,
}

export default AddReview