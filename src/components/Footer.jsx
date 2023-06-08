import React from "react";
import blogImg1 from "../assets/images/blog/blog-02-600x430.jpg";
import blogImg2 from "../assets/images/blog/b_thumbb-02.jpg";
import FooterLogo from "../assets/images/footer-logo.svg";
const Footer = () => {
  return (
    <>
      <footer className="footer widget-footer ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
        <div className="first-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 widget-area">
                <div className="widget widget_text clearfix">
                  <div className="d-sm-flex align-items-center">
                    <div className="footer-logo">
                      {/* <img
                          id="footer-logo-img"
                          className="img-fluid auto_size"
                          height="46"
                          width="170"
                          src={FooterLogo}
                          alt="image"
                        /> */}
                      <h4>Hammi Textile</h4>
                    </div>
                    <div className="textwidget widget-text">
                      <p>
                        Fablio is operating in the textile market, as the
                        manufacture and trader. As years go by the range of
                        produced textiles products has increased.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 widget-area">
                <div className="widget widget_social clearfix">
                  <div className="social-icons text-lg-right">
                    <ul className="social-icons list-inline">
                      <li>
                        <a
                          className="tooltip-top"
                          href="#"
                          rel="noopener"
                          aria-label="facebook"
                          data-tooltip="Facebook"
                        >
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li>
                        {/* <a
                            className="tooltip-top"
                            href="#"
                            rel="noopener"
                            aria-label="twitter"
                            data-tooltip="Twitter"
                          >
                            <i className="fa fa-twitter"></i>
                          </a> */}
                      </li>
                      <li>
                        <a
                          className="tooltip-top"
                          href="#"
                          rel="noopener"
                          aria-label="flickr"
                          data-tooltip="Flickr"
                        >
                          <i className="fa fa-flickr"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          className="tooltip-top"
                          href="#"
                          rel="noopener"
                          aria-label="linkedin"
                          data-tooltip="Linkedin"
                        >
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-footer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_text margin_right10 clearfix">
                  <h3 className="widget-title">Get Free Estimate</h3>
                  <div className="textwidget widget-text">
                    <div className="call_detail">
                      <h3 className="fs-24">123-456-78910</h3>
                      <div className="padding_top10 padding_bottom10">
                        <p>Our online scheduling and payment system is safe.</p>
                      </div>
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-white w-100 text-center"
                        href="contact-us.html"
                      >
                        Request Online Form
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                <div className="widget widget_nav_menu clearfix">
                  <h3 className="widget-title">Textile Services</h3>
                  <ul id="menu-footer-quick-links" className="menu">
                    <li>
                      <a href="fabric-printing.html">Patch Fabric Works</a>
                    </li>
                    <li>
                      <a href="fabric-dyeing.html">Garment Stitching</a>
                    </li>
                    <li>
                      <a href="engineering.html">Pattern, Art Making</a>
                    </li>
                    <li>
                      <a href="manufacture.html">Stone Work Embroidery</a>
                    </li>
                    <li>
                      <a href="we-design-fabric-2.html">
                        Computerised Embroidery
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                <div className="widget widget-recent-post clearfix">
                  <h3 className="widget-title">Recent Posts</h3>
                  <ul className="widget-post ttm-recent-post-list">
                    <li>
                      <a href="blog-single.html">
                        <img
                          className="img-fluid"
                          src={blogImg1}
                          alt="post-img"
                        />
                      </a>
                      <div className="post-detail">
                        <a href="blog-single.html">
                          Can textiles lead the way during the pandemic?
                        </a>
                        <span className="post-date">March 18, 2021</span>
                      </div>
                    </li>
                    <li>
                      <a href="blog-single.html">
                        <img
                          className="img-fluid"
                          src={blogImg2}
                          alt="post-img"
                        />
                      </a>
                      <div className="post-detail">
                        <a href="blog-single.html">
                          One stop solution for textiles fabrics
                        </a>
                        <span className="post-date">February 28, 2021</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 widget-area">
                <div className="widget widget-latest-tweets clearfix">
                  <h3 className="widget-title">Contact Us</h3>
                  <ul className="widget_contact_wrapper">
                    <li>
                      <i className="ttm-textcolor-skincolor fa fa-map-marker"></i>
                      4789 Melmorn Street,Zakila Ton Mashintron Town
                    </li>
                    <li>
                      <i className="ttm-textcolor-skincolor fa fa-phone"></i>
                      (+01) 123 456 7890
                    </li>
                    <li>
                      <i className="ttm-textcolor-skincolor fa fa-envelope-o"></i>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 widget-area">
                <div className="widget newsletter_widget clearfix">
                  <form
                    id="subscribe-form"
                    className="newsletter-form"
                    method="post"
                    action="#"
                    data-mailchimp="true"
                  >
                    <div
                      className="mailchimp-inputbox clearfix"
                      id="subscribe-content"
                    >
                      <input
                        type="text"
                        name="NAME"
                        id="txtname"
                        placeholder="Your Name *"
                        required=""
                      />
                      <input
                        type="email"
                        name="EMAIL"
                        id="txtemail"
                        placeholder="Your Email *"
                        required=""
                      />
                      <button
                        className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-icon-btn-right ttm-btn-style-fill ttm-btn-color-skincolor"
                        type="submit"
                      >
                        Subscribe us
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div id="subscribe-msg"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer-text copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-center">
                  <span className="cpy-text">
                    Copyright © 2021{" "}
                    <a
                      href="#"
                      className="ttm-textcolor-skincolor font-weight-500"
                    >
                      Fablio{" "}
                    </a>{" "}
                    All rights reserved.
                  </span>
                  <ul className="footer-nav-menu">
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <a id="totop" href="#top">
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Footer;
