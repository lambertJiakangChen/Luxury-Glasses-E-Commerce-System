import React from 'react'
import PropTypes from 'prop-types'

import './cart-item-card.css'

function CartItemCard(props) {

  // HANDLE DISPLAY CART ITEMS ----------------------------------------------------------------------------------------

  const getItemDetailsAndDisplay = async(e) => {    
    e.preventDefault();

    callApiToDisplayItems();
  }

  function callApiToDisplayItems() {

    var url="http://localhost:8080/cart/getAllItems";
    var request = new XMLHttpRequest(); 
    request.open('POST', url);
    request.send();
    request.onload = function() { 
      let data = request.responseText; 

      let evelynCard = document.getElementsByClassName("cart-item-card")[0];
      let yomaryCard = document.getElementsByClassName("cart-item-card")[1];
      let cicelyCard = document.getElementsByClassName("cart-item-card")[2];

      // no items in cart
      evelynCard.style.display = 'none';
      yomaryCard.style.display = 'none';
      cicelyCard.style.display = 'none';

      if (data.length != 0) {
        // at least one item in cart
        var cartDataObj = JSON.parse(data);
        for (const item of Object.entries(cartDataObj)) {

          let evelyn = document.getElementsByClassName("cart-item-name-replace")[0];
          let yomary = document.getElementsByClassName("cart-item-name-replace")[1];
          let cicely = document.getElementsByClassName("cart-item-name-replace")[2];
          
          if (evelyn.innerHTML.includes(item[1].item.itemName)) {
            evelynCard.style.display = 'flex';
            document.getElementsByClassName("cart-item-price-replace")[0].innerHTML = "$" + item[1].totalPrice;
            document.getElementsByClassName("cart-item-quantity-replace")[0].innerHTML = "" + item[1].quantity;
          }

          if (yomary.innerHTML.includes(item[1].item.itemName)) {
            yomaryCard.style.display = 'flex';
            document.getElementsByClassName("cart-item-price-replace")[1].innerHTML = "$" + item[1].totalPrice;
            document.getElementsByClassName("cart-item-quantity-replace")[1].innerHTML = "" + item[1].quantity;
          }
          
          if (cicely.innerHTML.includes(item[1].item.itemName)) {
            cicelyCard.style.display = 'flex';
            document.getElementsByClassName("cart-item-price-replace")[2].innerHTML = "$" + item[1].totalPrice;
            document.getElementsByClassName("cart-item-quantity-replace")[2].innerHTML = "" + item[1].quantity;
          }
          
        }
      }
    }

  }

  // HANDLE REMOVE CART ITEMS ----------------------------------------------------------------------------------------

  function updateSubtotal() {
    var numberOfItems = 0;
    var total = 0.0;

    var url="http://localhost:8080/cart/getAllItems";
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      if (data.length == 0) {
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
  
  const removeCartItemHandler = async(e) => {    
    e.preventDefault();   
    
    removeCartItem();
  }

  function removeCartItem() {    
    var url="http://localhost:8080/cart/removeItem?item=" + props.itemName;
    var request = new XMLHttpRequest(); 
    request.open('POST', url);
    request.send();
    request.onload = function() { 
      let data = request.responseText; 

      if (data.includes("Removed from Cart")) {
        updateSubtotal();

        if (props.itemName.includes("Evelyn")) {
          document.getElementsByClassName("cart-item-card")[0].style.display = 'none';
        } 
        else if (props.itemName.includes("Yomary")) {
          document.getElementsByClassName("cart-item-card")[1].style.display = 'none';
        } 
        else if (props.itemName.includes("Cicely")) {
          document.getElementsByClassName("cart-item-card")[2].style.display = 'none';
        }

      } else {
        alert ("Error Occurred. Cannot remove from cart.");
      }
    }
  }

  // HANDLE EDIT CART ITEMS ------------------------------------------------------------------------------------------

  const decrementCartItemHandler = async(e) => {    
    e.preventDefault();

    let i = 0;
    if (props.itemName.includes("Yomary")) {
      i = 1;
    } else if (props.itemName.includes("Cicely")) {
      i = 2;
    }

    let newQty = parseInt(document.getElementsByClassName("cart-item-quantity-replace")[i].innerHTML) - 1;
    if (newQty < 0 || newQty == 0) {
      newQty = 0;
      removeCartItem();
      return;
    }

    var url="http://localhost:8080/cart/editItem?item=" + props.itemName + "&quantity=" + newQty;
    
    var request = new XMLHttpRequest(); 
    request.open('POST', url);
    request.send();
    request.onload = function() { 
      let data = request.responseText; 

      if (data.includes("Item Updated")) {
        updateSubtotal();
        callApiToDisplayItems();
        document.getElementsByClassName("cart-item-quantity-replace")[i].innerHTML = "" + newQty;
      } else {
        alert ("Error Occurred. Cannot update item");
      }
    }
  }

  const incrementCartItemHandler = async(e) => {    
    e.preventDefault();

    let i = 0;
    if (props.itemName.includes("Yomary")) {
      i = 1;
    } else if (props.itemName.includes("Cicely")) {
      i = 2;
    }

    let newQty = parseInt(document.getElementsByClassName("cart-item-quantity-replace")[i].innerHTML) + 1;

    var url="http://localhost:8080/cart/editItem?item=" + props.itemName + "&quantity=" + newQty;
    
    var request = new XMLHttpRequest(); 
    request.open('POST', url);
    request.send();
    request.onload = function() { 
      let data = request.responseText; 

      if (data.includes("Item Updated")) {
        updateSubtotal();
        callApiToDisplayItems();
        document.getElementsByClassName("cart-item-quantity-replace")[i].innerHTML = "" + newQty;
      } else {
        alert ("Error Occurred. Cannot update item");
      }
    }
  }

  // -----------------------------------------------------------------------------------------------------------------

  return (
    <div className="cart-item-card-container cart-item-card" onLoad={getItemDetailsAndDisplay}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="cart-item-card-image"
      />
      <p className="cart-item-card-text cart-item-name-replace">{props.itemName}</p>
      
      <form className="cart-item-card-form">
        <button className="cart-item-card-button button" onClick={decrementCartItemHandler}>
          {props.button}
        </button>
        
        <p className="cart-item-quantity-replace cart-item-card-textinput input">0</p>

        <button className="cart-item-card-button1 button" onClick={incrementCartItemHandler}>
          {props.button1}
        </button>
      </form>
      <p className="cart-item-price-replace">{props.text1}</p>
      <button className="cart-item-card-button2 button" onClick={removeCartItemHandler}>
        <svg
          viewBox="0 0 804.5714285714286 1024"
          className="cart-item-card-icon"
        >
          <path d="M292.571 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM438.857 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM585.143 420.571v329.143c0 10.286-8 18.286-18.286 18.286h-36.571c-10.286 0-18.286-8-18.286-18.286v-329.143c0-10.286 8-18.286 18.286-18.286h36.571c10.286 0 18.286 8 18.286 18.286zM658.286 834.286v-541.714h-512v541.714c0 27.429 15.429 43.429 18.286 43.429h475.429c2.857 0 18.286-16 18.286-43.429zM274.286 219.429h256l-27.429-66.857c-1.714-2.286-6.857-5.714-9.714-6.286h-181.143c-3.429 0.571-8 4-9.714 6.286zM804.571 237.714v36.571c0 10.286-8 18.286-18.286 18.286h-54.857v541.714c0 62.857-41.143 116.571-91.429 116.571h-475.429c-50.286 0-91.429-51.429-91.429-114.286v-544h-54.857c-10.286 0-18.286-8-18.286-18.286v-36.571c0-10.286 8-18.286 18.286-18.286h176.571l40-95.429c11.429-28 45.714-50.857 76-50.857h182.857c30.286 0 64.571 22.857 76 50.857l40 95.429h176.571c10.286 0 18.286 8 18.286 18.286z"></path>
        </svg>
      </button>
    </div>
  )
}

CartItemCard.defaultProps = {
  image_alt: 'image',
  button: '--',
  button1: '+',
  textinput_placeholder: '1',
  text1: '$0.00',
  text: '(REPLACE ITEM NAME HERE) ',
  image_src: '/playground_assets/image-not-available-300w.png',
}

CartItemCard.propTypes = {
  image_alt: PropTypes.string,
  button: PropTypes.string,
  button1: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  image_src: PropTypes.string,
}

export default CartItemCard
