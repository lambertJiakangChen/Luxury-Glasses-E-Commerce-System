import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './webusage.css'

const Webusage = (props) => {
  return (
    <div className="webusage-container">
      <Helmet>
        <title>Webusage - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="Webusage - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="webusage-main">
        <div className="webusage-container1">
          <h1 id="title-account-view" className="webusage-text">
            Webusage
          </h1>
          <div className="webusage-container2">
            <span className="webusage-text1">Output</span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Webusage
