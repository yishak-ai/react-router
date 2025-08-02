import React from "react";
import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import products from "./pages/products";
import NavBar from "./component/NavBar";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col  min-h-screen bg-gray-100">
      <NavBar />
      <Router>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/contact" element={<contact />} />
        <Route path="/products" element={<products />} />
      </Router>
    </div>
  );
}
export default App;
