import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-center bg-ss1 text-p5 w-full h-16 mt-auto">
      <div>
        <p className="text-center text-sm">
          &copy; <span className="text-pp1">{new Date().getFullYear()}</span>{" "}
          React Router. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
