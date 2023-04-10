import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import PropTypes from 'prop-types'

import './drop-down.css'

function DropDown(props) {

  const navigate = useNavigate();
  var data;

  function checkIsLoggedIn() {
    // alert("checkIsLoggedIn...");
    var url="http://localhost:8080/getAccountDetails";
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      data = request.responseText; // store reponse in variable and convert to JSON object
      // alert(data);
      if (data.length == 0) {
        return false;
      } else {
        return true;
      }
    }
  }

  const NavigateToAccount = () => {
    checkIsLoggedIn();
    if (data.length != 0) {
      navigate('/account');
    } else {
      alert("please login.");
    }
  }

  const NavigateToSales = () => {
    checkIsLoggedIn();
    if (data.length != 0) {
      // is admin
      var userDataObj = JSON.parse(data);
      if (userDataObj.accountType == "ADMIN") {
        navigate('/monthlysale');
      } else {
        alert("not an admin.");
      }
    }
    else {
      alert("please login.");
    }
    
    
  }

  const NavigateToWebUsage = () => {
    checkIsLoggedIn();
    if (data.length != 0) {
      // is admin
      var userDataObj = JSON.parse(data);
      if (userDataObj.accountType == "ADMIN") {
        navigate('/webusage');
      } else {
        alert("not an admin.");
      }
    }
    else {
      alert("please login.");
    }
  }

  const NavigateToLogin = () => {
    checkIsLoggedIn();
    if (data.length != 0) {
      alert("already logged in.");
    } else {
      navigate('/loginPage');
    }
  }

  const NavigateToLogout = () => {
    checkIsLoggedIn();
    if (data.length != 0) {
      handleLogout();
      navigate('/loginPage');
    } else {
      alert("please login.");
    }
  }

  function handleLogout() {
    // alert("checkIsLoggedIn...");
    var url="http://localhost:8080/logout";
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      data = request.responseText; // store reponse in variable and convert to JSON object
      // alert(data);
      if (data.includes("Logout Success")) {
        return true;
      } else {
        return false;
      }
    }
  }

  return (
    <div className={`drop-down-sidebar ${props.rootClassName} `}>
      <nav className="drop-down-nav">
        <span className="drop-down-text" id="drop-down-account" onClick={NavigateToAccount}>Account</span>

        <span className="drop-down-text1" id="drop-down-sales" onClick={NavigateToSales}>Sale Reports</span>

        <span className="drop-down-text2" id="drop-down-webuse" onClick={NavigateToWebUsage}>Web Usage Reports</span>

        <span className="drop-down-text3" id="drop-down-login" onClick={NavigateToLogin}>Login</span>

        <span className="drop-down-text4" id="drop-down-logout" onClick={NavigateToLogout}>Logout</span>
      </nav>
    </div>
  )

}

DropDown.defaultProps = {
  rootClassName: '',
}

DropDown.propTypes = {
  rootClassName: PropTypes.string,
}

export default DropDown
