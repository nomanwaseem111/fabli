import React from "react";
import blogImg3 from "../assets/images/blog/blog-01-600x430.jpg";
import blogImg4 from "../assets/images/blog/blog-02-600x430.jpg";
import blogImg5 from "../assets/images/blog/blog-03-600x430.jpg";
import blogImg6 from "../assets/images/blog/blog-04-600x430.jpg";

const Blog = () => {
  return (
    <>
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
                    Since more than 40 years, FABLIO is operating in the textile
                    market manufacture and trader. As years go by, the range of
                    produced textiles has been increased.
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
                  <img className="img-fluid" src={blogImg3} alt="image" />
                </div>
                <div className="featured-content">
                  <div className="ttm-box-post-date">
                    <span className="ttm-entry-date">
                      <time
                        className="entry-date"
                        datetime="2021-03-18T04:16:25+00:00"
                      >
                        18
                        <span className="entry-month entry-year">Mar</span>
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
                      These cases are perfectly simple and easy to distinguish.
                      In a free hour, when our po...
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
                  <img className="img-fluid" src={blogImg4} alt="" />
                </div>
                <div className="featured-content">
                  <div className="ttm-box-post-date">
                    <span className="ttm-entry-date">
                      <time
                        className="entry-date"
                        datetime="2021-02-28T04:15:42+00:00"
                      >
                        28
                        <span className="entry-month entry-year">Feb</span>
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
                      Purus non enim praesent elementum facilisis. Eget mi proin
                      sed libero enim sed faucib...
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
                  <img className="img-fluid" src={blogImg5} alt="" />
                </div>
                <div className="featured-content">
                  <div className="ttm-box-post-date">
                    <span className="ttm-entry-date">
                      <time
                        className="entry-date"
                        datetime="2021-02-15T04:15:25+00:00"
                      >
                        15
                        <span className="entry-month entry-year">Feb</span>
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
                      Enim nunc faucibus a pellentesque sit amet porttitor eget.
                      Morbi blandit cursus risus...
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
                  <img className="img-fluid" src={blogImg6} alt="" />
                </div>
                <div className="featured-content">
                  <div className="ttm-box-post-date">
                    <span className="ttm-entry-date">
                      <time
                        className="entry-date"
                        datetime="2021-02-11T04:12:56+00:00"
                      >
                        11
                        <span className="entry-month entry-year">Feb</span>
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
                      Viverra accumsan in nisl nisi. Et leo duis ut diam quam
                      nulla porttitor massa. Pellen...
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
    </>
  );
};

export default Blog;
