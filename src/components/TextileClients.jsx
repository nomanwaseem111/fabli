import React from "react";
import client1 from "../assets/images/client/client-01.png";
import client2 from "../assets/images/client/client-02.png";
import client3 from "../assets/images/client/client-03.png";
import client4 from "../assets/images/client/client-04.png";
import client5 from "../assets/images/client/client-01.png";

import Slider from "react-slick";

const TextileClients = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div style={{ width: "80%", margin: "auto",height:"180px",marginBottom:"20px"}}>
        <Slider {...settings} >
   
          <div className="col-lg-12">
            <div className="client-box" style={{width:"240px"}}>
              <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
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
            <div className="client-box" style={{width:"240px"}}>
              <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
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
            <div className="client-box" style={{width:"240px"}}>
              <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
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
            <div className="client-box" style={{width:"240px"}}>
              <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
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
            <div className="client-box" style={{width:"240px"}}>
              <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
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
            <div className="client-box" style={{width:"240px"}}>
              <div className="ttm-client-logo-tooltip" data-tooltip="client-01">
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

          {/* <div>
          <img
              className="img-fluid auto_size"
              width="160"
              height="98"
              src={client2}
              alt="image"
            />
          </div>
          <div>
          <img
              className="img-fluid auto_size"
              width="160"
              height="98"
              src={client3}
              alt="image"
            />
          </div>
          <div>
          <img
              className="img-fluid auto_size"
              width="160"
              height="98"
              src={client4}
              alt="image"
            />
          </div>
          <div >
          <img
              className="img-fluid auto_size"
              width="160"
              height="98"
          
              src={client5}
              alt="image"
            />
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default TextileClients;
