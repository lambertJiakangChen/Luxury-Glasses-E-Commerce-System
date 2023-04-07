import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './edit-last-name.css'

function EditLastName(props) {
  const navigate = useNavigate();

  // HANDLE EDIT LAST NAME ----------------------------------------------------------------------------------------
  const submitEditLastNameHandler = async(e) => {
    e.preventDefault();

    let lname = document.getElementById("edit-lname-input").value;

    var url="http://localhost:8080/updateLastName?lname=" + lname;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      if (data.includes("Success")) {
        alert(data);
        navigate('/account');
      } else {
        alert("Error occurred: " + data);
      }
    }
  }

  // -----------------------------------------------------------------------------------------------------------------
  
  return (
    <div className="edit-last-name-container">
      <Helmet>
        <title>EditLastName - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="EditLastName - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="edit-last-name-main">
        <div className="edit-last-name-container1">
          <h1 id="title-account-view" className="edit-last-name-text">
            MY ACCOUNT
          </h1>
          <div className="edit-last-name-container2">
            <h3 id="edit-lname-title" className="edit-last-name-text1">
              Edit Last Name: 
            </h3>
            <form 
              className="edit-last-name-form"
              onSubmit={submitEditLastNameHandler}
              >
              <label
                id="edit-lname-label"
                htmlFor="edit-lname-input"
                className="edit-last-name-text2"
              >
                <span>LAST NAME</span>
                <br></br>
              </label>
              <input
                type="text"
                id="edit-lname-input"
                name="lname"
                required
                placeholder="last name"
                className="edit-last-name-textinput input"
              />
              <button type="submit" className="edit-last-name-button button">
                CONFIRM
              </button>
            </form>
            <Link to="/account" className="edit-last-name-navlink button">
              CANCEL
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditLastName
