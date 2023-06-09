import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

const App = () => {
 

 
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>

      
      <Footer />
    </div>
  );
};

export default App;
