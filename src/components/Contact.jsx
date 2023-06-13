import React from "react";
import { Link } from "react-router-dom";
import TextileClients from "./TextileClients";

const Contact = () => {
  return (
    <>
      <div className="ttm-page-title-row ttm-bg ttm-bgimage-yes ttm-bgcolor-darkgrey clearfix">
        <div className="ttm-row-wrapper-bg-layer ttm-bg-layer"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="ttm-page-title-row-inner">
                <div className="page-title-heading">
                  <h2 className="title">Contact Us</h2>
                </div>
                <div className="breadcrumb-wrapper">
                  <span>
                    <Link title="Homepage" to="/">
                      Home
                    </Link>
                  </span>
                  <span>Contact Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="ttm-row padding_bottom_zero-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ttm-bgcolor-white box-shadow p-50">
                <div className="section-title title-style-center_text">
                  <div className="title-header">
                    <h2 className="title">
                      Contact <b>Form</b>
                    </h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      Feel free to contact us through{" "}
                      <a className="ttm-textcolor-skincolor" href="#">
                        Twitter
                      </a>{" "}
                      or{" "}
                      <a className="ttm-textcolor-skincolor" href="#">
                        Facebook
                      </a>{" "}
                      if you prefer.
                    </p>
                  </div>
                </div>
                <form
                  id="request_qoute_form"
                  className="request_qoute_form wrap-form clearfix"
                  method="post"
                  novalidate="novalidate"
                  action="#"
                >
                  <div className="row">
                    <div className="col-md-4">
                      <span className="text-input">
                        <input
                          name="name"
                          type="text"
                          value=""
                          placeholder="Your Name"
                          required="required"
                        />
                      </span>
                    </div>
                    <div className="col-md-4">
                      <span className="text-input">
                        <input
                          name="address"
                          type="text"
                          value=""
                          placeholder="Your Email"
                          required="required"
                        />
                      </span>
                    </div>
                    <div className="col-md-4">
                      <span className="text-input">
                        <input
                          name="phone"
                          type="text"
                          value=""
                          placeholder="Phone Number"
                          required="required"
                        />
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-input">
                        <input
                          name="company name*"
                          type="text"
                          value=""
                          placeholder="Company Name*"
                          required="required"
                        />
                      </span>
                    </div>
                    <div className="col-md-6">
                      <span className="text-input">
                        <input
                          name="subject"
                          type="text"
                          value=""
                          placeholder="Subject"
                          required="required"
                        />
                      </span>
                    </div>
                    <div className="col-lg-12">
                      <span className="text-input">
                        <textarea
                          name="message"
                          rows="5"
                          placeholder="Message"
                          required="required"
                        ></textarea>
                      </span>
                    </div>
                    <div className="col-lg-12">
                      <div className="pt-15 text-center">
                        <p className="cookies padding_bottom20">
                          <input
                            id="cookies-consent"
                            name="cookies-consent"
                            type="checkbox"
                            value="yes"
                          />
                          <label for="cookies-consent">
                            Save my name, email, and website in this browser for
                            the next time I comment.
                          </label>
                        </p>
                        <button
                          className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor"
                          type="submit"
                        >
                          Send now!
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ttm-row conatact-section clearfix">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.242931146893!2d-0.08187978422864274!3d51.54544427964142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761c903640c869%3A0xe9bd89dfec683ad1!2sTottenham%20Rd%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1616562073091!5m2!1sen!2sin"
                width="100%"
                height="558"
              ></iframe>
            </div>
            <div className="col-xl-7">
              <div className="padding_left15 res-1199-padding_left0 padding_top20 res-1199-padding_top40">
                <div className="section-title">
                  <div className="title-header">
                    <h3>CONTACT US</h3>
                    <h2 className="title">
                      Get In <b>Touch!</b>
                    </h2>
                  </div>
                  <div className="title-desc">
                    <p>
                      Loream ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <h2 className="fs-24 padding_top10">Head Office</h2>
                <div className="ttm-horizontal_sep width-100 margin_top20 margin_bottom5"></div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="featured-icon-box icon-align-before-content">
                      <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                          <i className="themifyicon ti-location-pin ttm-textcolor-skincolor"></i>
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <h3 className="margin_bottom0 fs-18">Address</h3>
                        </div>
                        <div className="featured-desc">
                          123 King Street,Melbourne Victoria 5000,New York.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="featured-icon-box icon-align-before-content">
                      <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                          <i className="themifyicon ti-email ttm-textcolor-skincolor"></i>
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <h3 className="margin_bottom0 fs-18">
                            Call Us / Email
                          </h3>
                        </div>
                        <div className="featured-desc">
                          +1800-200-123456
                          <br />
                          hammi.textile@yourmail.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="fs-24 padding_top20">Branch Office</h2>
                <div className="ttm-horizontal_sep width-100 margin_top20 margin_bottom5"></div>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="featured-icon-box icon-align-before-content">
                      <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                          <i className="themifyicon ti-location-pin ttm-textcolor-skincolor"></i>
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <h3 className="margin_bottom0 fs-18">Address</h3>
                        </div>
                        <div className="featured-desc">
                          123 King Street,Melbourne Victoria 5000,New York.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="featured-icon-box icon-align-before-content">
                      <div className="featured-icon">
                        <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-color-grey ttm-icon_element-size-md ttm-icon_element-style-rounded">
                          <i className="themifyicon ti-email ttm-textcolor-skincolor"></i>
                        </div>
                      </div>
                      <div className="featured-content">
                        <div className="featured-title">
                          <h3 className="margin_bottom0 fs-18">
                            Call Us / Email
                          </h3>
                        </div>
                        <div className="featured-desc">
                          +1800-200-123456
                          <br />
                          hammi.textile@yourmail.com
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

      <TextileClients />
    </>
  );
};

export default Contact;
