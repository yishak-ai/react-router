import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function NavBar() {
  return (
    <div className="flex items-center justify-between p-4 bg-green-700 top-0 left-0 right-0 w-full h-12 py-5 px-2 text-white">
      <img src={logo} alt="" />
      <ul>
        <Link to="/">
          <li>HOME</li>
        </Link>
        <Link to="/about">
          <li>ABOUT</li>
        </Link>
        <Link to="/products">
          <li>PRODUCTS</li>
        </Link>
        <Link to="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
      <button>Get Start</button>
    </div>
  );
}

export default NavBar;
