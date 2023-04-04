import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './account.css'

const Account = (props) => {
  return (
    <div className="account-container">
      <Helmet>
        <title>Account - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="Account - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="account-main">
        <div className="account-container01">
          <h1 id="title-account-view" className="account-text">
            MY ACCOUNT
          </h1>
          <div id="account-details" className="account-container02">
            <div className="account-container03">
              <h3 id="fname-account-view" className="account-text01">
                First Name: 
              </h3>
              <p id="fname-replace" className="account-text02">
                Text
              </p>
              <Link
                to="/edit-first-name"
                id="edit-fname"
                className="account-navlink button"
              >
                <span>
                  <span>edit</span>
                  <br></br>
                </span>
              </Link>
            </div>
            <div className="account-container04">
              <h3 id="lname-account-view" className="account-text06">
                Last Name: 
              </h3>
              <p id="lname-replace" className="account-text07">
                Text
              </p>
              <Link
                to="/edit-last-name"
                id="edit-lname"
                className="account-navlink1 button"
              >
                <span>
                  <span>edit</span>
                  <br></br>
                </span>
              </Link>
            </div>
            <div className="account-container05">
              <h3 id="username-account-view" className="account-text11">
                Username: 
              </h3>
              <p id="username-replace" className="account-text12">
                Text
              </p>
              <Link
                to="/edit-user"
                id="edit-user"
                className="account-navlink2 button"
              >
                <span>
                  <span>edit</span>
                  <br></br>
                </span>
              </Link>
            </div>
            <div className="account-container06">
              <h3 id="email-account-view" className="account-text16">
                <span>Email: </span>
                <br></br>
              </h3>
              <p id="email-replace" className="account-text19">
                Text
              </p>
              <Link
                to="/edit-email"
                id="edit-email"
                className="account-navlink3 button"
              >
                <span>
                  <span>edit</span>
                  <br></br>
                </span>
              </Link>
            </div>
            <div className="account-container07">
              <h3 id="password-account-view" className="account-text23">
                <span>Password: </span>
                <br></br>
              </h3>
              <p id="password-replace" className="account-text26">
                ****
              </p>
              <Link
                to="/edit-password"
                id="edit-password"
                className="account-navlink4 button"
              >
                <span>
                  <span>edit</span>
                  <br></br>
                </span>
              </Link>
            </div>
            <div className="account-container08">
              <h3 id="type-account-view" className="account-text30">
                <span>Account Type: </span>
                <br></br>
              </h3>
              <p id="acc-type-replace" className="account-text33">
                Text
              </p>
            </div>
          </div>
          <div id="register-admin-form" className="account-container09">
            <form
              id="register-admin"
              className="account-form section-container"
            >
              <h2 className="account-text34">REGISTER ADMIN</h2>
              <label
                id="fname-label-register-admin"
                htmlFor="fname-input-register"
                className="account-text35"
              >
                <span>FIRST NAME</span>
                <br></br>
              </label>
              <input
                type="text"
                id="fname-input-register-admin"
                name="fname"
                required
                placeholder="first name"
                className="account-textinput input"
              />
              <label
                id="lname-label-register-admin"
                htmlFor="lname-input-register"
                className="account-text38"
              >
                <span>LAST NAME</span>
                <br></br>
              </label>
              <input
                type="text"
                id="lname-input-register-admin"
                name="lname"
                required
                placeholder="last name"
                className="account-textinput1 input"
              />
              <label
                id="email-label-register-admin"
                htmlFor="email-input-register"
                className="account-text41"
              >
                <span>EMAIL</span>
                <br></br>
              </label>
              <input
                type="email"
                id="email-input-register-admin"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]&#123;2,&#125;$"
                required
                placeholder="email"
                className="account-textinput2 input"
              />
              <label
                id="username-label-register-admin"
                htmlFor="username-input-register"
                className="account-text44"
              >
                USERNAME
              </label>
              <input
                type="text"
                id="username-input-register-admin"
                name="username"
                required
                placeholder="username"
                className="account-textinput3 input"
              />
              <label
                id="password-label-register-admin"
                htmlFor="password-input-register"
                className="account-text45"
              >
                TEMPORARY PASSWORD
              </label>
              <input
                type="password"
                id="password-input-register-admin"
                name="password"
                required
                placeholder="temporary password"
                className="account-textinput4 input"
              />
              <button className="account-button button">REGISTER</button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Account