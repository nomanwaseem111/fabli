import React, { useState, useEffect } from "react";
import Slides1 from "../assets/images/slides/slider-mainbg-001.jpg";
import Slides2 from "../assets/images/slides/slider-mainbg-001.jpg";
import Slides3 from "../assets/images/slides/slider-mainbg-002.jpg";
const Banner = () => {
  return (
    <>
      <div className="banner_slider_wrapper">
        <div className="slider-textarea">
          <h4>Enquiry Call: 123 456 789123</h4>
        </div>
        <div className="slider-social-links-wrapper">
          <ul className="social-icons">
            <li className="tm-social-facebook">
              <a target="_blank" href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li className="tm-social-twitter">
              <a target="_blank" href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="tm-social-flickr">
              <a target="_blank" href="#">
                <i className="fa fa-flickr"></i>
              </a>
            </li>
            <li className="tm-social-linkedin">
              <a target="_blank" href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="banner_slider banner_slider_wide">
          <div className="slide">
            <img className="slide_img" src={Slides1} alt="slides" />
            <img className="slide_img" src={Slides2} alt="slides" />

            <div className="slide__content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slide__content--headings ttm-textcolor-white text-center">
                      <h3 data-animation="fadeInDown">YOU CAN TRUST US</h3>
                      <h2 data-animation="fadeInDown">
                        Wear <strong>Your</strong> Best <strong>Moments</strong>
                      </h2>
                      <p data-animation="fadeInDown">
                        Since more than 40 years, FABLIO is operating in the
                        textile market manufacture <br />
                        and trader. As years go by, the range of produced.
                      </p>
                      <div
                        className="d-inline-block margin_top30 res-767-margin_top20"
                        data-animation="fadeInUp"
                        data-delay="1.4"
                      >
                        <a
                          className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor margin_right15"
                          href="about-us-2.html"
                        >
                          more details
                        </a>
                        <a
                          className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white"
                          href="contact-us.html"
                        >
                          get a quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="slide">
            <img className="slide_img" src={Slides3} alt="slides" />

            <div className="slide__content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="slide__content--headings ttm-textcolor-white text-center">
                      <h3 data-animation="fadeInDown">WELCOME TO FABLIO</h3>
                      <h2 data-animation="fadeInDown">
                        The <strong> Possibilities</strong> Are Endless
                      </h2>
                      <p data-animation="fadeInDown">
                        Since more than 40 years, FABLIO is operating in the
                        textile market manufacture <br />
                        and trader. As years go by, the range of produced.
                      </p>
                      <div
                        className="d-inline-block margin_top30 res-767-margin_top25"
                        data-animation="fadeInUp"
                        data-delay="1.4"
                      >
                        <a
                          className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                          href="about-us-2.html"
                        >
                          more detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
