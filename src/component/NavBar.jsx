import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";

function NavBar() {
  const [theme, setTheme] = useState(() => {
    document.documentElement.classList.contains("dark");
  });
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="flex fixed items-center shadow-md justify-between p-4 bg-slate-100 text-s1 dark:bg-ss1 top-0 left-0 right-0 w-full h-16 py-5 px-2 dark:text-p5">
      <div className="flex ml-8 items-center gap-2 ">
        <img
          src={logo}
          className="animate-spin"
          height={50}
          width={50}
          alt=""
        />
        <p className="text-3xl text-center font-bold text-pp1 font-poppins">
          React Router
        </p>
      </div>
      <ul className="flex gap-11  font-semibold rounded-full py-4 px-6 dark:bg-s2 bg-slate-50">
        <Link to="/">
          <li className="hover:border-pp2 lowecase hover:border-b-2 hover:text-pp1 ">
            HOME
          </li>
        </Link>
        <Link to="/about">
          <li className="hover:border-pp2 lowecase hover:border-b-2 hover:text-pp1 ">
            ABOUT
          </li>
        </Link>
        <Link to="/products">
          <li className="hover:border-pp2 lowecase hover:border-b-2 hover:text-pp1 ">
            PRODUCTS
          </li>
        </Link>
        <Link to="/contact">
          <li className="hover:border-pp2 lowecase hover:border-b-2 hover:text-pp1 ">
            CONTACT
          </li>
        </Link>
      </ul>
      <div className="flex justify-between items-center gap-4 mr-8">
        <button className="dark:bg-pp1 hover:bg-pp1 text-slate-900 dark:text-s1  py-1 px-3 rounded-lg shadow-1 border-none text-center font-poppins font-semibold dark:hover:text-s1 text-pp1 bg-p5  dark:hover:bg-p5 ">
          Get Start
        </button>
        <button
          onClick={() => setTheme(!theme)}
          className=" flex  bg-none mr-5  py-2 px-3 rounded-100% shadow-1 border-none text-center font-poppins font-semibold hover:animate-pulse "
        >
          {theme ? (
            <img src={moon} height={30} width={30} alt="Dark Mode" />
          ) : (
            <img src={sun} height={30} width={30} alt="Light Mode" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;
