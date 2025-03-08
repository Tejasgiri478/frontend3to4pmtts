import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import HowItsMade from "./pages/HowItsMade";
import HowItWork from "./components/HowItWork";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Locations from "./components/Locations";

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HowItsMade" element={<HowItsMade />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ProductSection />
      <HowItWork />
      <Gallery />
      <Testimonials />
      <Locations />
      <Footer />
    </Router>
  );
}

export default App;
