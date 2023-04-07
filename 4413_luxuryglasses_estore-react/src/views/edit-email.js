import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './edit-email.css'
import { validate } from 'json-schema'

function EditEmail(props) {

  const navigate = useNavigate();

  // HANDLE EDIT EMAIL ----------------------------------------------------------------------------------------
  const submitEditEmailHandler = async(e) => {
    e.preventDefault();

    let email = document.getElementById("edit-email-input").value;

    if (validateEmail(email)) {
      var url="http://localhost:8080/updateEmail?email=" + email;
      var request = new XMLHttpRequest(); // create a connection
      request.open('POST', url);
      request.send(); // send the http request
      request.onload = function() { // When the response comes invoke the following function
        let data = request.responseText; // store reponse in variable and convert to JSON object
        if (data.includes("Success")) {
          alert(data);
          navigate('/account');
        } else if (data.includes("Could not update email.")) {
          alert(data);
        } else {
          alert("Error occurred: " + data);
        }
      }
    }
  }

  function validateEmail(email) {
    var emailOK = true;

    // validate email
    var expr = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
    if (!expr.test(email)) {
      alert("Only Alphabets, Numbers, Dot and Underscore allowed in Password.");
      return false;
    }
    
    return emailOK;
  }

  return (
    <div className="edit-email-container">
      <Helmet>
        <title>EditEmail - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="EditEmail - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="edit-email-main">
        <div className="edit-email-container1">
          <h1 id="title-account-view" className="edit-email-text">
            MY ACCOUNT
          </h1>
          <div className="edit-email-container2">
            <h3 id="edit-fname-title" className="edit-email-text1">
              Edit Email: 
            </h3>
            <form 
              className="edit-email-form"
              onSubmit={submitEditEmailHandler}
              >
              <label
                id="edit-email-label"
                htmlFor="edit-email-input"
                className="edit-email-text2"
              >
                <span>NEW EMAIL</span>
                <br></br>
              </label>
              <input
                type="email"
                id="edit-email-input"
                name="email"
                pattern="^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"
                required
                placeholder="new email"
                className="edit-email-textinput input"
              />
              <button type="submit" className="edit-email-button button">
                CONFIRM
              </button>
            </form>
            <Link to="/account" className="edit-email-navlink button">
              CANCEL
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditEmail
