import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className={`footer-footer ${props.rootClassName} `}>
      <div className="footer-max-width max-width-container">
        <footer className="footer-footer1">
          <div className="footer-container">
            <h3 className="footer-text Heading-3">{props.heading}</h3>
            <span className="footer-text01">
              <span className="">
                4700 Keele St, Toronto, ON  M3J 1P3,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="">Canada</span>
              <br className=""></br>
            </span>
            <span className="footer-text05">{props.text}</span>
            <span className="footer-text06">{props.text1}</span>
          </div>
          <div className="footer-links-container">
            <div className="footer-container1">
              <span className="footer-text07">{props.text2}</span>
              <a
                href="http://localhost:8080/catalog/filterByBrand?brand=Carrera"
                className="footer-link"
              >
                {props.text3}
              </a>
              <a
                href="http://localhost:8080/catalog/filterByCategory?cate=men"
                className="footer-link1"
              >
                {props.text4}
              </a>
              <a
                href="http://localhost:8080/catalog/filterByCategory?cate=women"
                className="footer-link2"
              >
                {props.text5}
              </a>
              <a
                href="http://localhost:8080/catalog/filterByCategory?cate=rimless"
                className="footer-link3"
              >
                {props.text6}
              </a>
              <a
                href="http://localhost:8080/catalog/filterByCategory?cate=sunglasses"
                className="footer-link4"
              >
                {props.text7}
              </a>
              <a
                href="http://localhost:8080/catalog/filterByColor?color=green"
                className="footer-link5"
              >
                {props.text8}
              </a>
            </div>
            <div className="footer-container2">
              <span className="footer-text08">{props.text9}</span>
              <Link to="/products" className="footer-navlink">
                {props.text10}
              </Link>
              <span className="footer-text09">{props.text11}</span>
              <span className="footer-text10">{props.text12}</span>
              <a href="#aboutus" className="footer-link6">
                {props.text13}
              </a>
              <span className="footer-text11">{props.text14}</span>
            </div>
            <div className="footer-container3">
              <span className="footer-text12">{props.text15}</span>
              <a href="#chatbot" className="footer-link7">
                {props.text16}
              </a>
              <a href="#chatbot" className="footer-link8">
                {props.text161}
              </a>
              <Link to="/view-cart" className="footer-navlink1">
                {props.text17}
              </Link>
              <Link to="/monthlysale" className="footer-navlink2">
                {props.text18}
              </Link>
              <Link to="/webusage" className="footer-navlink3">
                {props.text181}
              </Link>
              <span className="footer-text13">{props.text19}</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

Footer.defaultProps = {
  text10: 'Shop',
  text4: 'Men',
  text3: 'Brand',
  text16: 'Contact us',
  text9: 'Company',
  text161: 'Chat Bot',
  text11: 'Lookbook',
  text13: 'About',
  text19: 'Shipping & Delivery',
  text18: 'Monthly sold items',
  text1: 'hello@luxlens.com',
  text7: 'Sunglasses',
  rootClassName: '',
  heading: 'LUX LENS',
  text12: 'Specials',
  text8: 'Color',
  text2: 'Categories',
  text15: 'Resources',
  text: '(647) 123-4567',
  text181: 'webusage',
  text17: 'Cart',
  text14: 'Blog',
  text5: 'Women',
  text6: 'Rimless',
}

Footer.propTypes = {
  text10: PropTypes.string,
  text4: PropTypes.string,
  text3: PropTypes.string,
  text16: PropTypes.string,
  text9: PropTypes.string,
  text161: PropTypes.string,
  text11: PropTypes.string,
  text13: PropTypes.string,
  text19: PropTypes.string,
  text18: PropTypes.string,
  text1: PropTypes.string,
  text7: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  text12: PropTypes.string,
  text8: PropTypes.string,
  text2: PropTypes.string,
  text15: PropTypes.string,
  text: PropTypes.string,
  text181: PropTypes.string,
  text17: PropTypes.string,
  text14: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
}

export default Footer
