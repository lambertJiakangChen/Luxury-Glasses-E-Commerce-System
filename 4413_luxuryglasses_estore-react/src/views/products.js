import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import ItemCard from '../components/item-card'
import Footer from '../components/footer'
import './products.css'

const Products = (props) => {
  return (
    <div className="products-container">
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
            placeholder="Enter an item name"
            className="products-input input"
          />
          <button type="submit" className="products-button button">
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
                  id="price-sort-asc"
                  name="search"
                  value="ascending"
                  className="products-checkbox"
                />
                <label>ascending</label>
              </div>
              <div className="products-container05">
                <input
                  type="checkbox"
                  id="price-sort-des"
                  name="sort"
                  value="descending"
                  className="products-checkbox1"
                />
                <label>descending</label>
              </div>
              <button type="submit" className="button">
                Go
              </button>
            </form>
          </div>
          <div className="products-container06">
            <h1 className="products-text3">Name</h1>
            <form className="products-form2">
              <div className="products-container07">
                <input
                  type="checkbox"
                  id="name-sort-asc"
                  name="sort"
                  value="ascending"
                  className="products-checkbox2"
                />
                <label>ascending</label>
              </div>
              <div className="products-container08">
                <input
                  type="checkbox"
                  id="name-sort-des"
                  name="sort"
                  value="descending"
                  className="products-checkbox3"
                />
                <label>descending</label>
              </div>
            </form>
          </div>
          <div className="products-container09">
            <form className="products-form3">
              <div className="products-container10"></div>
              <div className="products-container11">
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
                </div>
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
                </div>
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
                  <label className="products-text8">filter by Category</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="products-container15">
          <div className="products-container16">
            <div className="products-items">
              <Link to="/productsitem1" className="products-navlink">
                <ItemCard
                  image_src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdhdGNofGVufDB8fHx8MTY4MDM2Nzk4MA&amp;ixlib=rb-4.0.3&amp;w=1500"
                  rootClassName="item-card-root-class-name29"
                  className="products-component1"
                ></ItemCard>
              </Link>
              <Link to="/productsitem2" className="products-navlink1">
                <ItemCard
                  name="item2"
                  rootClassName="item-card-root-class-name27"
                  className="products-component2"
                ></ItemCard>
              </Link>
              <Link to="/productsitem3" className="products-navlink2">
                <ItemCard
                  name="item3"
                  image_src="https://images.unsplash.com/photo-1590312261344-59437f04f9ac?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwOXx8d2F0Y2h8ZW58MHx8fHwxNjgwMzcyNTAy&amp;ixlib=rb-4.0.3&amp;w=1500"
                  rootClassName="item-card-root-class-name26"
                  className="products-component3"
                ></ItemCard>
              </Link>
              <ItemCard
                name="item3"
                image_src="https://images.unsplash.com/photo-1590312261344-59437f04f9ac?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwOXx8d2F0Y2h8ZW58MHx8fHwxNjgwMzcyNTAy&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="item-card-root-class-name22"
                className="products-component4"
              ></ItemCard>
              <ItemCard
                name="item3"
                image_src="https://images.unsplash.com/photo-1590312261344-59437f04f9ac?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwOXx8d2F0Y2h8ZW58MHx8fHwxNjgwMzcyNTAy&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="item-card-root-class-name23"
                className="products-component5"
              ></ItemCard>
              <ItemCard
                name="item3"
                image_src="https://images.unsplash.com/photo-1590312261344-59437f04f9ac?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwOXx8d2F0Y2h8ZW58MHx8fHwxNjgwMzcyNTAy&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="item-card-root-class-name24"
                className="products-component6"
              ></ItemCard>
              <ItemCard
                name="item3"
                image_src="https://images.unsplash.com/photo-1590312261344-59437f04f9ac?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwOXx8d2F0Y2h8ZW58MHx8fHwxNjgwMzcyNTAy&amp;ixlib=rb-4.0.3&amp;w=1500"
                rootClassName="item-card-root-class-name25"
                className="products-component7"
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
