import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './edit-first-name.css'

const EditFirstName = (props) => {
  return (
    <div className="edit-first-name-container">
      <Helmet>
        <title>EditFirstName - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="EditFirstName - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="edit-first-name-main">
        <div className="edit-first-name-container1">
          <h1 id="title-account-view" className="edit-first-name-text">
            MY ACCOUNT
          </h1>
          <div className="edit-first-name-container2">
            <h3 id="edit-fname-title" className="edit-first-name-text1">
              Edit First Name: 
            </h3>
            <form className="edit-first-name-form">
              <label
                id="edit-fname-label"
                htmlFor="edit-fname-input"
                className="edit-first-name-text2"
              >
                <span>FIRST NAME</span>
                <br></br>
              </label>
              <input
                type="text"
                id="edit-fname-input"
                name="fname"
                required
                placeholder="first name"
                className="edit-first-name-textinput input"
              />
              <button type="button" className="edit-first-name-button button">
                CONFIRM
              </button>
            </form>
            <Link to="/account" className="edit-first-name-navlink button">
              CANCEL
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default EditFirstName
