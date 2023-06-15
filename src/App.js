import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import ServicesWeb from "./Components/ServicesWeb";
import ServicesMobile from "./Components/ServicesMobile";
import ServicesCloud from "./Components/ServicesCloud";
import ServicesUiUx from "./Components/ServicesUiUx";
import Products from "./Components/Products";
import Blog from "./Components/Blog";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services-web" element={<ServicesWeb />} />
        <Route path="/services-mobile" element={<ServicesMobile />} />
        <Route path="/services-cloud" element={<ServicesCloud />} />
        <Route path="/services-uiux" element={<ServicesUiUx />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact-us" element={<ContactUs />} />"
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
