import React from "react";
import { Route, Routes as Routers } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="relative flex flex-col  min-h-screen bg-p5 dark:bg-ss1">
      <NavBar />
      <Routers>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routers>

      <Footer />
    </div>
  );
}
export default App;
