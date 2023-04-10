import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import SectionHeading from '../components/section-heading'
import CategoryCard from '../components/category-card'
import ItemCard from '../components/item-card'
import ChatBot from '../components/chat-bot'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>4413_LuxuryGlasses_EStore</title>
        <meta property="og:title" content="4413_LuxuryGlasses_EStore" />
      </Helmet>
      <Navbar></Navbar>
      <div className="home-main">
        <div id="shop_cateye" className="home-cat-eye section-container">
          <div className="home-max-width max-width-container">
            <div className="home-hero">
              <div className="home-container1">
                <div className="home-container2">
                  <div className="home-container3">
                    <div className="home-info">
                      <img
                        alt="Rectangle43271305"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMicgaGVpZ2h0PSc1Micgdmlld0JveD0nMCAwIDIgNTInIGZpbGw9J25vbmUnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc+CjxyZWN0IHdpZHRoPScyJyBoZWlnaHQ9JzUyJyBmaWxsPSdibGFjaycgZmlsbC1vcGFjaXR5PScwLjUnLz4KPC9zdmc+Cg=="
                        className="home-image"
                      />
                      <span className="home-text">CAT EYE GLASSES</span>
                    </div>
                    <h1 className="home-text01">EVELYN</h1>
                    <div className="home-container4">
                      <span className="home-text02">$22.95</span>
                    </div>
                    <div className="home-btn-group">
                      <a
                        href="http://localhost:8080/catalog/filterByCategory?cate=Cat eye"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="home-link button"
                      >
                        Explore the Cat Eye Collection
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="home-image1">
                <img
                  alt="image"
                  src="/playground_assets/evelyn-bg-1500w.png"
                  className="home-image2"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="shop_category" className="section-container column">
          <div className="max-width-container">
            <SectionHeading
              heading="SHOP BY CATEGORIES"
              subtitle="Start shopping based on the categories you are interested in"
            ></SectionHeading>
            <div className="home-cards-container">
              <a
                href="http://localhost:8080/catalog/filterByBrand?brand=Oakley"
                className="home-link1"
              >
                <CategoryCard
                  name="Oakley Brand"
                  image_src="/playground_assets/cicely-bg-1500w.png"
                  className="home-component02"
                ></CategoryCard>
              </a>
              <a
                href="http://localhost:8080/catalog/filterByCategory?cate=men"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <CategoryCard
                  name="Men"
                  image_src="/playground_assets/yomary2-bg-1500w.png"
                  className="home-component03"
                ></CategoryCard>
              </a>
              <a
                href="http://localhost:8080/catalog/filterByCategory?cate=women"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <CategoryCard
                  name="Women"
                  image_src="/playground_assets/yomary-bg-1500w.png"
                  category_img="/playground_assets/evelyn-200h.jpg"
                  className="home-component04"
                ></CategoryCard>
              </a>
              <a
                href="http://localhost:8080/catalog/filterByCategory?cate=rimless"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <CategoryCard
                  name="Rimless"
                  image_src="/playground_assets/evelyn-bg-1500w.png"
                  category_img="/playground_assets/evelyn-200h.jpg"
                  className="home-component05"
                ></CategoryCard>
              </a>
              <a
                href="http://localhost:8080/catalog/filterByCategory?cate=sunglasses"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <CategoryCard
                  name="Sunglasses"
                  image_src="/playground_assets/litisha-bg-1500w.png"
                  category_img="/playground_assets/litisha-bg-1500w.png"
                  className="home-component06"
                ></CategoryCard>
              </a>
              <a
                href="http://localhost:8080/catalog/filterByColor?color=green"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <CategoryCard
                  name="Color"
                  image_alt="ace"
                  image_src="/playground_assets/ace-bg-1500w.png"
                  category_img="/playground_assets/ace-200h.jpg"
                  className="home-component07"
                ></CategoryCard>
              </a>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-luxlens-logo">
            <h3 className="home-text03 Heading-3">LUX LENS</h3>
            <span className="home-text04">glasses</span>
          </div>
        </div>
        <div id="aboutus" className="home-about-us max-width-container">
          <div id="abuts_description" className="home-about-us-description">
            <img
              alt="luxlens"
              src="/playground_assets/luxlens.svg"
              className="home-svg"
            />
            <SectionHeading
              heading="ABOUT US"
              subtitle="Lux Lens is your ultimate destination for luxury eyewear."
            ></SectionHeading>
            <span className="home-text05">
              <span>
                {' '}
                We are dedicated to bringing you the most exquisite collection
                of glasses from the world&apos;s most renowned brands. Each pair
                of glasses were selected ensuring that they are not only stylish
                but also of the highest quality.
              </span>
              <br></br>
              <br></br>
              <span>
                Our commitment to excellence extends beyond our product
                offerings. We pride ourselves on providing exceptional customer
                service, ensuring that every customer has a personalized and
                enjoyable shopping experience. Our knowledgeable staff is always
                on hand to help you find the perfect pair of glasses, answer any
                questions you may have, and provide you with the latest fashion
                trends.
              </span>
              <br></br>
            </span>
          </div>
        </div>
        <div
          id="recommendations"
          className="home-recommendations section-container"
        >
          <div className="max-width-container">
            <SectionHeading></SectionHeading>
            <div id="gallery" className="home-gallery">
              <div className="home-left">
                  <ItemCard
                    name="Evelyn"
                    itemId="1"
                    value="22.95"
                    image_alt="evelyn"
                    image_src="/playground_assets/evelyn-bg-1500w.png"
                    rootClassName="rootClassName4"
                    className="home-component10"
                  ></ItemCard>
              </div>
              <div className="home-right">
                <div className="home-top">
                  <div className="home-left1">
                      <ItemCard
                        name="Yomary"
                        itemId="2"
                        value="25.95"
                        image_alt="yomary"
                        image_src="/playground_assets/yomary-bg-1500w.png"
                        rootClassName="rootClassName2"
                        className="home-component11"
                      ></ItemCard>
                  </div>
                  <div className="home-right1">
                      <ItemCard
                        name="Ace"
                        itemId="5"
                        value="35.95"
                        image_alt="ace"
                        image_src="/playground_assets/ace-bg-1500w.png"
                        rootClassName="rootClassName3"
                        className="home-component12"
                      ></ItemCard>
                  </div>
                </div>
                <div className="home-bottom">
                  <div className="home-left2">
                      <ItemCard
                        name="Litisha"
                        itemId="6"
                        value="28.98"
                        image_alt="litisha"
                        image_src="/playground_assets/litisha-bg-1500w.png"
                        rootClassName="item-card-root-class-name1"
                        className="home-component13"
                      ></ItemCard>
                  </div>
                  <div className="home-right2">
                      <ItemCard
                        name="Cicely"
                        itemId="3"
                        value="15.00"
                        image_alt="cicely"
                        image_src="/playground_assets/cicely-bg-1500w.png"
                        rootClassName="item-card-root-class-name6"
                        className="home-component14"
                      ></ItemCard>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            href="http://localhost:8080/catalog/recommendItems?by=color"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link7 button"
          >
            <span>View Recommendations by Color</span>
          </a>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
