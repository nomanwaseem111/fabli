import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <div className="page">
      <Header />
      <Banner />
      <MainSection />
      <Footer />
    </div>
  );
};

export default App;
