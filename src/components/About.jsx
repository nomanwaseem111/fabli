import React from "react";
import SingleImage7 from "../assets/images/single-img-07.jpg";
import SingleImage8 from "../assets/images/single-img-08.jpg";
import bgImage from "../assets/images/bg-image/col-bgimage-2.jpg";
import TeamImage1 from '../assets/images/team-member/team-img01.jpg'
import TeamImage2 from '../assets/images/team-member/team-img02.jpg'
import TeamImage3 from '../assets/images/team-member/team-img03.jpg'
import TeamImage4 from '../assets/images/team-member/team-img04.jpg'
import TeamImage5 from '../assets/images/team-member/team-img05.jpg'

const About = () => {
  return (
    <>
    
      <div style={{backgroundImage:`url(${bgImage})`}} class="ttm-page-title-row ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
        <div class="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="ttm-page-title-row-inner">
                <div class="page-title-heading">
                  <h2 class="title">About Us</h2>
                </div>
                <div className="breadcrumb-wrapper">
                  <span>
                    <a title="Homepage" href="index.html">
                      Home
                    </a>
                  </span>
                  <span>About Us 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-main">
        <section className="ttm-row about-section clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-8">
                <div className="ttm_single_image-wrapper">
                  <img
                    className="img-fluid auto_size"
                    width="475"
                    height="624"
                    src={SingleImage7}
                    alt="single-07"
                  />
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-xs-12">
                <div className="padding_left30 padding_top20 res-991-padding_left0 res-991-padding_top40">
                  <div className="section-title">
                    <div className="title-header">
                      <h3>WHO WE ARE</h3>
                      <h2 className="title">
                        An Ultimate Textile Brand in <b>Market since 1970</b>
                      </h2>
                    </div>
                    <div className="title-desc">
                      <p>
                        Indian weavers of designer of furnishing fabrics is a
                        textile manufacturer founded in 1970 and renowned for
                        new and stylish interpretations of natural & organic
                        fabrics.
                      </p>
                    </div>
                  </div>
                  <div className="ttm-horizontal_sep width-100 padding_top30"></div>
                  <div className="d-sm-flex align-items-center">
                    <div className="ttm_single_image-wrapper text-left m-0">
                      <img
                        className="img-fluid auto_size"
                        width="168"
                        height="88"
                        src={SingleImage8}
                        alt="single-08"
                      />
                    </div>
                    <div className="pl-4 res-575-padding_left0 res-575-margin_top15">
                      <h3 className="fs-20 mb-0 pr-5 res-991-padding_right0">
                        Our Fabric Textiles Services Manufacture Found In 1996
                      </h3>
                    </div>
                  </div>
                  <div className="ttm-horizontal_sep width-100 margin_top30 padding_bottom30"></div>
                  <div>
                    <ul className="ttm-list ttm-list-style-icon ttm-list-icon-color-skincolor ttm-textcolor-darkgrey without-border">
                      <li>
                        <i className="ti ti-check"></i>
                        <span className="ttm-list-li-content">
                          We check for your current dental situation and decide
                          treatment
                        </span>
                      </li>
                      <li>
                        <i className="ti ti-check"></i>
                        <span className="ttm-list-li-content">
                          Our specialists will take care of your smile with
                          dedication
                        </span>
                      </li>
                      <li>
                        <i className="ti ti-check"></i>
                        <span className="ttm-list-li-content">
                          We run periodic check-ups to ensure your teeth are
                          good
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="d-inline-block margin_top15">
                    <a
                      className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor margin_right20 margin_top15"
                      href="about-us-2.html"
                    >
                      view more!
                    </a>
                    <a
                      className="ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-border ttm-btn-color-dark margin_top15"
                      href="contact-us.html"
                    >
                      contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ttm-row service-section ttm-bgcolor-grey position-relative z-index-2 clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>INDUSTRIES &amp; PRODUCTION</h3>
                    <h2 className="title">
                      Let's Experience <b>Exclusive Quality</b>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="featuredbox-number">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="featured-icon-box icon-align-top-content style5">
                        <i className="ttm-num ti-info"></i>
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="flaticon flaticon-textile-1"></i>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>Fabric Treatment</h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              We do execute stabilization including reweaving
                              &amp; stitch repair details.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="featured-icon-box icon-align-top-content style5">
                        <i className="ttm-num ti-info"></i>
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="flaticon flaticon-silk"></i>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>Artistic Direction</h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              Assist collection strategies, storage, application
                              and pest production management.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="featured-icon-box icon-align-top-content style5">
                        <i className="ttm-num ti-info"></i>
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="flaticon flaticon-moisture-wicking-fabric"></i>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>Satin weaving</h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              Continuous weft yarn, with as few interruptions of
                              warp as it possible.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="featured-icon-box icon-align-top-content style5">
                        <i className="ttm-num ti-info"></i>
                        <div className="featured-icon">
                          <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-md">
                            <i className="flaticon flaticon-sewing-machine"></i>
                          </div>
                        </div>
                        <div className="featured-content">
                          <div className="featured-title">
                            <h3>Fabric Dyeing</h3>
                          </div>
                          <div className="featured-desc">
                            <p>
                              Transfer dyes from aqueous solution onto the fiber
                              surface &amp; diffusion.
                            </p>
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

        <section className="ttm-row padding_top_zero-section ttm-bgcolor-grey clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="ttm-bgcolor-white p-30">
                  <h3 className="fs-26">Stone Work Embroidery</h3>
                  <p>
                    Consequat mauris nunc congue nisi vitae suscipit tellus
                    mauris.
                  </p>
                  <a
                    className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark margin_top5 margin_bottom5"
                    href="we-design-fabric.html"
                  >
                    read more
                  </a>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="ttm-bgcolor-skincolor p-30">
                  <div className="row ttm-vertical_sep">
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon style3">
                        <div className="ttm-fid-icon-wrapper">
                          <i className="ti ti-cup"></i>
                        </div>
                        <div className="ttm-fid-contents">
                          <h4 className="ttm-fid-inner">
                            <span
                              data-appear-animation="animateDigits"
                              data-from="0"
                              data-to="45"
                              data-interval="5"
                              data-before=""
                              data-before-style="sup"
                              data-after="+"
                              data-after-style="sub"
                              className="numinate"
                            >
                              45
                            </span>
                            <span>+</span>
                          </h4>
                        </div>
                        <h3 className="ttm-fid-title">
                          Different kind texttile products
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon style3">
                        <div className="ttm-fid-icon-wrapper">
                          <i className="ti ti-crown"></i>
                        </div>
                        <div className="ttm-fid-contents">
                          <h4 className="ttm-fid-inner">
                            <span
                              data-appear-animation="animateDigits"
                              data-from="0"
                              data-to="25"
                              data-interval="5"
                              data-before=""
                              data-before-style="sup"
                              data-after="+"
                              data-after-style="sub"
                              className="numinate"
                            >
                              25
                            </span>
                            <span>+</span>
                          </h4>
                        </div>
                        <h3 className="ttm-fid-title">
                          Years Of Working Experience
                        </h3>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6">
                      <div className="ttm-fid inside ttm-fid-with-icon ttm-fid-view-lefticon style3">
                        <div className="ttm-fid-icon-wrapper">
                          <i className="ti ti-user"></i>
                        </div>
                        <div className="ttm-fid-contents">
                          <h4 className="ttm-fid-inner">
                            <span
                              data-appear-animation="animateDigits"
                              data-from="0"
                              data-to="325"
                              data-interval="25"
                              data-before=""
                              data-before-style="sup"
                              data-after="+"
                              data-after-style="sub"
                              className="numinate"
                            >
                              325
                            </span>
                            <span>+</span>
                          </h4>
                        </div>
                        <h3 className="ttm-fid-title">Trusted Satisfied Clients</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ttm-row padding_top_zero-section ttm-bgcolor-grey bg-layer-equal-height mb_20 res-991-mb_60 clearfix">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-lg-12">
                <div className="row no-gutters">
                  <div className="col-lg-7 col-md-12">
                    <div className="ttm-bg ttm-col-bgcolor-yes ttm-bgcolor-darkgrey ttm-bg ttm-left-span spacing-9">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer">
                        <div className="ttm-col-wrapper-bg-layer-inner"></div>
                      </div>
                      <div className="layer-content">
                        <div className="section-title">
                          <div className="title-header">
                            <h3>WELL DESIGNED</h3>
                            <h2 className="title">
                              We Provide Clothes{" "}
                              <b>More Than Just Stitched Fabric </b>
                            </h2>
                          </div>
                          <div className="title-desc">
                            <p>
                              FABLIO is the largest peer-to-peer comparison
                              initiative in the textile industry. It tracks the
                              apparel material and home textile sector’s
                              progress toward more sustainable materials
                              sourcing, as well as alignment with global effort.
                              Besides the regular production became the largest
                              exporter.
                            </p>
                          </div>
                        </div>
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
                  <div className="col-lg-5 col-md-12">
                    <div className="ttm-bg ttm-col-bgimage-yes col-bg-img-two ttm-right-span z-index-2 ml_80 res-991-margin_left0 margin_top70 res-991-margin_top0">
                      <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                      <div className="layer-content"></div>
                    </div>
                    <img
                      className="img-fluid ttm-equal-height-image w-100"
                      src={bgImage}
                      alt="bg-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="ttm-row team-section ttm-bgcolor-grey clearfix">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h3>TEAMMEMBERS</h3>
                    <h2 className="title">
                      The Textiles <b>Experts! </b>
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mb_15 row slick_slider"
              data-slick='{"slidesToShow": 3, "slidesToScroll": 1, "arrows":false, "dots":false, "autoplay":true, "infinite":true, "responsive": [{"breakpoint":1100,"settings":{"slidesToShow": 3}} , {"breakpoint":777,"settings":{"slidesToShow": 2}}, {"breakpoint":575,"settings":{"slidesToShow": 1}}]}'
            >
              <div className="col-lg-4">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="ttm-team-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      <div className="media-block">
                        <ul className="social-icons">
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="facebook"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="twitter"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="google"
                            >
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="linkedin"
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={TeamImage1}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <a href="team-details.html">Michal Wincent</a>
                      </h5>
                    </div>
                    <p className="team-position">Product Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="ttm-team-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      <div className="media-block">
                        <ul className="social-icons">
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="facebook"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="twitter"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="google"
                            >
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="linkedin"
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={TeamImage2}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <a href="team-details.html">Andrew Jackson</a>
                      </h5>
                    </div>
                    <p className="team-position">Material Designer</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="ttm-team-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      <div className="media-block">
                        <ul className="social-icons">
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="facebook"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="twitter"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="google"
                            >
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="linkedin"
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={TeamImage3}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <a href="team-details.html">John Tyler</a>
                      </h5>
                    </div>
                    <p className="team-position">Senior Employee</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="ttm-team-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      <div className="media-block">
                        <ul className="social-icons">
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="facebook"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="twitter"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="google"
                            >
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="linkedin"
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={TeamImage4}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <a href="team-details.html">James Pamment</a>
                      </h5>
                    </div>
                    <p className="team-position">Employee</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="featured-imagebox featured-imagebox-team style1">
                  <div className="ttm-team-box-view-overlay">
                    <div className="featured-iconbox ttm-media-link">
                      <div className="media-block">
                        <ul className="social-icons">
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="facebook"
                            >
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="twitter"
                            >
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="google"
                            >
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              className="tooltip-top"
                              href="#"
                              rel="noopener"
                              aria-label="linkedin"
                            >
                              <i className="fa fa-linkedin"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="featured-thumbnail">
                      <img
                        className="img-fluid"
                        src={TeamImage5}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className="featured-content">
                    <div className="featured-title">
                      <h5>
                        <a href="team-details.html">Elina Shaikh</a>
                      </h5>
                    </div>
                    <p className="team-position">Account Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
