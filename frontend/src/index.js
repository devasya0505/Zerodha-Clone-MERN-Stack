import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./landing-page/home/HomePage";
import SignUp from "./landing-page/signup/SignUp";
import AboutPage from "./landing-page/about/AboutPage";
import ProductPage from "./landing-page/products/ProductPage";
import PricingPage from "./landing-page/pricing/PricingPage";
import SupportPage from "./landing-page/support/SupportPage";
import Navbar from "./landing-page/Navbar";
import Footer from "./landing-page/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
);
