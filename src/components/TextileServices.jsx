import React from "react";
import service1 from "../assets/images/services/services-01-768x512.jpg";
import service2 from "../assets/images/services/services-02-768x512.jpg";
import service3 from "../assets/images/services/services-03-768x512.jpg";
import service4 from "../assets/images/services/services-04-768x512.jpg";
const TextileServices = () => {
  return (
    <>
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
                        Fablio is the largest peer-to-peer comparison initiative
                        in the textile industry. It tracks the apparel material
                        and home textile sector’s progress.
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
                  <img className="img-fluid" src={service1} alt="image" />
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
                      Have been engaged with modern units for all requirements
                      of continuous bleach.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="featured-imagebox featured-imagebox-services style1">
                <div className="featured-thumbnail">
                  <img className="img-fluid" src={service2} alt="image" />
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
                  <img className="img-fluid" src={service3} alt="image" />
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
                      Choose from many fabrics and design your. Create and print
                      only the fabric you need.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="featured-imagebox featured-imagebox-services style1">
                <div className="featured-thumbnail">
                  <img className="img-fluid" src={service4} alt="image" />
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
                      Choose from many fabrics and design your. Create and print
                      only the fabric you need.
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
    </>
  );
};

export default TextileServices;
