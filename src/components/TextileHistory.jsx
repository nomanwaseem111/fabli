import React from "react";
import singleImage from "../assets/images/single-img-02.jpg";

const TextileHistory = () => {
  return (
    <>
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
                      textile market manufacture and trader. As years go by, the
                      range of produced textiles has been increased, besides the
                      regular production became the largest exporter.
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
                    src={singleImage}
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
    </>
  );
};

export default TextileHistory;
