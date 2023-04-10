import React from 'react'

import CartItemCard from '../components/cart-item-card'
import '../views/view-cart.css'

function CartItemsContainer({props}) {

  var cartDataObj;
  const numberOfItems = 2;

  function callApi() {
    alert("hello");

    var url="http://localhost:8080/cart/getAllItems";
    var request = new XMLHttpRequest(); // create a connection
    request.open('POST', url);
    request.send(); // send the http request
    request.onload = function() { // When the response comes invoke the following function
      let data = request.responseText; // store reponse in variable and convert to JSON object
      if (data.length != 0) {
        cartDataObj = JSON.parse(data);
        numberOfItems = cartDataObj[0].quantity;
      }
      alert(numberOfItems);
    }
  }


  // const numItemsDistinct = async(e) => {
  //   e.preventDefault();
  //   alert(numberOfItems);

  //   var url="http://localhost:8080/cart/getAllItems";
  //   var request = new XMLHttpRequest(); // create a connection
  //   request.open('POST', url);
  //   request.send(); // send the http request
  //   request.onload = function() { // When the response comes invoke the following function
  //     let data = request.responseText; // store reponse in variable and convert to JSON object
  //     if (data.length != 0) {
  //       cartDataObj = JSON.parse(data);
  //       numberOfItems = cartDataObj.length;
  //     }
  //     alert(numberOfItems);
  //   }
  // }

  return (
    <div onLoad={callApi()}>
      {[...Array(numberOfItems).keys()].map((key) => (
        <CartItemCard key={key}> </CartItemCard>
      ))}
    </div>
  );

  // return (
  //   <div>
  //     <CartItemCard></CartItemCard>
  //     <CartItemCard></CartItemCard>
  //     <p>{numItemsDistinct}</p>
  //   </div>
  // )
}

export default CartItemsContainer
