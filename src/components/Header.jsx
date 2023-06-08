import React from "react";

const Header = () => {
  return (
    <>
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
                                <a href="project-style-01.html">Project One</a>
                              </li>
                              <li>
                                <a href="project-style-02.html">Project Two</a>
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
                                <a href="blog-single.html">Blog Single View</a>
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
    </>
  );
};

export default Header;
