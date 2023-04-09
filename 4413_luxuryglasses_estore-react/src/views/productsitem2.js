import React from 'react'
import { useLocation, Link } from "react-router-dom";
import { Helmet } from 'react-helmet'
import {useNavigate} from 'react-router-dom';
import Navbar from '../components/navbar'
import Tryon from '../components/tryon'
import AddReview from '../components/add-review'
import SingleReviewCard from '../components/single-review-card'
import Footer from '../components/footer'
import './productsitem2.css'

const Productsitem2 = (props) => {
  var userDataObj;
  const navigate = useNavigate();

  const submitAddToCartHandler = async(e) => {
    e.preventDefault();

    let itemName = document.getElementById("item-name").innerHTML;

    var url="http://localhost:8080/cart/addItem?item=" + itemName;
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      if (data.includes("Added to Cart")) {
        alert(data);
      } else {
        alert("Error occurred: " + data);
      }
    }
    }

//  Recommand by color --------------------------------------------------------------------------
	const recommandbycolor = async(e) => {	  
		e.preventDefault();		
		const target = document.querySelector('#Ajaxresult');
		const target2 = document.querySelector('#Hi');
	    var url="http://localhost:8080/catalog/recommendItems?by=color";
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
	        navigate('/productsitem2');
	      }
	    }
	  }
  //  Recommand by color --------------------------------------------------------------------------
	const recommandbycate = async(e) => {	  
		
		const target = document.querySelector('#Ajaxresult');
		const target2 = document.querySelector('#Hi');
	    var url="http://localhost:8080/catalog/recommendItems?by=category";
	    var request = new XMLHttpRequest(); // create a connection
	    request.open('POST', url);
	    request.send(); // send the http request
	    request.onload = function() { // When the response comes invoke the following function
	      let data = request.responseText; 
	      //target.textContent = "Test output " + JSON.parse(data)[0].itemName;// store reponse in variable and convert to JSON object
	      if (data.length == 0) {
	        alert ("Item not found");
	      } else {
	        userDataObj = JSON.parse(data);
	         if (userDataObj[0] != null){
		        document.getElementById("item1-replace").innerHTML = userDataObj[0].itemName;
		        //target2.textContent = "by category";
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
	        navigate('/productsitem2');
	      }
	    }
 }
  
  return (
    <div className="productsitem2-container">
      <Helmet>
        <title>Productsitem2 - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="Productsitem2 - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="productsitem2-main">
        <div className="productsitem2-container1">
          <div className="productsitem2-container2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="productsitem2-image"
            />
            <div className="productsitem2-container3">
              <h1 className="productsitem1-text" id="item-name"> 
               Yomary            		
              </h1>
              <p id="item-id-2">2</p>
              <p className="productsitem2-text01">
                Brand:Carrera  Material:TR90  Shape: Cat eye
              </p>
              <h2 className="productsitem2-text02">$25.95</h2>
              <form className="productsitem2-form" onSubmit={submitAddToCartHandler}>
                <button type="submit" className="productsitem2-button button">
                  ADD TO CART
                </button>            
              </form>         		        
              <p className="productsitem2-text03">
                <span className="productsitem2-text04">SPECIFICATIONS</span>
                <br className="productsitem2-text05"></br>
                <span className="productsitem2-text06">size:Wide</span>
                <br className="productsitem2-text07"></br>
                <span className="productsitem2-text08">weight:12.0</span>
                <br className="productsitem2-text09"></br>
                <span className="productsitem2-text10">lenswidth:140.0</span>
                <br className="productsitem2-text11"></br>
                <span className="productsitem2-text12">lensheight:56.0</span>
                <br className="productsitem2-text13"></br>
                <span className="productsitem2-text14">framwidth:37.0</span>
                <br></br>
              </p>             
              <p className="productsitem2-text16">Color:</p>
              <div className="productsitem2-container4">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1611242320536-f12d3541249b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxyZWR8ZW58MHx8fHwxNjgwMzkwMjY3&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="productsitem2-image1"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGJsdWV8ZW58MHx8fHwxNjgwMzI1MzYz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="productsitem2-image2"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHllbGxvd3xlbnwwfHx8fDE2ODAzOTA0MDA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="productsitem2-image3"
                />
              </div>
              <p className="productsitem2-text17">
                <span>Category:</span>
                <br></br>
                <span>full-frame   semi-rimless  rimless</span>
                <br></br>
              </p>
            </div>
          </div>
          <Tryon></Tryon>
        </div>
        <button type="submit" className="button" onClick = {recommandbycolor}>
            by color
        </button>
        <button type="submit" className="button" onClick = {recommandbycate}>
            by category
        </button>
 
        <div id="Ajaxresult"></div>
        <div id="Hi"></div>
        <div className="productsitem2-container5">
          <h2 className="productsitem2-text22">Recommend watches</h2>
        </div>
        <div className="productsitem2-container6">
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
        </div>
        <div className="productsitem2-container7 item-reviews-all">
          <h1 className="reviews-title">Reviews</h1>
          <AddReview></AddReview>
          <SingleReviewCard></SingleReviewCard>
          <SingleReviewCard></SingleReviewCard>
          <SingleReviewCard></SingleReviewCard>
          <SingleReviewCard></SingleReviewCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Productsitem2
