import React from "react";
import Slides1 from "../assets/images/slides/slider-mainbg-001.jpg";

const TextileFeatures = () => {
  return (
    <>
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
                          We are your reliable and experienced textile partner
                          around the world.
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
                          We’re try to be not just legally compliant but more
                          than that.
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
                          One of the largest & most reputed textile groups in
                          India & globe.
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
    </>
  );
};

export default TextileFeatures;
