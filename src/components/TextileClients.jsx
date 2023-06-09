import React from "react";
import client1 from "../assets/images/client/client-01.png";
import client2 from "../assets/images/client/client-02.png";
import client3 from "../assets/images/client/client-03.png";
import client4 from "../assets/images/client/client-04.png";
import client5 from "../assets/images/client/client-01.png";
const TextileClients = () => {
  return (
    <>
      <section className="ttm-row client-section ttm-bgcolor-grey clearfix">
        <div className="container">
          <div
            className="row slick_slider"
            data-slick='{"slidesToShow": 5, "slidesToScroll": 1, "arrows":false, "autoplay":false, "infinite":true, "responsive": [{"breakpoint":1200,"settings":{"slidesToShow": 5}}, {"breakpoint":1024,"settings":{"slidesToShow": 4}}, {"breakpoint":777,"settings":{"slidesToShow": 3}},{"breakpoint":575,"settings":{"slidesToShow": 2}},{"breakpoint":400,"settings":{"slidesToShow": 1}}]}'
          >
            <div className="col-lg-12">
              <div className="client-box">
                <div
                  className="ttm-client-logo-tooltip"
                  data-tooltip="client-01"
                >
                  <div className="client-thumbnail">
                    <img
                      className="img-fluid auto_size"
                      width="160"
                      height="98"
                      src={client1}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="client-box">
                <div
                  className="ttm-client-logo-tooltip"
                  data-tooltip="client-02"
                >
                  <div className="client-thumbnail">
                    <img
                      className="img-fluid auto_size"
                      width="160"
                      height="98"
                      src={client2}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="client-box">
                <div
                  className="ttm-client-logo-tooltip"
                  data-tooltip="client-03"
                >
                  <div className="client-thumbnail">
                    <img
                      className="img-fluid auto_size"
                      width="160"
                      height="98"
                      src={client3}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="client-box">
                <div
                  className="ttm-client-logo-tooltip"
                  data-tooltip="client-04"
                >
                  <div className="client-thumbnail">
                    <img
                      className="img-fluid auto_size"
                      width="160"
                      height="98"
                      src={client4}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="client-box">
                <div
                  className="ttm-client-logo-tooltip"
                  data-tooltip="client-01"
                >
                  <div className="client-thumbnail">
                    <img
                      className="img-fluid auto_size"
                      width="160"
                      height="98"
                      src={client5}
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="client-box">
                <div
                  className="ttm-client-logo-tooltip"
                  data-tooltip="client-02"
                >
                  <div className="client-thumbnail">
                    <img
                      className="img-fluid auto_size"
                      width="160"
                      height="98"
                      src="images/client/client-02.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="client-box">
                <div
                  className="ttm-client-logo-tooltip"
                  data-tooltip="client-04"
                >
                  <div className="client-thumbnail">
                    <img
                      className="img-fluid auto_size"
                      width="160"
                      height="98"
                      src="images/client/client-04.png"
                      alt="image"
                    />
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

export default TextileClients;
