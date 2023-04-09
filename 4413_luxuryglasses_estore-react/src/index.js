import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


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
      {/* <div> */}
        <Routes>
          <Route path="/edit-first-name" element={<EditFirstName />} />
          <Route path="/monthlysale" element={<Monthlysale />} />
          <Route path="/webusage" element={<Webusage />} />
          <Route path="/checkout-payment" element={<CheckoutPayment />} />
          <Route path="/edit-email" element={<EditEmail />} />
          <Route path="/checkout-register" element={<CheckoutRegister />} />
          <Route path="/checkout-login" element={<CheckoutLogin />} />
          <Route path="/loginPage" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/productsitem3" element={<Productsitem3 />} />
          <Route path="/checkout-shipping" element={<CheckoutShipping />} />
          <Route path="/edit-password" element={<EditPassword />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/edit-last-name" element={<EditLastName />} />
          <Route path="/checkout-review" element={<CheckoutReview />} />
          <Route path="/productsitem2" element={<Productsitem2 />} />
          <Route path="/edit-use" element={<EditUser />} />
          <Route path="/productsitem1" element={<Productsitem1 />} />
          <Route path="/productsitem1/:itemId" element={<Productsitem1 />} />
          <Route path="/account" element={<Account />} />
          <Route path="/view-cart" element={<ViewCart />} />
        </Routes>
      {/* </div> */}
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
