import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ItemCard from '../components/item-card'
import Footer from '../components/footer'
import './products.css'

const Products = (props) => {

  var userDataObj;
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const checkbox1 = useRef();
  const checkbox2 = useRef();
  const checkbox3 = useRef();
  const checkbox4 = useRef();
  
  // DISPLAY ITEM ON LOAD ----------------------------------------------------------
  const viewCatalog = async(e) => {
    e.preventDefault();
    const target = document.querySelector('#Ajaxresult');
    const target2 = document.querySelector('#Hi');
    var url="http://localhost:8080/catalog/viewCatalog";
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      target.textContent = "Test output " + data;
      if (data.length == 0) {
        alert ("Error item not found.");
      } else {
        userDataObj = JSON.parse(data);
        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
      }
    }
  }
  //  SEARCH BY NAME --------------------------------------------------------------------------
  const searchByName = async(e) => {	  
	e.preventDefault();
	
	const target = document.querySelector('#Ajaxresult');

    let itemname = document.getElementById("search_name").value;

    var url="http://localhost:8080/catalog/searchByName?search=" + itemname;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; 
      target.textContent = "Test output " + data;// store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("Item not found");
      } else {
        userDataObj = JSON.parse(data);
        if (userDataObj[0] != null){
	        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
	        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
	        }
	    if (userDataObj[1] != null){
	        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
	        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
	        }
	    if (userDataObj[2] != null){
	        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
	        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
        }else{
			document.getElementById("item3-replace").innerHTML = "ItemName";
	        document.getElementById("price3-replace").innerHTML = "price";
		}
        navigate('/products');
      }
    }
  }
  //  SORT BY PRICE --------------------------------------------------------------------------
  const sortByPrice = async(e) => {	  
	e.preventDefault();
	const target = document.querySelector('#Ajaxresult');
	let sortprice;
    if (checkbox1.current.checked) {
        sortprice = "ascending"
        setMessage(sortprice)
        }
	else if (checkbox2.current.checked) {
        sortprice = "descending"
        setMessage(sortprice)
        }
    else{
		//sortprice = None
		sortprice = null
		setMessage(sortprice);
	}

    var url="http://localhost:8080/catalog/sortByPrice?sort=" + sortprice;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function     
      let data = request.responseText; 
      target.textContent = "Test output " + data;
      if (data.length == 0) {
        alert ("Item not found");
      } else {
        userDataObj = JSON.parse(data);
        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
        navigate('/products');
      }
    }
  }
  //  SORT BY ITEMNAME --------------------------------------------------------------------------
  const sortByName = async(e) => {	  
	e.preventDefault();
	const target = document.querySelector('#Ajaxresult');
    let sortname;
    if (checkbox3.current.checked) {
        sortname = "ascending"
        setMessage1(sortname)
        }
	else if (checkbox4.current.checked) {
        sortname = "descending"
        setMessage1(sortname)
        }
    else{
		//sortprice = None
		sortname = null
		setMessage1(sortname);
	}

    var url="http://localhost:8080/catalog/sortByItemName?sort=" + sortname;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; 
      target.textContent = "Test output " + data;
      if (data.length == 0) {
        alert ("Item not found");
      } else {
        userDataObj = JSON.parse(data);
        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
        navigate('/products');
      }
    }
  }
  //  FILTER BY COLOR --------------------------------------------------------------------------
   const filterByColor = async(e) => {	  
	e.preventDefault();
	
	const target = document.querySelector('#Ajaxresult');

    let color = document.getElementById("filter-color").value;

    var url="http://localhost:8080/catalog/filterByColor?color=" + color;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; 
      target.textContent = data;// store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("no item has this color");
      } else {
        userDataObj = JSON.parse(data);
        navigate('/products');
      }
    }
  }
  //  FILTER BY BRAND --------------------------------------------------------------------------
  const filterByBrand = async(e) => {	  
	e.preventDefault();
	
	const target = document.querySelector('#Ajaxresult');

    let brand = document.getElementById("filter-brand").value;

    var url="http://localhost:8080/catalog/filterByBrand?brand=" + brand;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; 
      target.textContent = data;// store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("no item has this brand");
      } else {
        userDataObj = JSON.parse(data);
        navigate('/products');
      }
    }
  }
  //  FILTER BY cate --------------------------------------------------------------------------
  const filterByCate = async(e) => {	  
	e.preventDefault();
	
	const target = document.querySelector('#Ajaxresult');

    let cate = document.getElementById("filter-cate").value;

    var url="http://localhost:8080/catalog/filterByCategory?cate=" + cate;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; 
      target.textContent = data;// store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("no item has this category");
      } else {
        userDataObj = JSON.parse(data);
        navigate('/products');
      }
    }
  }
  // -----------------------------------------------------------
  return (
    <div className="products-container" onLoad={viewCatalog}>
      <Helmet>
        <title>Products - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="Products - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar rootClassName="navbar-root-class-name8"></Navbar>
      <div className="products-container01">
        <form className="products-form">
          <input
            type="text"
            id="search_name"
            name="search"
            placeholder="Enter an item name"
            className="products-input input"
          />
          <button type="submit" className="products-button button" onClick = {searchByName}>
            SEARCH
          </button>
        </form>
        <div className="products-container02">
          <div className="products-container03">
            <h1 className="products-text">Price</h1>
            <form className="products-form1">
              <div className="products-container04">
                <input
                  type="checkbox"
                  id="sort-price-asc"
                  name="sort"
                  value="ascending"
                  className="products-checkbox"
                  ref={checkbox1}
                />
                <label>ascending</label>
              </div>
              <div className="products-container05">
                <input
                  type="checkbox"
                  id="sort-price-des"
                  name="sort"
                  value="descending"
                  className="products-checkbox1"
                  ref={checkbox2}
                />
                <label>descending</label>
              </div>
              <button type="submit" className="button" onClick = {sortByPrice}>
                Go
              </button>
            </form>
            <p>{message}</p>
          </div>
          <div className="products-container06">
            <h1 className="products-text3">Name</h1>
            <form className="products-form2">
              <div className="products-container07">
                <input
                  type="checkbox"
                  id="sort"
                  name="sort"
                  value="ascending"
                  className="products-checkbox2"
                  ref={checkbox3}
                />
                <label>ascending</label>
              </div>
              <div className="products-container08">
                <input
                  type="checkbox"
                  id="sort"
                  name="sort"
                  value="descending"
                  className="products-checkbox3"
                  ref={checkbox4}
                />
                <label>descending</label>
              </div>
              <button type="submit" className="button" onClick = {sortByName}>
                Go
              </button>
            </form>
            <p>{message1}</p>
          </div>
          
          <div className="products-container09">
              <div className="products-container11">
               <form className="products-form3">
                <div className="products-container12">
                  <svg viewBox="0 0 1024 1024" className="products-icon">
                    <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                  </svg>
                  <input
                    type="text"
                    id="filter-color"
                    name="color"
                    placeholder="Enter color"
                    className="products-textinput input"
                  />
                  <label className="products-text6">filter by Color</label>
                  <button type="submit" className="button" onClick = {filterByColor}>
	                Go
	              </button>          
                </div>
                </form>
                <form className="products-form4">
                <div className="products-container13">
                  <svg viewBox="0 0 1024 1024" className="products-icon2">
                    <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                  </svg>
                  <input
                    type="text"
                    id="filter-brand"
                    name="brand"
                    placeholder="Enter brand name"
                    className="products-textinput1 input"
                  />
                  <label className="products-text7">filter by Brand</label>
                  <button type="submit" className="button" onClick = {filterByBrand}>
	                Go
	              </button>
                </div>
                </form>    
                <form className="products-form5">          
                <div className="products-container14">
                  <svg viewBox="0 0 1024 1024" className="products-icon4">
                    <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
                  </svg>
                  <input
                    type="text"
                    id="filter-cate"
                    name="cate"
                    placeholder="Enter category"
                    className="products-textinput2 input"
                  />
                  <label className="products-text8">filter by Cate</label>
                  <button type="submit" className="button" onClick = {filterByCate}>
	                Go
	              </button>
                </div>
                </form>
              </div>
          </div>
        </div>
        <div id="Ajaxresult"></div>
        <div id="Hi"></div>
        <div className="products-container15">
          <div className="products-container16">
            <div className="products-items">
              <Link to="/productsitem1" className="products-navlink">
               <div className = "firstitem">
                <img
                  src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                  alt="image"
                  className='firstitemimage'
                />
                <p id="item1-replace" className="item1-text33">
                  ItemName
                </p>
                <p id="price1-replace" className="price1-text33">
                  price
                </p>
                </div>
              </Link>
              <Link to="/productsitem2" className="products-navlink1">
                <div className = "seconditem">
                <img
                  src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                  alt="image"
                  className='seconditemimage'
                />
                <p id="item2-replace" className="item2-text33">
                  ItemName
                </p>
                <p id="price2-replace" className="price2-text33">
                  price
                </p>
                </div>
              </Link>
              <Link to="/productsitem3" className="products-navlink2">
                <div className = "thirditem">
                <img
                  src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                  alt="image"
                  className='thirditemimage'
                />
                <p id="item3-replace" className="item3-text33">
                  ItemName
                </p>
                <p id="price3-replace" className="price3-text33">
                  price
                </p>
                </div>
              </Link>
              <ItemCard               
                image_src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="item-card-root-class-name22"               
                className="products-component4"
              ></ItemCard>
              <ItemCard               
                image_src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="item-card-root-class-name23"                
                className="products-component5"
              ></ItemCard>
              <ItemCard                
                image_src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="item-card-root-class-name24"              
                className="products-component6"
              ></ItemCard>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Products
