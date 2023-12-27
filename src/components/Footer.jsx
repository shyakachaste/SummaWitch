import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
        <hr />
        <div className="row">
          <p className="col-sm font-inter">
            &copy;{new Date().getFullYear()} Summa Witch  |  All rights reserved 
          </p>
        </div>
      </div>
  );
}

export default Footer;

