import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import EditFirstName from './views/edit-first-name'
import Monthlysale from './views/monthlysale'
import Webusage from './views/webusage'
import CheckoutPayment from './views/checkout-payment'
import EditEmail from './views/edit-email'
import CheckoutRegister from './views/checkout-register'
import CheckoutLogin from './views/checkout-login'
import Login from './views/login'
import Home from './views/home'
import Productsitem3 from './views/productsitem3'
import CheckoutShipping from './views/checkout-shipping'
import EditPassword from './views/edit-password'
import Products from './views/products'
import EditLastName from './views/edit-last-name'
import CheckoutReview from './views/checkout-review'
import Productsitem2 from './views/productsitem2'
import EditUser from './views/edit-user'
import Productsitem1 from './views/productsitem1'
import Account from './views/account'
import ViewCart from './views/view-cart'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={EditFirstName} exact path="/edit-first-name" />
        <Route component={Monthlysale} exact path="/monthlysale" />
        <Route component={Webusage} exact path="/webusage" />
        <Route component={CheckoutPayment} exact path="/checkout-payment" />
        <Route component={EditEmail} exact path="/edit-email" />
        <Route component={CheckoutRegister} exact path="/checkout-register" />
        <Route component={CheckoutLogin} exact path="/checkout-login" />
        <Route component={Login} exact path="/login" />
        <Route component={Home} exact path="/" />
        <Route component={Productsitem3} exact path="/productsitem3" />
        <Route component={CheckoutShipping} exact path="/checkout-shipping" />
        <Route component={EditPassword} exact path="/edit-password" />
        <Route component={Products} exact path="/products" />
        <Route component={EditLastName} exact path="/edit-last-name" />
        <Route component={CheckoutReview} exact path="/checkout-review" />
        <Route component={Productsitem2} exact path="/productsitem2" />
        <Route component={EditUser} exact path="/edit-user" />
        <Route component={Productsitem1} exact path="/productsitem1" />
        <Route component={Account} exact path="/account" />
        <Route component={ViewCart} exact path="/view-cart" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
