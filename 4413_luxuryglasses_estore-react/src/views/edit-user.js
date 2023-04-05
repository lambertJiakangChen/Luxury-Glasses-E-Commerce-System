import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './edit-user.css'

const EditUser = (props) => {
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
            <form className="edit-user-form">
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
              <button type="button" className="edit-user-button button">
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
