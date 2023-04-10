import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './edit-password.css'

function EditPassword(props) {

  const navigate = useNavigate();

  // HANDLE EDIT PASSWORD ----------------------------------------------------------------------------------------
  const submitEditPasswordHandler = async(e) => {
    e.preventDefault();

  let oldPass = document.getElementById("edit-old-pass-input").value;
  let newPass = document.getElementById("edit-new-pass-input").value;

    if (!validatePassword(newPass)) {
      return;
    }

    var url="http://localhost:8080/updatePassword?oldPass=" + oldPass + "&newPass=" + newPass;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      if (data.includes("Success")) {
        alert(data);
        navigate('/account');
      } else if (data.includes("Could not update password.")) {
        alert(data);
      } else {
        alert("Error occurred: " + data);
      }
    }
  }

  function validatePassword(password) {
    var passOK = true;

    // validate password is at least 6 characters long
    if (password.length < 6) {
      alert("Password must be at least 6 chracters long.");
      return false;
    }

    // validate password has alphanumeric
    var expr = /^[a-zA-Z0-9]*$/;
    if (!expr.test(password)) {
      alert("Only Alphabets, Numbers, Dot and Underscore allowed in Password.");
      return false;
    }
    
    return passOK;
  }

  return (
    <div className="edit-password-container">
      <Helmet>
        <title>EditPassword - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="EditPassword - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="edit-password-main">
        <div className="edit-password-container1">
          <h1 id="title-account-view" className="edit-password-text">
            MY ACCOUNT
          </h1>
          <div className="edit-password-container2">
            <h3 id="edit-fname-title" className="edit-password-text1">
              Edit Password: 
            </h3>
            <form 
              className="edit-password-form"
              onSubmit={submitEditPasswordHandler}
              >
              <label
                id="edit-old-pass-label"
                htmlFor="edit-old-pass-input"
                className="edit-password-text2"
              >
                <span>CURRENT PASSWORD</span>
                <br></br>
              </label>
              <input
                type="password"
                id="edit-old-pass-input"
                name="oldPass"
                required
                placeholder="current password"
                className="edit-password-textinput input"
              />
              <label
                id="edit-new-pass-label"
                htmlFor="edit-new-pass-input"
                className="edit-password-text5"
              >
                <span>NEW PASSWORD</span>
                <br></br>
              </label>
              <input
                type="password"
                id="edit-new-pass-input"
                name="newPass"
                required
                placeholder="new password"
                className="edit-password-textinput1 input"
              />
              <button type="submit" className="edit-password-button button">
                CONFIRM
              </button>
            </form>
            <Link to="/account" className="edit-password-navlink button">
              CANCEL
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditPassword
