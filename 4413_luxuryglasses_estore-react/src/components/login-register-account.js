import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';

import PropTypes from 'prop-types'

import './login-register-account.css'

function LoginRegisterAccount(props) {
  
  // HANDLE LOGIN FORM ----------------------------------------------------------------------------------------
  const navigate = useNavigate();
  var userDataObj;

  const submitLoginHandler = async(e) => {
    e.preventDefault();

    let username = document.getElementById("username-input-login").value;
    let password = document.getElementById("password-input-login").value;

    var url="http://localhost:8080/login?username=" + username + "&password=" + password;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("User not found. Username or password is incorrect.");
      } else {
        userDataObj = JSON.parse(data);
        navigate('/account');
      }
    }
  }

  // HANDLE REGISTER ACCOUNT ----------------------------------------------------------------------------------

  const submitRegisterRegularHandler = async(e) => {

    e.preventDefault();

    let fname = document.getElementById("fname-input-register").value;
    let lname = document.getElementById("lname-input-register").value;
    let email = document.getElementById("email-input-register").value;
    let username = document.getElementById("username-input-register").value;
    let password = document.getElementById("password-input-register").value;

    if (validateRegister(fname, lname, email, username, password)) {
      var url="http://localhost:8080/register?type=REGULAR&fname=" + fname + "&lname=" + lname + "&email=" + email + "&username=" + username + "&password=" + password;
      var request = new XMLHttpRequest(); // create a connection
      request.open('POST', url);
      request.send(); // send the http request
      request.onload = function() { // When the response comes invoke the following function
        let data = request.responseText; // store reponse in variable and convert to JSON object
        if (data.includes("Unable to register account")) {
          alert(data);
        } else if (data.includes("Successfully")){
          alert(data + " Please Login.");
        } else {
          alert("Error occurred: " + data);
        }
      }
    }

  }

  function validateRegister(fname, lname, email, username, password) {
    var loginOK = true;

    if (fname.legnth == 0) {
      alert("First name must be filled.");
      return false;
    }

    if (lname.legnth == 0) {
      alert("Last name must be filled.");
      return false;
    }

    if (username.legnth == 0) {
      alert("Username must be filled.");
      return false;
    }
    
    // check username is between 1 and 30
    if (username.length < 1 || username.legnth > 30) {
      alert("Username must be between 1 and 30 chracters long.");
      return false;
    }

    // check if username has letters, numbers and underscores only
    var expr = /^[a-zA-Z0-9_]*$/;
    if (!expr.test(username)) {
      alert("Only Alphabets, Numbers and Underscore allowed in Username.");
      return false;
    }

    if (password.legnth == 0) {
      alert("Password must be filled.");
      return false;
    }

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

    if (email.legnth == 0) {
      alert("Email must be filled.");
      return false;
    }

    // validate email
    var expr = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
    if (!expr.test(email)) {
      alert("Only Alphabets, Numbers, Dot and Underscore allowed in Password.");
      return false;
    }
    
    return loginOK;
  }

  // ----------------------------------------------------------------------------------------------------------
  return (
    <div className="login-register-account-container">
        <form
          id="login"
          action="/login"
          method="GET"
          className="login-register-account-form section-container"
          onSubmit={submitLoginHandler}
        >
          <h2 className="login-register-account-text">{props.heading}</h2>
          <label
            id="username-label-login"
            htmlFor="username-input-login"
            className="login-register-account-text01"
          >
            {props.text}
          </label>
          <input
            type="text"
            id="username-input-login"
            name="username"
            required
            placeholder={props.textinput_placeholder}
            className="login-register-account-textinput input"
          />
          <label
            id="password-label-login"
            htmlFor="password-input-login"
            className="login-register-account-text02"
          >
            {props.text1}
          </label>
          <input
            type="password"
            id="password-input-login"
            name="password"
            required
            placeholder={props.textinput_placeholder1}
            className="login-register-account-textinput1 input"
          />
          <button
            // onClick={() => {
            //   alert("form submitted");
            // }}
            className="login-register-account-button button"
            type="submit"
            >
            {props.signin}
          </button>
        </form>

        <form
          id="register"
          onSubmit={submitRegisterRegularHandler}
          className="login-register-account-form1 section-container"
        >
          <h2 className="login-register-account-text03">{props.heading1}</h2>
          <label
            id="fname-label-register"
            htmlFor="fname-input-register"
            className="login-register-account-text04"
          >
            <span>FIRST NAME</span>
            <br></br>
          </label>
          <input
            type="text"
            id="fname-input-register"
            name="fname"
            required
            placeholder={props.textinput_placeholder2}
            className="login-register-account-textinput2 input"
          />
          <label
            id="lname-label-register"
            htmlFor="lname-input-register"
            className="login-register-account-text07"
          >
            <span>LAST NAME</span>
            <br></br>
          </label>
          <input
            type="text"
            id="lname-input-register"
            name="lname"
            required
            placeholder={props.textinput_placeholder3}
            className="login-register-account-textinput3 input"
          />
          <label
            id="email-label-register"
            htmlFor="email-input-register"
            className="login-register-account-text10"
          >
            <span>EMAIL</span>
            <br></br>
          </label>
          <input
            type="email"
            id="email-input-register"
            name="email"
            pattern="^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$"
            required
            placeholder={props.textinput_placeholder4}
            className="login-register-account-textinput4 input"
          />
          <label
            id="username-label-register"
            htmlFor="username-input-register"
            className="login-register-account-text13"
          >
            {props.text2}
          </label>
          <input
            type="text"
            id="username-input-register"
            name="username"
            required
            placeholder={props.textinput_placeholder5}
            className="login-register-account-textinput5 input"
          />
          <label
            id="password-label-register"
            htmlFor="password-input-register"
            className="login-register-account-text14"
          >
            {props.text3}
          </label>
          <input
            type="password"
            id="password-input-register"
            name="password"
            required
            placeholder={props.textinput_placeholder6}
            className="login-register-account-textinput6 input"
          />
          <button
            // onClick={submitLoginHandler()}
            className="login-register-account-button1 button"
            type="submit"
          >
            {props.register}
          </button>
        </form>
    </div>
  )
}

LoginRegisterAccount.defaultProps = {
  heading: 'LOGIN',
  textinput_placeholder3: 'last name',
  textinput_placeholder: 'username',
  text3: 'PASSWORD',
  heading1: 'REEGISTER',
  textinput_placeholder1: 'password',
  signin: 'SIGN IN',
  textinput_placeholder4: 'email',
  textinput_placeholder6: 'password',
  textinput_placeholder2: 'first name',
  text2: 'USERNAME',
  textinput_placeholder5: 'username',
  text: 'USERNAME',
  register: 'REGISTER',
  text1: 'PASSWORD',
}

LoginRegisterAccount.propTypes = {
  heading: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text3: PropTypes.string,
  heading1: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  signin: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  textinput_placeholder6: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  text2: PropTypes.string,
  textinput_placeholder5: PropTypes.string,
  text: PropTypes.string,
  register: PropTypes.string,
  text1: PropTypes.string,
}

export default LoginRegisterAccount
