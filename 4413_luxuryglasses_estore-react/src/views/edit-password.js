import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './edit-password.css'

const EditPassword = (props) => {
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
            <form className="edit-password-form">
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
              <button type="button" className="edit-password-button button">
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
