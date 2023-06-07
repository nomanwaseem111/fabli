import React from "react";
import Logo from '../assets/images/logo-img.svg'
import Slides1 from '../assets/images/slides/slider-mainbg-001.jpg'
import Slides2 from '../assets/images/slides/slider-mainbg-001.jpg'
import Slides3 from '../assets/images/slides/slider-mainbg-002.jpg'
import image1 from '../assets/images/testimonial/01.jpg'
import image2 from '../assets/images/testimonial/02.jpg'
import image3 from '../assets/images/testimonial/03.jpg'
import blogImg1 from '../assets/images/blog/blog-02-600x430.jpg'
import blogImg2 from '../assets/images/blog/b_thumbb-02.jpg'
import blogImg3 from '../assets/images/blog/blog-01-600x430.jpg'
import blogImg4 from '../assets/images/blog/blog-02-600x430.jpg'
import blogImg5 from '../assets/images/blog/blog-03-600x430.jpg'
import blogImg6 from '../assets/images/blog/blog-04-600x430.jpg'
import client1 from '../assets/images/client/client-01.png'
import client2 from '../assets/images/client/client-02.png'
import client3 from '../assets/images/client/client-03.png'
import client4 from '../assets/images/client/client-04.png'
import client5 from '../assets/images/client/client-01.png'

const Navbar = () => {
  return (

    <>
      <div className="page">
        <div id="preloader" className="blobs-wrapper">
          <div className="ttm-bgcolor-skincolor loader-blob"></div>
        </div>

        <header id="masthead" className="header ttm-header-style-01">
          <div id="site-header-menu" className="site-header-menu ttm-bgcolor-white">
            <div className="site-header-menu-inner ttm-stickable-header">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="site-navigation d-flex flex-row align-items-center justify-content-between">
                      <div className="site-branding ">
                        {/* <a
                          className="home-link"
                          href="index.html"
                          title="Fablio"
                          rel="home"
                        >
                          <img
                            id="logo-img"
                            height="35"
                            width="130"
                            className="img-fluid auto_size"
                        src={Logo}
                            alt="logo-img"
                          />
                        </a> */}
                        <h4>Hammi Textile</h4>
                      </div>
                      <div className="site-description mr-auto">
                        <h2>For tomorrow’s people.</h2>
                      </div>
                      <div className="d-flex flex-row">
                        <div className="btn-show-menu-mobile menubar menubar--squeeze">
                          <span className="menubar-box">
                            <span className="menubar-inner"></span>
                          </span>
                        </div>

                        <nav className="main-menu menu-mobile" id="menu">
                          <ul className="menu">
                            <li className="mega-menu-item active">
                              <a href="#" className="mega-menu-link">
                                Home
                              </a>
                              <ul className="mega-submenu">
                                <li className="active">
                                  <a href="index.html">Homepage 1</a>
                                </li>
                                <li>
                                  <a href="home-2.html">Homepage 2</a>
                                </li>
                                <li>
                                  <a href="home-3.html">Homepage 3</a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-item">
                              <a href="#" className="mega-menu-link">
                                Pages
                              </a>
                              <ul className="mega-submenu">
                                <li>
                                  <a href="about-us.html">About Us 1</a>
                                </li>
                                <li>
                                  <a href="about-us-2.html">About Us 2</a>
                                </li>
                                <li>
                                  <a href="services-1.html">Services 1</a>
                                </li>
                                <li>
                                  <a href="services-2.html">Services 2</a>
                                </li>
                                <li>
                                  <a href="our-team.html">Our Team</a>
                                </li>
                                <li>
                                  <a href="team-details.html">Team Details</a>
                                </li>
                                <li>
                                  <a href="error.html">Error Page</a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-item">
                              <a href="#" className="mega-menu-link">
                                Services
                              </a>
                              <ul className="mega-submenu">
                                <li>
                                  <a href="fabric-printing.html">
                                    Fabric Printing
                                  </a>
                                </li>
                                <li>
                                  <a href="fabric-dyeing.html">Fabric Dyeing</a>
                                </li>
                                <li>
                                  <a href="engineering.html">Engineering</a>
                                </li>
                                <li>
                                  <a href="manufacture.html">Manufacture</a>
                                </li>
                                <li>
                                  <a href="we-design-fabric-2.html">
                                    Stich Fabric
                                  </a>
                                </li>
                                <li>
                                  <a href="we-design-fabric.html">
                                    We Design Fabric
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-item">
                              <a href="#" className="mega-menu-link">
                                Projects
                              </a>
                              <ul className="mega-submenu">
                                <li>
                                  <a href="project-style-01.html">
                                    Project One
                                  </a>
                                </li>
                                <li>
                                  <a href="project-style-02.html">
                                    Project Two
                                  </a>
                                </li>
                                <li>
                                  <a href="linen-fabric.html">Project Single</a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-item">
                              <a href="#" className="mega-menu-link">
                                Blog
                              </a>
                              <ul className="mega-submenu">
                                <li>
                                  <a href="blog.html">Blog classNameic</a>
                                </li>
                                <li>
                                  <a href="blog-grid.html">Blog Grid View</a>
                                </li>
                                <li>
                                  <a href="blog-single.html">
                                    Blog Single View
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="mega-menu-item">
                              <a href="contact-us.html">Contact us</a>
                            </li>
                          </ul>
                        </nav>

                        <div className="header_extra d-flex flex-row align-items-center justify-content-end">
                          <div className="header_search">
                            <a href="#" className="btn-default search_btn">
                              <i className="ti ti-search"></i>
                            </a>
                            <div className="header_search_content">
                              <div className="header_search_content_inner">
                                <a href="#" className="close_btn">
                                  <i className="ti ti-close"></i>
                                </a>
                                <form id="searchbox" method="get" action="#">
                                  <input
                                    className="search_query"
                                    type="text"
                                    id="search_query_top"
                                    name="s"
                                    placeholder="Enter Keyword"
                                    value=""
                                  />
                                  <button
                                    type="submit"
                                    className="btn close-search"
                                  >
                                    <i className="ti ti-search"></i>
                                  </button>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

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
              <img  className="slide_img" src={Slides1} alt="slides" />
              <img className="slide_img" src={Slides2} alt="slides"  />


              <div className="slide__content">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="slide__content--headings ttm-textcolor-white text-center">
                        <h3 data-animation="fadeInDown">YOU CAN TRUST US</h3>
                        <h2 data-animation="fadeInDown">
                          Wear <strong>Your</strong> Best{" "}
                          <strong>Moments</strong>
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
              <img  className="slide_img" src={Slides3} alt="slides" />
     
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

        <div className="site-main">
          <section className="ttm-row services-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-5">
                  <div className="margin_right30 res-991-margin_right0">
                    <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-grey ttm-bg spacing-1">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        <div className="ttm-col-wrapper-bg-layer-inner"></div>
                      </div>
                      <div className="layer-content">
                        <div className="section-title">
                          <div className="title-header">
                            <h2 className="title">
                              Ultimate Quality <b>Textiles</b>
                            </h2>
                          </div>
                          <div className="title-desc">
                            <p>
                              We are your reliable and experienced textile
                              partner around the world.
                            </p>
                          </div>
                        </div>
                        <div className="ttm_single_image-wrapper ttm_single_image_hover ml_70 mr_70">
                          <img
                            className="img-fluid"
                            src={Slides1}
                            alt="single-01"
                          />
                          <div className="ttm-play-icon-btn text-center">
                            <div className="ttm-play-icon-animation ttm-play-icon-animation-skincolor">
                              <a
                                href="https://youtu.be/7e90gBu4pas"
                                target="_self"
                                className="ttm_prettyphoto"
                              >
                                <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-skincolor ttm-icon_element-size-sm ttm-icon_element-style-rounded">
                                  <i className="fa fa-play ttm-textcolor-skincolor"></i>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                        <p className="text-center padding_top30">
                          The Largest Exporter of{" "}
                          <a href="services1.html">
                            <u className="ttm-textcolor-skincolor">Textile</u>
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row ttm-vertical_sep">
                    <div className="col-md-6 col-sm-6">
                      <div className="featured-icon-box icon-align-top-content style1">
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="flaticon flaticon-factory"></i>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>Fablio Overview</h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              We Bringing a revolutionary change in the Textile
                              industry through products!
                            </p>
                          </div>
                          <a
                            className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-skincolor"
                            href="fabric-printing.html"
                          >
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="featured-icon-box icon-align-top-content style1">
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="flaticon flaticon-suit"></i>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>Production Capability</h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              We’re try to be not just legally compliant but
                              more than that.
                            </p>
                          </div>
                          <a
                            className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-skincolor"
                            href="fabric-printing.html"
                          >
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="ttm-horizontal_sep width-100 md-hide"></div>
                  <div className="row ttm-vertical_sep">
                    <div className="col-md-6 col-sm-6">
                      <div className="featured-icon-box icon-align-top-content style1">
                        <div className="featured-icon padding_top15">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="flaticon flaticon-warehouse-1"></i>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>Company History</h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              One of the largest & most reputed textile groups
                              in India & globe.
                            </p>
                          </div>
                          <a
                            className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-skincolor"
                            href="fabric-printing.html"
                          >
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="featured-icon-box icon-align-top-content style1">
                        <div className="featured-icon padding_top15">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="flaticon flaticon-fabric"></i>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>Fabric Designs</h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              Gold trophy 5 years in a row for being the largest
                              exporter
                            </p>
                          </div>
                          <a
                            className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-skincolor"
                            href="fabric-printing.html"
                          >
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ttm-row padding_top_zero-section margin_top90 res-991-margin_top0 bg-layer-equal-height ttm-bgcolor-grey clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-xs-12">
                  <div className="padding_top90 res-991-padding_top60">
                    <div className="section-title">
                      <div className="title-header">
                        <h3>ABOUT FABLIO</h3>
                        <h2 className="title">
                          The Leading Textile Brand in <b>Market Since 1970</b>
                        </h2>
                      </div>
                      <div className="title-desc">
                        <p>
                          Since more than 40 years, FABLIO is operating in the
                          textile market manufacture and trader. As years go by,
                          the range of produced textiles has been increased,
                          besides the regular production became the largest
                          exporter.
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <ul className="ttm-list ttm-bordered-lists ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                          <li>
                            <i className="ti ti-check"></i>
                            <span className="ttm-list-li-content">
                              Trends the Current Market
                            </span>
                          </li>
                          <li>
                            <i className="ti ti-check"></i>
                            <span className="ttm-list-li-content">
                              The rayon fabrics wholesaler
                            </span>
                          </li>
                          <li>
                            <i className="ti ti-check"></i>
                            <span className="ttm-list-li-content">
                              The Global fabrics distributor
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-6">
                        <ul className="ttm-list ttm-bordered-lists ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey">
                          <li>
                            <i className="ti ti-check"></i>
                            <span className="ttm-list-li-content">
                              Biological tested fabrics
                            </span>
                          </li>
                          <li>
                            <i className="ti ti-check"></i>
                            <span className="ttm-list-li-content">
                              Awarded For Best Exporter
                            </span>
                          </li>
                          <li>
                            <i className="ti ti-check"></i>
                            <span className="ttm-list-li-content">
                              Stable partner global textile
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="margin_top20">
                      <div className="d-inline-block">
                        <a
                          className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor margin_right20 margin_top15"
                          href="about-us-2.html"
                        >
                          view more
                        </a>
                        <a
                          className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark  margin_top15"
                          href="contact-us.html"
                        >
                          contact us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-8 col-sm-8">
                  <div className="mt_160 text-md-right res-991-margin_top40">
                    <div className="ttm_single_image-wrapper ttm_single_image_hover imagestyle-one res-991-margin_right0">
                      <img
                        className="img-fluid auto_size"
                        src="images/single-img-02.jpg"
                        alt="single-02"
                        height="663"
                        width="504"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ttm-row fid-section ttm-bgimage-yes bg-img1 ttm-bg ttm-bgcolor-darkgrey clearfix">
            <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
            <div className="container">
              <div className="row">
                <div className="col-lg-8 m-auto">
                  <div className="section-title title-style-center_text">
                    <div className="title-header">
                      <h2 className="title">
                        The Textile,Product, And Apparel{" "}
                        <b className="ttm-textcolor-skincolor">Manufacturing </b>
                        Industries.
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ttm-fid inside ttm-fid-with-icon style1">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="flaticon flaticon-suit"></i>
                    </div>
                    <div className="ttm-fid-contents">
                      <h4 className="ttm-fid-inner">
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="350"
                          data-interval="15"
                          data-before=""
                          data-before-style="sup"
                          data-after=""
                          data-after-style="sub"
                          className="numinate"
                        >
                          350
                        </span>
                      </h4>
                      <h3 className="ttm-fid-title">Trusted Clients</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ttm-fid inside ttm-fid-with-icon style1">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="flaticon flaticon-fabric"></i>
                    </div>
                    <div className="ttm-fid-contents">
                      <h4 className="ttm-fid-inner">
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="215"
                          data-interval="15"
                          data-before=""
                          data-before-style="sup"
                          data-after=""
                          data-after-style="span"
                          className="numinate"
                        >
                          215
                        </span>
                      </h4>
                      <h3 className="ttm-fid-title">Finished Projects</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ttm-fid inside ttm-fid-with-icon style1">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="flaticon flaticon-factory"></i>
                    </div>
                    <div className="ttm-fid-contents">
                      <h4 className="ttm-fid-inner">
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="25"
                          data-interval="15"
                          data-before=""
                          data-before-style="sup"
                          data-after=""
                          data-after-style="span"
                          className="numinate"
                        >
                          25
                        </span>
                      </h4>
                      <h3 className="ttm-fid-title">Years Of Experience</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  <div className="ttm-fid inside ttm-fid-with-icon style1">
                    <div className="ttm-fid-icon-wrapper">
                      <i className="flaticon flaticon-placeholder"></i>
                    </div>
                    <div className="ttm-fid-contents">
                      <h4 className="ttm-fid-inner">
                        <span
                          data-appear-animation="animateDigits"
                          data-from="0"
                          data-to="45"
                          data-interval="15"
                          data-before=""
                          data-before-style="sup"
                          data-after=""
                          data-after-style="span"
                          className="numinate"
                        >
                          45
                        </span>
                      </h4>
                      <h3 className="ttm-fid-title">Visited Conference</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="margin_top35 mb_15 text-center">
                    <p>
                      Don’t hesitate, contact us for better help and
                      services.&nbsp;
                      <a
                        href="services-2.html"
                        className="ttm-textcolor-skincolor font-weight-500"
                      >
                        <u>View More!</u>
                      </a>
                    </p>
                  </div>
                  <div className="padding_bottom90 res-991-padding_bottom0"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="ttm-row padding_zero-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ttm-bg ttm-col-bgcolor-yes ttm-bg ttm-col-bgimage-yes col-bg-img-one ttm-left-span spacing-2">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                      <div className="ttm-col-wrapper-bg-layer-inner"></div>
                    </div>
                    <div className="layer-content">
                      <div className="section-title style2">
                        <div className="title-header">
                          <h3>INDUSTRIES & PRODUCTION</h3>
                          <h2 className="title">
                            We Give Top Production From <b>Every Angle</b>
                          </h2>
                        </div>
                        <div className="title-desc">
                          <p>
                            Fablio is the largest peer-to-peer comparison
                            initiative in the textile industry. It tracks the
                            apparel material and home textile sector’s progress.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ttm-row padding_top_zero-section mt_210 res-991-margin_top_30 position-relative z-index-2 clearfix">
            <div className="container">
              <div
                className="row slick_slider"
                data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows":false, "autoplay":false, "dots":false, "infinite":true, "responsive":[{"breakpoint":992,"settings":{"slidesToShow": 2}},{"breakpoint":840,"settings":{"slidesToShow": 2}},{"breakpoint":650,"settings":{"slidesToShow": 1}}]}'
              >
                <div className="col-md-4 col-sm-6">
                  <div className="featured-imagebox featured-imagebox-services style1">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="images/services/services-01-768x512.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>
                          <a href="fabric-printing.html">Fabric Printing</a>
                        </h3>
                        <div className="ttm-details-link">
                          <a href="fabric-printing.html">
                            <i className="themifyicon ti-arrow-top-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Have been engaged with modern units for all
                          requirements of continuous bleach.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="featured-imagebox featured-imagebox-services style1">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="images/services/services-02-768x512.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>
                          <a href="fabric-dyeing.html">Fabric Dyeing</a>
                        </h3>
                        <div className="ttm-details-link">
                          <a href="fabric-dyeing.html">
                            <i className="themifyicon ti-arrow-top-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="featured-desc">
                        <p>
                          It is the process of transfer dyes from the aqueous
                          solution to the fiber surface
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="featured-imagebox featured-imagebox-services style1">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="images/services/services-03-768x512.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>
                          <a href="engineering.html">Engineering</a>
                        </h3>
                        <div className="ttm-details-link">
                          <a href="engineering.html">
                            <i className="themifyicon ti-arrow-top-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Choose from many fabrics and design your. Create and
                          print only the fabric you need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="featured-imagebox featured-imagebox-services style1">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src="images/services/services-04-768x512.jpg"
                        alt="image"
                      />
                    </div>
                    <div className="featured-content">
                      <div className="featured-title">
                        <h3>
                          <a href="manufacture.html">Manufacture</a>
                        </h3>
                        <div className="ttm-details-link">
                          <a href="manufacture.html">
                            <i className="themifyicon ti-arrow-top-right"></i>
                          </a>
                        </div>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Choose from many fabrics and design your. Create and
                          print only the fabric you need.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12 text-center">
                  <a
                    className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark margin_top30"
                    href="services-2.html"
                  >
                    View More Services!
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="ttm-row padding_zero-section ttm-bgcolor-skincolor bg-layer-equal-height clearfix">
            <div className="container">
              <div className="row no-gutters">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-7 col-md-12">
                      <div className="ttm-bg ttm-col-bgimage-yes col-bg-img-two ttm-left-span z-index-2">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                        <div className="layer-content"></div>
                      </div>
                      <img
                        className="img-fluid ttm-equal-height-image w-100"
                        src="images/bg-image/col-bgimage-2.jpg"
                        alt="bg-image"
                      />
                    </div>
                    <div className="col-lg-5">
                      <div className="padding_top30 padding_bottom30 text-lg-right res-1199-padding_right15 res-991-padding_left15">
                        <div className="fs-26">
                          Fablio is Operating In The Textile
                        </div>
                        <div className="fs-26">
                          <b>Market Manufacture</b>
                        </div>
                      </div>
                      <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-bg ttm-right-span spacing-3 z-index-2 h-auto res-1199-padding_right15">
                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                          <div className="ttm-col-wrapper-bg-layer-inner"></div>
                        </div>
                        <div className="layer-content">
                          <div className="section-title">
                            <div className="title-header">
                              <h3>MEASUREMENTS</h3>
                              <h2 className="title">
                                We Take Occupational Health &{" "}
                                <b>Safety Measurements </b>
                              </h2>
                            </div>
                            <div className="title-desc">
                              <p>
                                Our health experts initiate health promotion
                                solutions that are tailored to working
                                conditions and based on participation.
                              </p>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 col-sm-6">
                              <div className="featured-icon-box icon-align-before-title style2 padding_right10">
                                <div className="featured-icon">
                                  <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-rounded ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                                    <div className="fa fa-check"></div>
                                  </div>
                                </div>
                                <div className="featured-title">
                                  <h3>Safety At Work</h3>
                                </div>
                                <div className="featured-content">
                                  <div className="featured-desc">
                                    <p>
                                      We make workplace safe any aspects for
                                      employees
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6 col-sm-6">
                              <div className="featured-icon-box icon-align-before-title style2 padding_left15 res-767-padding_left0">
                                <div className="featured-icon">
                                  <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-rounded ttm-icon_element-color-skincolor ttm-icon_element-size-xs">
                                    <div className="fa fa-check"></div>
                                  </div>
                                </div>
                                <div className="featured-title">
                                  <h3>Healthy Place</h3>
                                </div>
                                <div className="featured-content">
                                  <div className="featured-desc">
                                    <p>
                                      Activities are perform by experts at
                                      enterprise level
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="ttm-horizontal_sep width-100 margin_top20 margin_bottom20"></div>
                          <div className="padding_top15">
                            <div className="ttm-progress-bar" data-percent="90%">
                              <div className="progressbar-title">Textile</div>
                              <div className="progress-bar-inner">
                                <div className="progress-bar progress-bar-color-bar_skincolor">
                                  <div
                                    className="progress-bar-percent ttm-bgcolor-skincolor"
                                    data-percentage="90"
                                  >
                                    90%
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              className="ttm-progress-bar clearfix"
                              data-percent="80%"
                            >
                              <div className="progressbar-title">Manufacture</div>
                              <div className="progress-bar-inner">
                                <div className="progress-bar progress-bar-color-bar_skincolor">
                                  <div
                                    className="progress-bar-percent ttm-bgcolor-skincolor"
                                    data-percentage="80"
                                  >
                                    80%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ttm-row testimonial-section bg-img2 ttm-bg ttm-bgimage-yes clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="padding_top70 res-991-padding_top0"></div>

                  <div className="section-title title-style-center_text">
                    <div className="title-header">
                      <h3>TESTIMONIALS</h3>
                      <h2 className="title">
                        Our Customers <b>Are Saying?</b>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-9 col-lg-10 m-auto">
                  <div
                    className="slick_slider slick-arrows-style1"
                    data-slick='{"slidesToShow": 1, "slidesToScroll": 1, "arrows":true, "autoplay":false, "dots":false, "infinite":true, "responsive":[{"breakpoint":992,"settings":{"slidesToShow": 1}},{"breakpoint":840,"settings":{"slidesToShow": 1}}]}'
                  >
                    <div className="testimonials ttm-testimonial-box-view-style1">
                      <div className="testimonial-avatar">
                        <div className="testimonial-img">
                          <img
                            className="img-fluid"
                            src={image1}
                            alt="testimonial-img"
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <blockquote className="testimonial-text">
                          Fablio's customer service is great. I was searching
                          &amp; found exactly what I wanted, was delivered
                          quickly. Very good transaction. Fast shipping. Great
                          blankets fabric and I am planning to buy it in bulk
                          order.
                        </blockquote>
                        <div className="testimonial-bottom">
                          <div className="star-ratings">
                            <ul className="rating">
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="testimonial-caption">
                            <h5>Michal Wincent</h5>
                            <label>Customer</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="testimonials ttm-testimonial-box-view-style1">
                      <div className="testimonial-avatar">
                        <div className="testimonial-img">
                          <img
                            className="img-fluid"
                            src={image2}
                            alt="testimonial-img"
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <blockquote className="testimonial-text">
                          The culture is the best at Fablio. You can tell that
                          they truly care about the happiness of their
                          employees. It's a really relaxed and calm environment
                          and their quality of product is always best. I refer
                          them for the future.
                        </blockquote>
                        <div className="testimonial-bottom">
                          <div className="star-ratings">
                            <ul className="rating">
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="testimonial-caption">
                            <h5>Elic Semules</h5>
                            <label>Manager</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="testimonials ttm-testimonial-box-view-style1">
                      <div className="testimonial-avatar">
                        <div className="testimonial-img">
                          <img
                            className="img-fluid"
                            src={image3}
                            alt="testimonial-img"
                          />
                        </div>
                      </div>
                      <div className="testimonial-content">
                        <blockquote className="testimonial-text">
                          I realized after I sent in my order that I had ordered
                          a larger quantity than I needed. I emailed and
                          received a quick response, adjustment to my order and
                          a refund. Product was shipped out in a timely manner.
                          FABLIO is great!
                        </blockquote>
                        <div className="testimonial-bottom">
                          <div className="star-ratings">
                            <ul className="rating">
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="active">
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                          </div>
                          <div className="testimonial-caption">
                            <h5>Alex Albert Belle</h5>
                            <label>CEO-Textile</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ttm-row blog-section clearfix">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title style2">
                    <div className="title-header">
                      <h3>NEW BLOGS</h3>
                      <h2 className="title">
                        Latest <b>News And Articles!</b>
                      </h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        Since more than 40 years, FABLIO is operating in the
                        textile market manufacture and trader. As years go by,
                        the range of produced textiles has been increased.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="row slick_slider mb_15"
                data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows":false, "dots":false, "autoplay":true, "infinite":true, "responsive": [{"breakpoint":1024,"settings":{"slidesToShow": 3}} , {"breakpoint":900,"settings":{"slidesToShow": 2}}, {"breakpoint":575,"settings":{"slidesToShow": 1}}]}'
              >
                <div className="col-lg-4">
                  <div className="featured-imagebox featured-imagebox-post style1">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={blogImg3}
                        alt="image"
                      />
                    </div>
                    <div className="featured-content">
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time
                            className="entry-date"
                            datetime="2021-03-18T04:16:25+00:00"
                          >
                            18<span className="entry-month entry-year">Mar</span>
                          </time>
                        </span>
                      </div>
                      <div className="post-meta">
                        <span className="ttm-meta-line byline">John Doe</span>
                        <span className="ttm-meta-line comments-link">
                          0 Comments
                        </span>
                      </div>
                      <div className="featured-title">
                        <h3>
                          <a href="blog-single.html">
                            Can textiles lead the way during the pandemic?
                          </a>
                        </h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          These cases are perfectly simple and easy to
                          distinguish. In a free hour, when our po...
                        </p>
                      </div>
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-color-dark btn-inline"
                        href="blog-single.html"
                        tabindex="-1"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="featured-imagebox featured-imagebox-post style1">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={blogImg4}
                        alt=""
                      />
                    </div>
                    <div className="featured-content">
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time
                            className="entry-date"
                            datetime="2021-02-28T04:15:42+00:00"
                          >
                            28<span className="entry-month entry-year">Feb</span>
                          </time>
                        </span>
                      </div>
                      <div className="post-meta">
                        <span className="ttm-meta-line byline">John Doe</span>
                        <span className="ttm-meta-line comments-link">
                          0 Comments
                        </span>
                      </div>
                      <div className="featured-title">
                        <h3>
                          <a href="blog-single.html">
                            One stop solution for textiles fabrics
                          </a>
                        </h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Purus non enim praesent elementum facilisis. Eget mi
                          proin sed libero enim sed faucib...
                        </p>
                      </div>
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-color-dark btn-inline"
                        href="blog-single.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="featured-imagebox featured-imagebox-post style1">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={blogImg5}
                        alt=""
                      />
                    </div>
                    <div className="featured-content">
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time
                            className="entry-date"
                            datetime="2021-02-15T04:15:25+00:00"
                          >
                            15<span className="entry-month entry-year">Feb</span>
                          </time>
                        </span>
                      </div>
                      <div className="post-meta">
                        <span className="ttm-meta-line byline">John Doe</span>
                        <span className="ttm-meta-line comments-link">
                          0 Comments
                        </span>
                      </div>
                      <div className="featured-title">
                        <h3>
                          <a href="blog-single.html">
                            Textilegence Magazine & Digital Platform
                          </a>
                        </h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Enim nunc faucibus a pellentesque sit amet porttitor
                          eget. Morbi blandit cursus risus...
                        </p>
                      </div>
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-color-dark btn-inline"
                        href="blog-single.html"
                        tabindex="-1"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="featured-imagebox featured-imagebox-post style1">
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={blogImg6}
                        alt=""
                      />
                    </div>
                    <div className="featured-content">
                      <div className="ttm-box-post-date">
                        <span className="ttm-entry-date">
                          <time
                            className="entry-date"
                            datetime="2021-02-11T04:12:56+00:00"
                          >
                            11<span className="entry-month entry-year">Feb</span>
                          </time>
                        </span>
                      </div>
                      <div className="post-meta">
                        <span className="ttm-meta-line byline">John Doe</span>
                        <span className="ttm-meta-line comments-link">
                          0 Comments
                        </span>
                      </div>
                      <div className="featured-title">
                        <h3>
                          <a href="blog-single.html">
                            Contactless Payments Time Has Come
                          </a>
                        </h3>
                      </div>
                      <div className="featured-desc">
                        <p>
                          Viverra accumsan in nisl nisi. Et leo duis ut diam
                          quam nulla porttitor massa. Pellen...
                        </p>
                      </div>
                      <a
                        className="ttm-btn ttm-btn-size-md ttm-btn-color-dark btn-inline"
                        href="blog-single.html"
                      >
                        read more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="ttm-row client-section ttm-bgcolor-grey clearfix">
            <div className="container">
              <div
                className="row slick_slider"
                data-slick='{"slidesToShow": 5, "slidesToScroll": 1, "arrows":false, "autoplay":false, "infinite":true, "responsive": [{"breakpoint":1200,"settings":{"slidesToShow": 5}}, {"breakpoint":1024,"settings":{"slidesToShow": 4}}, {"breakpoint":777,"settings":{"slidesToShow": 3}},{"breakpoint":575,"settings":{"slidesToShow": 2}},{"breakpoint":400,"settings":{"slidesToShow": 1}}]}'
              >
                <div className="col-lg-12">
                  <div className="client-box">
                    <div
                      className="ttm-client-logo-tooltip"
                      data-tooltip="client-01"
                    >
                      <div className="client-thumbnail">
                        <img
                          className="img-fluid auto_size"
                          width="160"
                          height="98"
                          src={client1}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="client-box">
                    <div
                      className="ttm-client-logo-tooltip"
                      data-tooltip="client-02"
                    >
                      <div className="client-thumbnail">
                        <img
                          className="img-fluid auto_size"
                          width="160"
                          height="98"
                          src={client2}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="client-box">
                    <div
                      className="ttm-client-logo-tooltip"
                      data-tooltip="client-03"
                    >
                      <div className="client-thumbnail">
                        <img
                          className="img-fluid auto_size"
                          width="160"
                          height="98"
                          src={client3}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="client-box">
                    <div
                      className="ttm-client-logo-tooltip"
                      data-tooltip="client-04"
                    >
                      <div className="client-thumbnail">
                        <img
                          className="img-fluid auto_size"
                          width="160"
                          height="98"
                          src={client4}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="client-box">
                    <div
                      className="ttm-client-logo-tooltip"
                      data-tooltip="client-01"
                    >
                      <div className="client-thumbnail">
                        <img
                          className="img-fluid auto_size"
                          width="160"
                          height="98"
                          src={client5}
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="client-box">
                    <div
                      className="ttm-client-logo-tooltip"
                      data-tooltip="client-02"
                    >
                      <div className="client-thumbnail">
                        <img
                          className="img-fluid auto_size"
                          width="160"
                          height="98"
                          src="images/client/client-02.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="client-box">
                    <div
                      className="ttm-client-logo-tooltip"
                      data-tooltip="client-04"
                    >
                      <div className="client-thumbnail">
                        <img
                          className="img-fluid auto_size"
                          width="160"
                          height="98"
                          src="images/client/client-04.png"
                          alt="image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <footer className="footer widget-footer ttm-bgcolor-darkgrey ttm-textcolor-white clearfix">
          <div className="first-footer">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-9 widget-area">
                  <div className="widget widget_text clearfix">
                    <div className="d-sm-flex align-items-center">
                      <div className="footer-logo">
                        <img
                          id="footer-logo-img"
                          className="img-fluid auto_size"
                          height="46"
                          width="170"
                          src="images/footer-logo.svg"
                          alt="image"
                        />
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
                          <p>
                            Our online scheduling and payment system is safe.
                          </p>
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
                        <i className="ttm-textcolor-skincolor fa fa-phone"></i>(+01)
                        123 456 7890
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
      </div>
    </>
  );
};

export default Navbar;
