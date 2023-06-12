import React from "react";
import image1 from "../assets/images/testimonial/01.jpg";
import image2 from "../assets/images/testimonial/02.jpg";
import image3 from "../assets/images/testimonial/03.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";


const Testimonials = () => {
  return (
    <>
      <section className="ttm-row testimonial-section bg-img2 ttm-bg ttm-bgimage-yes clearfix">
        <div className="container" id="main_container">
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
            <div className="col-xl-12 col-lg-6 m-auto" style={{height:"450px",width:"400px",display:"flex",alignItems:"center"}} >
              <Carousel indicators={false}>
                <Carousel.Item className="main_container">
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
                    <div className="testimonial-content " style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"auto"}}>
                      <blockquote className="testimonial-text col-lg-9 " >
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
                </Carousel.Item>
              

                <Carousel.Item className="main_container">
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
                    <div className="testimonial-content " style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"auto"}}>
                      <blockquote className="testimonial-text col-lg-9 " >
                      The culture is the best at Fablio. You can tell that they
                      truly care about the happiness of their employees. It's a
                      really relaxed and calm environment and their quality of
                      product is always best. I refer them for the future.
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
                </Carousel.Item>


                <Carousel.Item className="main_container">
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
                    <div className="testimonial-content " style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",margin:"auto"}}>
                      <blockquote className="testimonial-text col-lg-9 " >
                      I realized after I sent in my order that I had ordered a
                      larger quantity than I needed. I emailed and received a
                      quick response, adjustment to my order and a refund.
                      Product was shipped out in a timely manner. FABLIO is
                      great!
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
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
