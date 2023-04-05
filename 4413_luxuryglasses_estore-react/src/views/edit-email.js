import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './edit-email.css'

const EditEmail = (props) => {
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
            <form className="edit-email-form">
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
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]&#123;2,&#125;$"
                required
                placeholder="new email"
                className="edit-email-textinput input"
              />
              <button type="button" className="edit-email-button button">
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
