import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import CartEmpty from '../components/cart-empty'
import CartItemCard from '../components/cart-item-card'
import Footer from '../components/footer'
import './view-cart.css'
import '../components/cart-empty.css'

function ViewCart(props) {

  const getNumberOfItemsAndTotal = async(e) => {
    var numberOfItems = 0;
    var total = 0.0;
    e.preventDefault();

    var url="http://localhost:8080/cart/getAllItems";
    var request = new XMLHttpRequest(); 
    request.open('POST', url);
    request.send(); 
    request.onload = function() {
      let data = request.responseText; 
      if (data.length == 0) {
        document.getElementsByClassName("cart-empty-container")[0].style.display = 'flex';
        document.getElementsByClassName("view-cart-container2")[0].style.display = 'none';
        document.getElementById("title-subtotal").innerHTML = "SUBTOTAL (0)";
        document.getElementById("subtotal-replace").innerHTML = "$0.0"
      } else {
        var cartDataObj = JSON.parse(data);

        for (const item of Object.entries(cartDataObj)) {
          numberOfItems += item[1].quantity;
          total += item[1].totalPrice;
        }
        document.getElementById("title-subtotal").innerHTML = "SUBTOTAL (" + numberOfItems + ")";
        document.getElementById("subtotal-replace").innerHTML = "$" + total;
      }
    }
  }

  return (
    <div className="view-cart-container" onLoad={getNumberOfItemsAndTotal}>
      <Helmet>
        <title>ViewCart - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="ViewCart - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="view-cart-main">
        <div className="view-cart-container1 section-container">
          <h1 id="title-cart" className="view-cart-text">
            SHOPPING CART
          </h1>
          
          {/* Cart Empty */}
          <CartEmpty rootClassName="cart-empty-root-class-name"></CartEmpty>
          {/* ........... */}

          <div className="view-cart-container2">
            <div id="cart-all-items" className="view-cart-container3">
              <CartItemCard 
                itemName={'Evelyn'}
              />
              <CartItemCard 
                itemName={'Yomary'}
              />
              <CartItemCard 
                itemName={'Cicely'}
              />
            </div>
            <div id="cart-total" className="view-cart-container4">
              <h3 id="title-subtotal">SUBTOTAL</h3>
              <p id="subtotal-replace" className="view-cart-text2">
                $
              </p>
              <Link
                to="/checkout-login"
                id="checkout-btn"
                name="checkout"
                className="view-cart-navlink button"
              >
                CHECKOUT
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default ViewCart
