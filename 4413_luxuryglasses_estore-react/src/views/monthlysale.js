import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './monthlysale.css'

const Monthlysale = (props) => {
  return (
    <div className="monthlysale-container">
      <Helmet>
        <title>Monthlysale - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="Monthlysale - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="monthlysale-main">
        <div className="monthlysale-container01">
          <h1 id="title-account-view" className="monthlysale-text">
            Monthly Sold items
          </h1>
          <div className="monthlysale-container02">
            <h3 id="edit-user-title" className="monthlysale-text01">
              Pick a month
            </h3>
            <form className="monthlysale-form">
              <div className="monthlysale-container03">
                <div className="monthlysale-container04">
                  <input
                    type="checkbox"
                    id="M-Jan"
                    name="month"
                    value="Jan"
                    checked="true"
                    className="monthlysale-checkbox"
                  />
                  <label className="monthlysale-text02">January</label>
                </div>
                <div className="monthlysale-container05">
                  <input
                    type="checkbox"
                    id="M-Feb"
                    name="month"
                    value="Feb"
                    checked="true"
                    className="monthlysale-checkbox01"
                  />
                  <label className="monthlysale-text03">February</label>
                </div>
                <div className="monthlysale-container06">
                  <input
                    type="checkbox"
                    id="M-Mar"
                    name="month"
                    value="Mar"
                    checked="true"
                    className="monthlysale-checkbox02"
                  />
                  <label className="monthlysale-text04">March</label>
                </div>
                <div className="monthlysale-container07">
                  <input
                    type="checkbox"
                    id="M-Apr"
                    name="month"
                    value="April"
                    checked="true"
                    className="monthlysale-checkbox03"
                  />
                  <label className="monthlysale-text05">April</label>
                </div>
                <div className="monthlysale-container08">
                  <input
                    type="checkbox"
                    id="M-May"
                    name="month"
                    value="May"
                    checked="true"
                    className="monthlysale-checkbox04"
                  />
                  <label className="monthlysale-text06">May</label>
                </div>
                <div className="monthlysale-container09">
                  <input
                    type="checkbox"
                    id="M-Jun"
                    name="month"
                    value="Jun"
                    checked="true"
                    className="monthlysale-checkbox05"
                  />
                  <label>June</label>
                </div>
              </div>
              <div className="monthlysale-container10">
                <div className="monthlysale-container11">
                  <input
                    type="checkbox"
                    id="M-Jul"
                    name="month"
                    value="Jul"
                    checked="true"
                    className="monthlysale-checkbox06"
                  />
                  <label className="monthlysale-text08">July</label>
                </div>
                <div className="monthlysale-container12">
                  <input
                    type="checkbox"
                    id="M-Aug"
                    name="month"
                    value="Aug"
                    checked="true"
                    className="monthlysale-checkbox07"
                  />
                  <label className="monthlysale-text09">August</label>
                </div>
                <div className="monthlysale-container13">
                  <input
                    type="checkbox"
                    id="M-Sep"
                    name="month"
                    value="Sep"
                    checked="true"
                    className="monthlysale-checkbox08"
                  />
                  <label className="monthlysale-text10">September</label>
                </div>
                <div className="monthlysale-container14">
                  <input
                    type="checkbox"
                    id="M-Oct"
                    name="month"
                    value="Oct"
                    checked="true"
                    className="monthlysale-checkbox09"
                  />
                  <label className="monthlysale-text11">October</label>
                </div>
                <div className="monthlysale-container15">
                  <input
                    type="checkbox"
                    id="M-Nov"
                    name="month"
                    value="Nov"
                    checked="true"
                    className="monthlysale-checkbox10"
                  />
                  <label className="monthlysale-text12">November</label>
                </div>
                <div className="monthlysale-container16">
                  <input
                    type="checkbox"
                    id="M-Dec"
                    name="month"
                    checked="true"
                    autoComplete="Dec"
                    className="monthlysale-checkbox11"
                  />
                  <label>December</label>
                </div>
              </div>
              <Link to="/account" className="monthlysale-navlink button">
                Search
              </Link>
            </form>
          </div>
          <div className="monthlysale-container17">
            <span className="monthlysale-text14">Output</span>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Monthlysale
