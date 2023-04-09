import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';
import { Helmet } from 'react-helmet'
import { useState, useRef } from 'react';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './monthlysale.css'

const Monthlysale = (props) => {
  var userDataObj;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const checkbox1 = useRef();
  const checkbox2 = useRef();
  const checkbox3 = useRef();
  const checkbox4 = useRef();
  const checkbox5 = useRef();
  const checkbox6 = useRef();
  const checkbox7 = useRef();
  const checkbox8 = useRef();
  const checkbox9 = useRef();
  const checkbox10 = useRef();
  const checkbox11= useRef();
  const checkbox12 = useRef();
  const monthlysolditems = async(e) => {	   
	e.preventDefault();
	const target = document.querySelector('#Ajaxresult');
	let themonth;
    if (checkbox1.current.checked) {
        themonth = "Jan"
        setMessage(themonth)
        }
	else if (checkbox2.current.checked) {
        themonth = "Feb"
        setMessage(themonth)
        }
    else if (checkbox3.current.checked) {
	    themonth = "Mar"
	    setMessage(themonth)
    }
    else if (checkbox4.current.checked) {
        themonth = "April"
        setMessage(themonth)
        }
    else if (checkbox5.current.checked) {
        themonth = "May"
        setMessage(themonth)
        }
    else if (checkbox6.current.checked) {
        themonth = "Jun"
        setMessage(themonth)
        }
    else if (checkbox7.current.checked) {
        themonth = "Jul"
        setMessage(themonth)
        }
    else if (checkbox8.current.checked) {
        themonth = "Aug"
        setMessage(themonth)
        }
    else if (checkbox9.current.checked) {
        themonth = "Sep"
        setMessage(themonth)
        }
    else if (checkbox10.current.checked) {
        themonth = "Oct"
        setMessage(themonth)
        }
    else if (checkbox11.current.checked) {
        themonth = "Nov"
        setMessage(themonth)
        }
    else if (checkbox12.current.checked) {
        themonth = "Dec"
        setMessage(themonth)
        }
    else{
		//sortprice = None
		themonth = null
		setMessage(themonth);
	}

    var url="http://localhost:8080/analytics/monthlysolditems?month=" + themonth;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function     
      let data = request.responseText; 
      target.textContent = data;
      if (data.length < 70) {
        target.textContent = "No item this month";
      } else {
        target.textContent = data;
       
        navigate('/monthlysale');
      }
    }
  }
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
                    className="monthlysale-checkbox"
                    ref={checkbox1}
                  />
                  <label className="monthlysale-text02">January</label>
                </div>
                <div className="monthlysale-container05">
                  <input
                    type="checkbox"
                    id="M-Feb"
                    name="month"
                    value="Feb"
                    className="monthlysale-checkbox01"
                    ref={checkbox2}
                  />
                  <label className="monthlysale-text03">February</label>
                </div>
                <div className="monthlysale-container06">
                  <input
                    type="checkbox"
                    id="M-Mar"
                    name="month"
                    value="Mar"
                    className="monthlysale-checkbox02"
                    ref={checkbox3}
                  />
                  <label className="monthlysale-text04">March</label>
                </div>
                <div className="monthlysale-container07">
                  <input
                    type="checkbox"
                    id="M-Apr"
                    name="month"
                    value="April"
                    className="monthlysale-checkbox03"
                    ref={checkbox4}
                  />
                  <label className="monthlysale-text05">April</label>
                </div>
                <div className="monthlysale-container08">
                  <input
                    type="checkbox"
                    id="M-May"
                    name="month"
                    value="May"
                    className="monthlysale-checkbox04"
                    ref={checkbox5}
                  />
                  <label className="monthlysale-text06">May</label>
                </div>
                <div className="monthlysale-container09">
                  <input
                    type="checkbox"
                    id="M-Jun"
                    name="month"
                    value="Jun"
                    className="monthlysale-checkbox05"
                    ref={checkbox6}
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
                    className="monthlysale-checkbox06"
                    ref={checkbox7}
                  />
                  <label className="monthlysale-text08">July</label>
                </div>
                <div className="monthlysale-container12">
                  <input
                    type="checkbox"
                    id="M-Aug"
                    name="month"
                    value="Aug"
                    className="monthlysale-checkbox07"
                    ref={checkbox8}
                  />
                  <label className="monthlysale-text09">August</label>
                </div>
                <div className="monthlysale-container13">
                  <input
                    type="checkbox"
                    id="M-Sep"
                    name="month"
                    value="Sep"
                    className="monthlysale-checkbox08"
                    ref={checkbox9}
                  />
                  <label className="monthlysale-text10">September</label>
                </div>
                <div className="monthlysale-container14">
                  <input
                    type="checkbox"
                    id="M-Oct"
                    name="month"
                    value="Oct"
                    className="monthlysale-checkbox09"
                    ref={checkbox10}
                  />
                  <label className="monthlysale-text11">October</label>
                </div>
                <div className="monthlysale-container15">
                  <input
                    type="checkbox"
                    id="M-Nov"
                    name="month"
                    value="Nov"                   
                    className="monthlysale-checkbox10"
                    ref={checkbox11}
                  />
                  <label className="monthlysale-text12">November</label>
                </div>
                <div className="monthlysale-container16">
                  <input
                    type="checkbox"
                    id="M-Dec"
                    name="month"
                    value="Dec"                   
                    className="monthlysale-checkbox11"
                    ref={checkbox12}
                  />
                  <label>December</label>
                </div>
              </div>
              <button type="submit" className="monthbutton" onClick = {monthlysolditems}>
                Go
              </button>
            </form>
          </div>
          <div className="monthlysale-container17">
            <div id="Ajaxresult"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Monthlysale
