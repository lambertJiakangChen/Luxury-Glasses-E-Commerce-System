import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './edit-user.css'

function EditUser(props) {

  const navigate = useNavigate();

  // HANDLE EDIT USERNAME ----------------------------------------------------------------------------------------
  const submitEditUsernameHandler = async(e) => {
    e.preventDefault();

    let user = document.getElementById("edit-user-input").value;

    var url="http://localhost:8080/updateUsername?username=" + user;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      if (data.includes("Success")) {
        alert(data);
        navigate('/account');
      } else if (data.includes("Could not update username.")) {
        alert(data);
      } else {
        alert("Error occurred: " + data);
      }
    }
  }

  // function validateUsername(username) {
  //   var userOK = true;

  //   if (username.legnth == 0) {
  //     alert("Username must be filled.");
  //     return false;
  //   }
    
  //   // check username is between 1 and 30
  //   if (username.length < 1 || username.legnth > 30) {
  //     alert("Username must be between 1 and 30 chracters long.");
  //     return false;
  //   }

  //   // check if username has letters, numbers and underscores only
  //   var expr = /^[a-zA-Z0-9_]*$/;
  //   if (!expr.test(username)) {
  //     alert("Only Alphabets, Numbers and Underscore allowed in Username.");
  //     return false;
  //   }
    
  //   return userOK;
  // }

  // -----------------------------------------------------------------------------------------------------------------
  

  return (
    <div className="edit-user-container">
      <Helmet>
        <title>EditUser - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="EditUser - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="edit-user-main">
        <div className="edit-user-container1">
          <h1 id="title-account-view" className="edit-user-text">
            MY ACCOUNT
          </h1>
          <div className="edit-user-container2">
            <h3 id="edit-user-title" className="edit-user-text1">
              Edit Username: 
            </h3>
            <form 
              className="edit-user-form"
              onSubmit={submitEditUsernameHandler}
              >
              <label
                id="edit-user-label"
                htmlFor="edit-user-input"
                className="edit-user-text2"
              >
                <span>NEW USERNAME</span>
                <br></br>
              </label>
              <input
                type="text"
                id="edit-user-input"
                name="username"
                required
                placeholder="new username"
                className="edit-user-textinput input"
              />
              <button type="submit" className="edit-user-button button">
                CONFIRM
              </button>
            </form>
            <Link to="/account" className="edit-user-navlink button">
              CANCEL
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditUser
