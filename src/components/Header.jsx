import React from "react";
import { Link } from "react-router-dom";
import Slides1 from "../assets/images/slides/slider-mainbg-001.jpg";
import Slides2 from "../assets/images/slides/slider-mainbg-001.jpg";
import Slides3 from "../assets/images/slides/slider-mainbg-002.jpg";
import Banner from "./Banner";

const Header = () => {
  return (
    <div>
      <div id="preloader" className="blobs-wrapper">
        <div className="ttm-bgcolor-skincolor loader-blob"></div>
      </div>
      <header id="masthead" className="header ttm-header-style-01">
        <div
          id="site-header-menu"
          className="site-header-menu ttm-bgcolor-white"
        >
          <div className="site-header-menu-inner ttm-stickable-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="site-navigation d-flex flex-row align-items-center justify-content-between">
                    <div className="site-branding ">
                      <h4 style={{ marginTop: "10px" }}>Hammi Textile</h4>
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
                            <Link to="/" className="mega-menu-link">
                              Home
                            </Link>
                          </li>
                          <li className="mega-menu-item">
                            {/* <a href="#" className="mega-menu-link">
                              Pages
                            </a> */}
                            <Link to="/about">About</Link>
                            <ul className="mega-submenu">
                              <li>
                                <Link to="/services">Services</ Link>
                              </li>

                              <li>
                                <Link to="/our-team">Our Team</Link>
                              </li>
                              <li>
                                <Link to="/team-details">Team Details</Link>
                              </li>
                              <li>
                                <Link to="/error">Error Page</ Link>
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
                                <a href="blog-single.html">Blog Single View</a>
                              </li>
                            </ul>
                          </li>
                          <li className="mega-menu-item">
                            <Link to="/contact">Contact us</Link>
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
    </div>
  );
};

export default Header;
