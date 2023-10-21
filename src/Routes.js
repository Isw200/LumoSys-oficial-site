import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Portfolio from "./Pages/Portfolio";
import Services from "./Pages/Services";
import CloudServices from "./Pages/Services/CloudServices";
import FullStackServices from "./Pages/Services/FullStackServices";
import MobileServices from "./Pages/Services/MobileServices";
import UiUx from "./Pages/Services/UIUX";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/Contact";
import Admin from "./Pages/Admin";
import Login from "./Pages/Admin/login";
import BlogPage from "./Pages/Blog/BlogPage";
import LumoLearn from "./Pages/Products/ProductItems";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import WebServices from "./Pages/Services/WebServices";

const RoutesJs = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Services />} />
        <Route path="/CloudServices" element={<CloudServices />} />
        <Route path="/FullStackServices" element={<FullStackServices />} />
        <Route path="/MobileServices" element={<MobileServices />} />
        <Route path="/UiUx" element={<UiUx />} />
        <Route path="/WebServices" element={<WebServices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/blog/:blogId" element={<BlogPage />} />
        <Route path="/products/lumolearn" element={<LumoLearn />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesJs;
