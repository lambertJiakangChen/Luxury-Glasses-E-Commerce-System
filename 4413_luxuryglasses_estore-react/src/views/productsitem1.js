import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Tryon from '../components/tryon'
import SingleReviewCard from '../components/single-review-card'
import Footer from '../components/footer'
import './productsitem1.css'

const Productsitem1 = (props) => {
  return (
    <div className="productsitem1-container">
      <Helmet>
        <title>Productsitem1 - 4413_LuxuryGlasses_EStore</title>
        <meta
          property="og:title"
          content="Productsitem1 - 4413_LuxuryGlasses_EStore"
        />
      </Helmet>
      <Navbar></Navbar>
      <div className="productsitem1-main">
        <div className="productsitem1-container1">
          <div className="productsitem1-container2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="productsitem1-image"
            />
            <div className="productsitem1-container3">
              <h1 className="productsitem1-text">
                Citizen Promaster Fugu Dive Automatic(item1)
              </h1>
              <p className="productsitem1-text01">
                Brand:Evelyn   Material:TR90  Shape: Cat eye
              </p>
              <h2 className="productsitem1-text02">$99999</h2>
              <form className="productsitem1-form">
                <Link
                  to="/checkout-login"
                  className="productsitem1-button button"
                >
                  ADD TO CART
                </Link>
              </form>
              <p className="productsitem1-text03">
                <span className="productsitem1-text04">SPECIFICATIONS</span>
                <br className="productsitem1-text05"></br>
                <span className="productsitem1-text06">size:15.0</span>
                <br className="productsitem1-text07"></br>
                <span className="productsitem1-text08">weight:20.0</span>
                <br className="productsitem1-text09"></br>
                <span className="productsitem1-text10">lenswidth:12.0</span>
                <br className="productsitem1-text11"></br>
                <span className="productsitem1-text12">lensheight:56.0</span>
                <br className="productsitem1-text13"></br>
                <span className="productsitem1-text14">framwidth:37.0</span>
                <br></br>
              </p>
              <p className="productsitem1-text16">Color:</p>
              <div className="productsitem1-container4">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1611242320536-f12d3541249b?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxyZWR8ZW58MHx8fHwxNjgwMzkwMjY3&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="productsitem1-image1"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1588421357574-87938a86fa28?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGJsdWV8ZW58MHx8fHwxNjgwMzI1MzYz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="productsitem1-image2"
                />
                <img
                  alt="image"
                  src="https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHllbGxvd3xlbnwwfHx8fDE2ODAzOTA0MDA&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="productsitem1-image3"
                />
              </div>
              <p className="productsitem1-text17">
                <span>Category:</span>
                <br></br>
                <span>full-frame   semi-rimless  rimless</span>
                <br></br>
              </p>
            </div>
          </div>
          <Tryon></Tryon>
        </div>
        <div className="productsitem1-container5">
          <h2 className="productsitem1-text22">Recommend watches</h2>
        </div>
        <div className="productsitem1-container6">
          <div className="productsitem1-gallery-card">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="productsitem1-image4"
            />
            <h2 className="productsitem1-text23">item2</h2>
            <span className="productsitem1-text24">$9999</span>
          </div>
          <div className="productsitem1-gallery-card1">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="productsitem1-image5"
            />
            <h2 className="productsitem1-text25">item3</h2>
            <span className="productsitem1-text26">$9999</span>
          </div>
          <div className="productsitem1-gallery-card2">
            <img
              alt="image"
              src="https://play.teleporthq.io/static/svg/default-img.svg"
              className="productsitem1-image6"
            />
            <h2 className="productsitem1-text27">item4</h2>
            <span className="productsitem1-text28">$9999</span>
          </div>
        </div>
        <div className="productsitem1-container7 item-reviews-all">
          <h1 className="reviews-title">Reviews</h1>
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

export default Productsitem1
