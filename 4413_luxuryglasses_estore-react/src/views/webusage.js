import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './webusage.css'

const Webusage = (props) => {
	
	const Appwebusage = async(e) => {
    e.preventDefault();
    const target = document.querySelector('#Ajaxresult');
    var url="http://localhost:8080/analytics/webusage";
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      target.textContent = data;
      if (data.length == 0) {
        alert ("Error item not found.");
      } else {
        userDataObj = JSON.parse(data);
      }     
    }
    
  }
  return (
	 
    <div className="webusage-container" onLoad={Appwebusage}>
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
            <div id="Ajaxresult"></div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Webusage
