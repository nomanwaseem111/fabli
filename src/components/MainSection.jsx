import React from "react";

import Testimonials from "./Testimonials";
import Blog from "./Blog";
import TextileFeatures from "./TextileFeatures";
import TextileHistory from "./TextileHistory";
import TextileNumbers from "./TextileNumbers";
import TextileServices from "./TextileServices";
import TextileProgress from "./TextileProgress";
import TextileClients from "./TextileClients";
const MainSection = () => {
  return (
    <>
      <div className="site-main">
        <TextileFeatures />

        <TextileHistory />

        <TextileNumbers />

        <TextileServices />

        <TextileProgress />

        <Testimonials />

        <Blog />

        <TextileClients />
      </div>
    </>
  );
};

export default MainSection;
