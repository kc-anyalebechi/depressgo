import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="menu-section">
        <div className="logo">
          <Link to="/">
            <h2>DepressGo</h2>
          </Link>
        </div>
        <div className="nav">
          <Link to="/">Home </Link>
          <Link to="/Main/QuoteOfDay"> The Quote The Day </Link>
          <Link to="/Main/StayInspired">Stay Inspired </Link>
          <Link to="/Main/ContactUs">Contact Us </Link>
          <Link to="/Main/NeedHelp">
            Need Someone To Listen?
          </Link>
        </div>
       
      </div>
    </div>
  );
}

export default Header;
