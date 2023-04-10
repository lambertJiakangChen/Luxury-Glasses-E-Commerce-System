import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useRef } from 'react';
import {useNavigate} from 'react-router-dom';

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ItemCard from '../components/item-card'
import Footer from '../components/footer'
import './products.css'
import productsitem1 from "./productsitem1.js"

const Products = () => {

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
    var url="http://localhost:8080/catalog/viewCatalog";
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      //target.textContent = "Test output " + data;
      if (data.length == 0) {
        alert ("Error item not found.");
      } else {
        userDataObj = JSON.parse(data);
        if (userDataObj[0] != null){
	        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
	        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
	        document.getElementById("color1-replace").innerHTML = userDataObj[0].color;
	        document.getElementById("category1-replace").innerHTML = userDataObj[0].category;
	        document.getElementById("brand1-replace").innerHTML = userDataObj[0].brand;
        }else{
			document.getElementById("item1-replace").innerHTML = "ItemName";
	        document.getElementById("price1-replace").innerHTML = "price";
	        document.getElementById("color1-replace").innerHTML = "color";
	        document.getElementById("category1-replace").innerHTML = "category";
	        document.getElementById("brand1-replace").innerHTML = "brand";
		}
	    if (userDataObj[1] != null){
	        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
	        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
	        document.getElementById("color2-replace").innerHTML = userDataObj[1].color;
	        document.getElementById("category2-replace").innerHTML = userDataObj[1].category;
	        document.getElementById("brand2-replace").innerHTML = userDataObj[1].brand;
        }else{
			document.getElementById("item2-replace").innerHTML = "ItemName";
	        document.getElementById("price2-replace").innerHTML = "price";
	        document.getElementById("color2-replace").innerHTML = "color";
	        document.getElementById("category2-replace").innerHTML = "category";
	        document.getElementById("brand2-replace").innerHTML = "brand";
		}
	    if (userDataObj[2] != null){
	        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
	        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
	        document.getElementById("color3-replace").innerHTML = userDataObj[2].color;
	        document.getElementById("category3-replace").innerHTML = userDataObj[2].category;
	        document.getElementById("brand3-replace").innerHTML = userDataObj[2].brand;
        }else{
			document.getElementById("item3-replace").innerHTML = "ItemName";
	        document.getElementById("price3-replace").innerHTML = "price";
	        document.getElementById("color3-replace").innerHTML = "mycolor";
	        document.getElementById("category3-replace").innerHTML = "category";
	        document.getElementById("brand3-replace").innerHTML = "brand";
		}
		if (userDataObj[3] != null){
	        document.getElementById("item4-replace").innerHTML = userDataObj[3].itemName;
	        document.getElementById("price4-replace").innerHTML = "$" + userDataObj[3].price;
	        document.getElementById("color4-replace").innerHTML = userDataObj[3].color;
	        document.getElementById("category4-replace").innerHTML = userDataObj[3].category;
	        document.getElementById("brand4-replace").innerHTML = userDataObj[3].brand;
        }else{
			document.getElementById("item4-replace").innerHTML = "ItemName";
	        document.getElementById("price4-replace").innerHTML = "price";
	        document.getElementById("color4-replace").innerHTML = "mycolor";
	        document.getElementById("category4-replace").innerHTML = "category";
	        document.getElementById("brand4-replace").innerHTML = "brand";
		}
		if (userDataObj[4] != null){
	        document.getElementById("item5-replace").innerHTML = userDataObj[4].itemName;
	        document.getElementById("price5-replace").innerHTML = "$" + userDataObj[4].price;
	        document.getElementById("color5-replace").innerHTML = userDataObj[4].color;
	        document.getElementById("category5-replace").innerHTML = userDataObj[4].category;
	        document.getElementById("brand5-replace").innerHTML = userDataObj[4].brand;
        }else{
			document.getElementById("item5-replace").innerHTML = "ItemName";
	        document.getElementById("price5-replace").innerHTML = "price";
	        document.getElementById("color5-replace").innerHTML = "mycolor";
	        document.getElementById("category5-replace").innerHTML = "category";
	        document.getElementById("brand5-replace").innerHTML = "brand";
		}
		if (userDataObj[5] != null){
	        document.getElementById("item6-replace").innerHTML = userDataObj[5].itemName;
	        document.getElementById("price6-replace").innerHTML = "$" + userDataObj[5].price;
	        document.getElementById("color6-replace").innerHTML = userDataObj[5].color;
	        document.getElementById("category6-replace").innerHTML = userDataObj[5].category;
	        document.getElementById("brand6-replace").innerHTML = userDataObj[5].brand;
        }else{
			document.getElementById("item6-replace").innerHTML = "ItemName";
	        document.getElementById("price6-replace").innerHTML = "price";
	        document.getElementById("color6-replace").innerHTML = "mycolor";
	        document.getElementById("category6-replace").innerHTML = "category";
	        document.getElementById("brand6-replace").innerHTML = "brand";
		}
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
      //target.textContent = "Test output " + data;// store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("Item not found");
      } else {
        userDataObj = JSON.parse(data);
         if (userDataObj[0] != null){
	        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
	        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
	        document.getElementById("color1-replace").innerHTML = userDataObj[0].color;
	        document.getElementById("category1-replace").innerHTML = userDataObj[0].category;
	        document.getElementById("brand1-replace").innerHTML = userDataObj[0].brand;
        }else{
			document.getElementById("item1-replace").innerHTML = "ItemName";
	        document.getElementById("price1-replace").innerHTML = "price";
	        document.getElementById("color1-replace").innerHTML = "color";
	        document.getElementById("category1-replace").innerHTML = "category";
	        document.getElementById("brand1-replace").innerHTML = "brand";
		}
	    if (userDataObj[1] != null){
	        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
	        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
	        document.getElementById("color2-replace").innerHTML = userDataObj[1].color;
	        document.getElementById("category2-replace").innerHTML = userDataObj[1].category;
	        document.getElementById("brand2-replace").innerHTML = userDataObj[1].brand;
        }else{
			document.getElementById("item2-replace").innerHTML = "ItemName";
	        document.getElementById("price2-replace").innerHTML = "price";
	        document.getElementById("color2-replace").innerHTML = "color";
	        document.getElementById("category2-replace").innerHTML = "category";
	        document.getElementById("brand2-replace").innerHTML = "brand";
		}
	    if (userDataObj[2] != null){
	        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
	        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
	        document.getElementById("color3-replace").innerHTML = userDataObj[2].color;
	        document.getElementById("category3-replace").innerHTML = userDataObj[2].category;
	        document.getElementById("brand3-replace").innerHTML = userDataObj[2].brand;
        }else{
			document.getElementById("item3-replace").innerHTML = "ItemName";
	        document.getElementById("price3-replace").innerHTML = "price";
	        document.getElementById("color3-replace").innerHTML = "mycolor";
	        document.getElementById("category3-replace").innerHTML = "category";
	        document.getElementById("brand3-replace").innerHTML = "brand";
		}
		if (userDataObj[3] != null){
	        document.getElementById("item4-replace").innerHTML = userDataObj[3].itemName;
	        document.getElementById("price4-replace").innerHTML = "$" + userDataObj[3].price;
	        document.getElementById("color4-replace").innerHTML = userDataObj[3].color;
	        document.getElementById("category4-replace").innerHTML = userDataObj[3].category;
	        document.getElementById("brand4-replace").innerHTML = userDataObj[3].brand;
        }else{
			document.getElementById("item4-replace").innerHTML = "ItemName";
	        document.getElementById("price4-replace").innerHTML = "price";
	        document.getElementById("color4-replace").innerHTML = "mycolor";
	        document.getElementById("category4-replace").innerHTML = "category";
	        document.getElementById("brand4-replace").innerHTML = "brand";
		}
		if (userDataObj[4] != null){
	        document.getElementById("item5-replace").innerHTML = userDataObj[4].itemName;
	        document.getElementById("price5-replace").innerHTML = "$" + userDataObj[4].price;
	        document.getElementById("color5-replace").innerHTML = userDataObj[4].color;
	        document.getElementById("category5-replace").innerHTML = userDataObj[4].category;
	        document.getElementById("brand5-replace").innerHTML = userDataObj[4].brand;
        }else{
			document.getElementById("item5-replace").innerHTML = "ItemName";
	        document.getElementById("price5-replace").innerHTML = "price";
	        document.getElementById("color5-replace").innerHTML = "mycolor";
	        document.getElementById("category5-replace").innerHTML = "category";
	        document.getElementById("brand5-replace").innerHTML = "brand";
		}
		if (userDataObj[5] != null){
	        document.getElementById("item6-replace").innerHTML = userDataObj[5].itemName;
	        document.getElementById("price6-replace").innerHTML = "$" + userDataObj[5].price;
	        document.getElementById("color6-replace").innerHTML = userDataObj[5].color;
	        document.getElementById("category6-replace").innerHTML = userDataObj[5].category;
	        document.getElementById("brand6-replace").innerHTML = userDataObj[5].brand;
        }else{
			document.getElementById("item6-replace").innerHTML = "ItemName";
	        document.getElementById("price6-replace").innerHTML = "price";
	        document.getElementById("color6-replace").innerHTML = "mycolor";
	        document.getElementById("category6-replace").innerHTML = "category";
	        document.getElementById("brand6-replace").innerHTML = "brand";
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
      //target.textContent = "Test output " + data;
      if (data.length == 0) {
        alert ("Item not found");
      } else {
        userDataObj = JSON.parse(data);
       if (userDataObj[0] != null){
	        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
	        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
	        document.getElementById("color1-replace").innerHTML = userDataObj[0].color;
	        document.getElementById("category1-replace").innerHTML = userDataObj[0].category;
	        document.getElementById("brand1-replace").innerHTML = userDataObj[0].brand;
        }else{
			document.getElementById("item1-replace").innerHTML = "ItemName";
	        document.getElementById("price1-replace").innerHTML = "price";
	        document.getElementById("color1-replace").innerHTML = "color";
	        document.getElementById("category1-replace").innerHTML = "category";
	        document.getElementById("brand1-replace").innerHTML = "brand";
		}
	    if (userDataObj[1] != null){
	        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
	        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
	        document.getElementById("color2-replace").innerHTML = userDataObj[1].color;
	        document.getElementById("category2-replace").innerHTML = userDataObj[1].category;
	        document.getElementById("brand2-replace").innerHTML = userDataObj[1].brand;
        }else{
			document.getElementById("item2-replace").innerHTML = "ItemName";
	        document.getElementById("price2-replace").innerHTML = "price";
	        document.getElementById("color2-replace").innerHTML = "color";
	        document.getElementById("category2-replace").innerHTML = "category";
	        document.getElementById("brand2-replace").innerHTML = "brand";
		}
	    if (userDataObj[2] != null){
	        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
	        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
	        document.getElementById("color3-replace").innerHTML = userDataObj[2].color;
	        document.getElementById("category3-replace").innerHTML = userDataObj[2].category;
	        document.getElementById("brand3-replace").innerHTML = userDataObj[2].brand;
        }else{
			document.getElementById("item3-replace").innerHTML = "ItemName";
	        document.getElementById("price3-replace").innerHTML = "price";
	        document.getElementById("color3-replace").innerHTML = "mycolor";
	        document.getElementById("category3-replace").innerHTML = "category";
	        document.getElementById("brand3-replace").innerHTML = "brand";
		}
		if (userDataObj[3] != null){
	        document.getElementById("item4-replace").innerHTML = userDataObj[3].itemName;
	        document.getElementById("price4-replace").innerHTML = "$" + userDataObj[3].price;
	        document.getElementById("color4-replace").innerHTML = userDataObj[3].color;
	        document.getElementById("category4-replace").innerHTML = userDataObj[3].category;
	        document.getElementById("brand4-replace").innerHTML = userDataObj[3].brand;
        }else{
			document.getElementById("item4-replace").innerHTML = "ItemName";
	        document.getElementById("price4-replace").innerHTML = "price";
	        document.getElementById("color4-replace").innerHTML = "mycolor";
	        document.getElementById("category4-replace").innerHTML = "category";
	        document.getElementById("brand4-replace").innerHTML = "brand";
		}
		if (userDataObj[4] != null){
	        document.getElementById("item5-replace").innerHTML = userDataObj[4].itemName;
	        document.getElementById("price5-replace").innerHTML = "$" + userDataObj[4].price;
	        document.getElementById("color5-replace").innerHTML = userDataObj[4].color;
	        document.getElementById("category5-replace").innerHTML = userDataObj[4].category;
	        document.getElementById("brand5-replace").innerHTML = userDataObj[4].brand;
        }else{
			document.getElementById("item5-replace").innerHTML = "ItemName";
	        document.getElementById("price5-replace").innerHTML = "price";
	        document.getElementById("color5-replace").innerHTML = "mycolor";
	        document.getElementById("category5-replace").innerHTML = "category";
	        document.getElementById("brand5-replace").innerHTML = "brand";
		}
		if (userDataObj[5] != null){
	        document.getElementById("item6-replace").innerHTML = userDataObj[5].itemName;
	        document.getElementById("price6-replace").innerHTML = "$" + userDataObj[5].price;
	        document.getElementById("color6-replace").innerHTML = userDataObj[5].color;
	        document.getElementById("category6-replace").innerHTML = userDataObj[5].category;
	        document.getElementById("brand6-replace").innerHTML = userDataObj[5].brand;
        }else{
			document.getElementById("item6-replace").innerHTML = "ItemName";
	        document.getElementById("price6-replace").innerHTML = "price";
	        document.getElementById("color6-replace").innerHTML = "mycolor";
	        document.getElementById("category6-replace").innerHTML = "category";
	        document.getElementById("brand6-replace").innerHTML = "brand";
		}
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
      //target.textContent = "Test output " + data;
      if (data.length == 0) {
        alert ("Item not found");
      } else {
        userDataObj = JSON.parse(data);
        if (userDataObj[0] != null){
	        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
	        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
	        document.getElementById("color1-replace").innerHTML = userDataObj[0].color;
	        document.getElementById("category1-replace").innerHTML = userDataObj[0].category;
	        document.getElementById("brand1-replace").innerHTML = userDataObj[0].brand;
        }else{
			document.getElementById("item1-replace").innerHTML = "ItemName";
	        document.getElementById("price1-replace").innerHTML = "price";
	        document.getElementById("color1-replace").innerHTML = "color";
	        document.getElementById("category1-replace").innerHTML = "category";
	        document.getElementById("brand1-replace").innerHTML = "brand";
		}
	    if (userDataObj[1] != null){
	        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
	        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
	        document.getElementById("color2-replace").innerHTML = userDataObj[1].color;
	        document.getElementById("category2-replace").innerHTML = userDataObj[1].category;
	        document.getElementById("brand2-replace").innerHTML = userDataObj[1].brand;
        }else{
			document.getElementById("item2-replace").innerHTML = "ItemName";
	        document.getElementById("price2-replace").innerHTML = "price";
	        document.getElementById("color2-replace").innerHTML = "color";
	        document.getElementById("category2-replace").innerHTML = "category";
	        document.getElementById("brand2-replace").innerHTML = "brand";
		}
	    if (userDataObj[2] != null){
	        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
	        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
	        document.getElementById("color3-replace").innerHTML = userDataObj[2].color;
	        document.getElementById("category3-replace").innerHTML = userDataObj[2].category;
	        document.getElementById("brand3-replace").innerHTML = userDataObj[2].brand;
        }else{
			document.getElementById("item3-replace").innerHTML = "ItemName";
	        document.getElementById("price3-replace").innerHTML = "price";
	        document.getElementById("color3-replace").innerHTML = "mycolor";
	        document.getElementById("category3-replace").innerHTML = "category";
	        document.getElementById("brand3-replace").innerHTML = "brand";
		}
		if (userDataObj[3] != null){
	        document.getElementById("item4-replace").innerHTML = userDataObj[3].itemName;
	        document.getElementById("price4-replace").innerHTML = "$" + userDataObj[3].price;
	        document.getElementById("color4-replace").innerHTML = userDataObj[3].color;
	        document.getElementById("category4-replace").innerHTML = userDataObj[3].category;
	        document.getElementById("brand4-replace").innerHTML = userDataObj[3].brand;
        }else{
			document.getElementById("item4-replace").innerHTML = "ItemName";
	        document.getElementById("price4-replace").innerHTML = "price";
	        document.getElementById("color4-replace").innerHTML = "mycolor";
	        document.getElementById("category4-replace").innerHTML = "category";
	        document.getElementById("brand4-replace").innerHTML = "brand";
		}
		if (userDataObj[4] != null){
	        document.getElementById("item5-replace").innerHTML = userDataObj[4].itemName;
	        document.getElementById("price5-replace").innerHTML = "$" + userDataObj[4].price;
	        document.getElementById("color5-replace").innerHTML = userDataObj[4].color;
	        document.getElementById("category5-replace").innerHTML = userDataObj[4].category;
	        document.getElementById("brand5-replace").innerHTML = userDataObj[4].brand;
        }else{
			document.getElementById("item5-replace").innerHTML = "ItemName";
	        document.getElementById("price5-replace").innerHTML = "price";
	        document.getElementById("color5-replace").innerHTML = "mycolor";
	        document.getElementById("category5-replace").innerHTML = "category";
	        document.getElementById("brand5-replace").innerHTML = "brand";
		}
		if (userDataObj[5] != null){
	        document.getElementById("item6-replace").innerHTML = userDataObj[5].itemName;
	        document.getElementById("price6-replace").innerHTML = "$" + userDataObj[5].price;
	        document.getElementById("color6-replace").innerHTML = userDataObj[5].color;
	        document.getElementById("category6-replace").innerHTML = userDataObj[5].category;
	        document.getElementById("brand6-replace").innerHTML = userDataObj[5].brand;
        }else{
			document.getElementById("item6-replace").innerHTML = "ItemName";
	        document.getElementById("price6-replace").innerHTML = "price";
	        document.getElementById("color6-replace").innerHTML = "mycolor";
	        document.getElementById("category6-replace").innerHTML = "category";
	        document.getElementById("brand6-replace").innerHTML = "brand";
		}
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
      //target.textContent = data;// store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("no item has this color");
      } else {
        userDataObj = JSON.parse(data);
        if (userDataObj[0] != null){
	        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
	        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
	        document.getElementById("color1-replace").innerHTML = userDataObj[0].color;
	        document.getElementById("category1-replace").innerHTML = userDataObj[0].category;
	        document.getElementById("brand1-replace").innerHTML = userDataObj[0].brand;
        }else{
			document.getElementById("item1-replace").innerHTML = "ItemName";
	        document.getElementById("price1-replace").innerHTML = "price";
	        document.getElementById("color1-replace").innerHTML = "color";
	        document.getElementById("category1-replace").innerHTML = "category";
	        document.getElementById("brand1-replace").innerHTML = "brand";
		}
	    if (userDataObj[1] != null){
	        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
	        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
	        document.getElementById("color2-replace").innerHTML = userDataObj[1].color;
	        document.getElementById("category2-replace").innerHTML = userDataObj[1].category;
	        document.getElementById("brand2-replace").innerHTML = userDataObj[1].brand;
        }else{
			document.getElementById("item2-replace").innerHTML = "ItemName";
	        document.getElementById("price2-replace").innerHTML = "price";
	        document.getElementById("color2-replace").innerHTML = "color";
	        document.getElementById("category2-replace").innerHTML = "category";
	        document.getElementById("brand2-replace").innerHTML = "brand";
		}
	    if (userDataObj[2] != null){
	        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
	        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
	        document.getElementById("color3-replace").innerHTML = userDataObj[2].color;
	        document.getElementById("category3-replace").innerHTML = userDataObj[2].category;
	        document.getElementById("brand3-replace").innerHTML = userDataObj[2].brand;
        }else{
			document.getElementById("item3-replace").innerHTML = "ItemName";
	        document.getElementById("price3-replace").innerHTML = "price";
	        document.getElementById("color3-replace").innerHTML = "mycolor";
	        document.getElementById("category3-replace").innerHTML = "category";
	        document.getElementById("brand3-replace").innerHTML = "brand";
		}
		if (userDataObj[3] != null){
	        document.getElementById("item4-replace").innerHTML = userDataObj[3].itemName;
	        document.getElementById("price4-replace").innerHTML = "$" + userDataObj[3].price;
	        document.getElementById("color4-replace").innerHTML = userDataObj[3].color;
	        document.getElementById("category4-replace").innerHTML = userDataObj[3].category;
	        document.getElementById("brand4-replace").innerHTML = userDataObj[3].brand;
        }else{
			document.getElementById("item4-replace").innerHTML = "ItemName";
	        document.getElementById("price4-replace").innerHTML = "price";
	        document.getElementById("color4-replace").innerHTML = "mycolor";
	        document.getElementById("category4-replace").innerHTML = "category";
	        document.getElementById("brand4-replace").innerHTML = "brand";
		}
		if (userDataObj[4] != null){
	        document.getElementById("item5-replace").innerHTML = userDataObj[4].itemName;
	        document.getElementById("price5-replace").innerHTML = "$" + userDataObj[4].price;
	        document.getElementById("color5-replace").innerHTML = userDataObj[4].color;
	        document.getElementById("category5-replace").innerHTML = userDataObj[4].category;
	        document.getElementById("brand5-replace").innerHTML = userDataObj[4].brand;
        }else{
			document.getElementById("item5-replace").innerHTML = "ItemName";
	        document.getElementById("price5-replace").innerHTML = "price";
	        document.getElementById("color5-replace").innerHTML = "mycolor";
	        document.getElementById("category5-replace").innerHTML = "category";
	        document.getElementById("brand5-replace").innerHTML = "brand";
		}
		if (userDataObj[5] != null){
	        document.getElementById("item6-replace").innerHTML = userDataObj[5].itemName;
	        document.getElementById("price6-replace").innerHTML = "$" + userDataObj[5].price;
	        document.getElementById("color6-replace").innerHTML = userDataObj[5].color;
	        document.getElementById("category6-replace").innerHTML = userDataObj[5].category;
	        document.getElementById("brand6-replace").innerHTML = userDataObj[5].brand;
        }else{
			document.getElementById("item6-replace").innerHTML = "ItemName";
	        document.getElementById("price6-replace").innerHTML = "price";
	        document.getElementById("color6-replace").innerHTML = "mycolor";
	        document.getElementById("category6-replace").innerHTML = "category";
	        document.getElementById("brand6-replace").innerHTML = "brand";
		}
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
      //target.textContent = data;// store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("no item has this brand");
      } else {
        userDataObj = JSON.parse(data);
        if (userDataObj[0] != null){
	        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
	        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
	        document.getElementById("color1-replace").innerHTML = userDataObj[0].color;
	        document.getElementById("category1-replace").innerHTML = userDataObj[0].category;
	        document.getElementById("brand1-replace").innerHTML = userDataObj[0].brand;
        }else{
			document.getElementById("item1-replace").innerHTML = "ItemName";
	        document.getElementById("price1-replace").innerHTML = "price";
	        document.getElementById("color1-replace").innerHTML = "color";
	        document.getElementById("category1-replace").innerHTML = "category";
	        document.getElementById("brand1-replace").innerHTML = "brand";
		}
	    if (userDataObj[1] != null){
	        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
	        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
	        document.getElementById("color2-replace").innerHTML = userDataObj[1].color;
	        document.getElementById("category2-replace").innerHTML = userDataObj[1].category;
	        document.getElementById("brand2-replace").innerHTML = userDataObj[1].brand;
        }else{
			document.getElementById("item2-replace").innerHTML = "ItemName";
	        document.getElementById("price2-replace").innerHTML = "price";
	        document.getElementById("color2-replace").innerHTML = "color";
	        document.getElementById("category2-replace").innerHTML = "category";
	        document.getElementById("brand2-replace").innerHTML = "brand";
		}
	    if (userDataObj[2] != null){
	        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
	        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
	        document.getElementById("color3-replace").innerHTML = userDataObj[2].color;
	        document.getElementById("category3-replace").innerHTML = userDataObj[2].category;
	        document.getElementById("brand3-replace").innerHTML = userDataObj[2].brand;
        }else{
			document.getElementById("item3-replace").innerHTML = "ItemName";
	        document.getElementById("price3-replace").innerHTML = "price";
	        document.getElementById("color3-replace").innerHTML = "mycolor";
	        document.getElementById("category3-replace").innerHTML = "category";
	        document.getElementById("brand3-replace").innerHTML = "brand";
		}
		if (userDataObj[3] != null){
	        document.getElementById("item4-replace").innerHTML = userDataObj[3].itemName;
	        document.getElementById("price4-replace").innerHTML = "$" + userDataObj[3].price;
	        document.getElementById("color4-replace").innerHTML = userDataObj[3].color;
	        document.getElementById("category4-replace").innerHTML = userDataObj[3].category;
	        document.getElementById("brand4-replace").innerHTML = userDataObj[3].brand;
        }else{
			document.getElementById("item4-replace").innerHTML = "ItemName";
	        document.getElementById("price4-replace").innerHTML = "price";
	        document.getElementById("color4-replace").innerHTML = "mycolor";
	        document.getElementById("category4-replace").innerHTML = "category";
	        document.getElementById("brand4-replace").innerHTML = "brand";
		}
		if (userDataObj[4] != null){
	        document.getElementById("item5-replace").innerHTML = userDataObj[4].itemName;
	        document.getElementById("price5-replace").innerHTML = "$" + userDataObj[4].price;
	        document.getElementById("color5-replace").innerHTML = userDataObj[4].color;
	        document.getElementById("category5-replace").innerHTML = userDataObj[4].category;
	        document.getElementById("brand5-replace").innerHTML = userDataObj[4].brand;
        }else{
			document.getElementById("item5-replace").innerHTML = "ItemName";
	        document.getElementById("price5-replace").innerHTML = "price";
	        document.getElementById("color5-replace").innerHTML = "mycolor";
	        document.getElementById("category5-replace").innerHTML = "category";
	        document.getElementById("brand5-replace").innerHTML = "brand";
		}
		if (userDataObj[5] != null){
	        document.getElementById("item6-replace").innerHTML = userDataObj[5].itemName;
	        document.getElementById("price6-replace").innerHTML = "$" + userDataObj[5].price;
	        document.getElementById("color6-replace").innerHTML = userDataObj[5].color;
	        document.getElementById("category6-replace").innerHTML = userDataObj[5].category;
	        document.getElementById("brand6-replace").innerHTML = userDataObj[5].brand;
        }else{
			document.getElementById("item6-replace").innerHTML = "ItemName";
	        document.getElementById("price6-replace").innerHTML = "price";
	        document.getElementById("color6-replace").innerHTML = "mycolor";
	        document.getElementById("category6-replace").innerHTML = "category";
	        document.getElementById("brand6-replace").innerHTML = "brand";
		}
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
      //target.textContent = data;// store reponse in variable and convert to JSON object
      if (data.length == 0) {
        alert ("no item has this category");
      } else {
        userDataObj = JSON.parse(data);
        if (userDataObj[0] != null){
	        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
	        document.getElementById("price1-replace").innerHTML = "$" + userDataObj[0].price;
	        document.getElementById("color1-replace").innerHTML = userDataObj[0].color;
	        document.getElementById("category1-replace").innerHTML = userDataObj[0].category;
	        document.getElementById("brand1-replace").innerHTML = userDataObj[0].brand;
        }else{
			document.getElementById("item1-replace").innerHTML = "ItemName";
	        document.getElementById("price1-replace").innerHTML = "price";
	        document.getElementById("color1-replace").innerHTML = "color";
	        document.getElementById("category1-replace").innerHTML = "category";
	        document.getElementById("brand1-replace").innerHTML = "brand";
		}
	    if (userDataObj[1] != null){
	        document.getElementById("item2-replace").innerHTML = userDataObj[1].itemName;
	        document.getElementById("price2-replace").innerHTML = "$" + userDataObj[1].price;
	        document.getElementById("color2-replace").innerHTML = userDataObj[1].color;
	        document.getElementById("category2-replace").innerHTML = userDataObj[1].category;
	        document.getElementById("brand2-replace").innerHTML = userDataObj[1].brand;
        }else{
			document.getElementById("item2-replace").innerHTML = "ItemName";
	        document.getElementById("price2-replace").innerHTML = "price";
	        document.getElementById("color2-replace").innerHTML = "color";
	        document.getElementById("category2-replace").innerHTML = "category";
	        document.getElementById("brand2-replace").innerHTML = "brand";
		}
	    if (userDataObj[2] != null){
	        document.getElementById("item3-replace").innerHTML = userDataObj[2].itemName;
	        document.getElementById("price3-replace").innerHTML = "$" + userDataObj[2].price;
	        document.getElementById("color3-replace").innerHTML = userDataObj[2].color;
	        document.getElementById("category3-replace").innerHTML = userDataObj[2].category;
	        document.getElementById("brand3-replace").innerHTML = userDataObj[2].brand;
        }else{
			document.getElementById("item3-replace").innerHTML = "ItemName";
	        document.getElementById("price3-replace").innerHTML = "price";
	        document.getElementById("color3-replace").innerHTML = "mycolor";
	        document.getElementById("category3-replace").innerHTML = "category";
	        document.getElementById("brand3-replace").innerHTML = "brand";
		}
		if (userDataObj[3] != null){
	        document.getElementById("item4-replace").innerHTML = userDataObj[3].itemName;
	        document.getElementById("price4-replace").innerHTML = "$" + userDataObj[3].price;
	        document.getElementById("color4-replace").innerHTML = userDataObj[3].color;
	        document.getElementById("category4-replace").innerHTML = userDataObj[3].category;
	        document.getElementById("brand4-replace").innerHTML = userDataObj[3].brand;
        }else{
			document.getElementById("item4-replace").innerHTML = "ItemName";
	        document.getElementById("price4-replace").innerHTML = "price";
	        document.getElementById("color4-replace").innerHTML = "mycolor";
	        document.getElementById("category4-replace").innerHTML = "category";
	        document.getElementById("brand4-replace").innerHTML = "brand";
		}
		if (userDataObj[4] != null){
	        document.getElementById("item5-replace").innerHTML = userDataObj[4].itemName;
	        document.getElementById("price5-replace").innerHTML = "$" + userDataObj[4].price;
	        document.getElementById("color5-replace").innerHTML = userDataObj[4].color;
	        document.getElementById("category5-replace").innerHTML = userDataObj[4].category;
	        document.getElementById("brand5-replace").innerHTML = userDataObj[4].brand;
        }else{
			document.getElementById("item5-replace").innerHTML = "ItemName";
	        document.getElementById("price5-replace").innerHTML = "price";
	        document.getElementById("color5-replace").innerHTML = "mycolor";
	        document.getElementById("category5-replace").innerHTML = "category";
	        document.getElementById("brand5-replace").innerHTML = "brand";
		}
		if (userDataObj[5] != null){
	        document.getElementById("item6-replace").innerHTML = userDataObj[5].itemName;
	        document.getElementById("price6-replace").innerHTML = "$" + userDataObj[5].price;
	        document.getElementById("color6-replace").innerHTML = userDataObj[5].color;
	        document.getElementById("category6-replace").innerHTML = userDataObj[5].category;
	        document.getElementById("brand6-replace").innerHTML = userDataObj[5].brand;
        }else{
			document.getElementById("item6-replace").innerHTML = "ItemName";
	        document.getElementById("price6-replace").innerHTML = "price";
	        document.getElementById("color6-replace").innerHTML = "mycolor";
	        document.getElementById("category6-replace").innerHTML = "category";
	        document.getElementById("brand6-replace").innerHTML = "brand";
		}
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
              <Link to='/productsitem1/1' className="products-navlink">
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
                <p id="brand1-replace" className="brand1-text33">
                  brand
                </p>
                <p id="category1-replace" className="Category1-text33">
                  category
                </p>
                <p id="color1-replace" className="color1-text33">
                  color
                </p>
                </div>
              </Link>
              <Link to="/productsitem1/2" className="products-navlink1">
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
                <p id="brand2-replace" className="brand2-text33">
                  brand
                </p>
                <p id="category2-replace" className="Category2-text33">
                  category
                </p>
                <p id="color2-replace" className="color2-text33">
                  color
                </p>
                </div>
              </Link>
              <Link to="/productsitem1/3" className="products-navlink2">
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
                <p id="brand3-replace" className="brand3-text33">
                  brand
                </p>
                <p id="category3-replace" className="Category3-text33">
                  category
                </p>
                <p id="color3-replace" className="color3-text33">
                  color
                </p>
                </div>
              </Link>            
              <div className = "fouthitem">
                <img
                  src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                  alt="image"
                  className='fouthitemimage'
                />
                <p id="item4-replace" className="item4-text33">
                  ItemName
                </p>
                <p id="price4-replace" className="price4-text33">
                  price
                </p>
                <p id="brand4-replace" className="brand4-text33">
                  brand
                </p>
                <p id="category4-replace" className="Category4-text33">
                  category
                </p>
                <p id="color4-replace" className="color4-text33">
                  color
                </p>
               </div>
               <div className = "fifthitem">
                <img
                  src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                  alt="image"
                  className='fifthitemimage'
                />
                <p id="item5-replace" className="item5-text33">
                  ItemName
                </p>
                <p id="price5-replace" className="price5-text33">
                  price
                </p>
                <p id="brand5-replace" className="brand5-text33">
                  brand
                </p>
                <p id="category5-replace" className="Category5-text33">
                  category
                </p>
                <p id="color5-replace" className="color5-text33">
                  color
                </p>
               </div>
               <div className = "sixthitem">
                <img
                  src="https://images.unsplash.com/photo-1614715838608-dd527c46231d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDV8fGdsYXNzZXN8ZW58MHx8fHwxNjgwOTAzMDk1&amp;ixlib=rb-4.0.3&amp;w=1500"
                  alt="image"
                  className='sixthitemimage'
                />
                <p id="item6-replace" className="item6-text33">
                  ItemName
                </p>
                <p id="price6-replace" className="price6-text33">
                  price
                </p>
                <p id="brand6-replace" className="brand6-text33">
                  brand
                </p>
                <p id="category6-replace" className="Category6-text33">
                  category
                </p>
                <p id="color6-replace" className="color6-text33">
                  color
                </p>
               </div>
                <Link to={{
				  pathname: '/productsitem2',
				  state: {id: 1, name: 'sabaoon', shirt: 'green'}
				}} >Learn More</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name3"></Footer>
    </div>
  )
}

export default Products
