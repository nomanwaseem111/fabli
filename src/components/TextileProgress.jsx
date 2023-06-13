import React from "react";
import bgImage2 from "../assets/images/bg-image/col-bgimage-2.jpg";

const TextileProgress = () => {
  return (
    <>
      <section  className="ttm-row padding_zero-section ttm-bgcolor-skincolor bg-layer-equal-height clearfix">
        <div className="container">
          <div className="row no-gutters" >
            <div className="col-lg-12" > 
              <div className="row" >
                <div className="col-lg-7 col-md-12" >
                  <div className="ttm-bg ttm-col-bgimage-yes col-bg-img-two ttm-left-span z-index-2">
                    <div className="ttm-col-wrapper-bg-layer ttm-bg-layer" style={{backgroundImage:`url(${bgImage2})`,backgroundSize:"cover",backgroundPosition:"center" }}></div>
                    <div className="layer-content"></div>
                  </div>
                 
                </div>
                <div className="col-lg-5" >
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
                            solutions that are tailored to working conditions
                            and based on participation.
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
    </>
  );
};

export default TextileProgress;
