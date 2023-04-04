import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './login-register-account.css'

const LoginRegisterAccount = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className="login-register-account-container">
      {!isLoggedIn && (
        <form
          id="login"
          action="/login"
          method="GET"
          target="_self"
          className="login-register-account-form section-container"
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
            type="button"
            onClick={() => setIsLoggedIn(true)}
            className="login-register-account-button button"
          >
            {props.signin}
          </button>
        </form>
      )}
      {!isLoggedIn && (
        <form
          id="register"
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]&#123;2,&#125;$"
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
            onClick={() => setIsLoggedIn(true)}
            className="login-register-account-button1 button"
          >
            {props.register}
          </button>
        </form>
      )}
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
