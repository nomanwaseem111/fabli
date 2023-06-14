import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
