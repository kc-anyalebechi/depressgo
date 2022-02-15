import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="menu-section">
        <div className="logo">
          <Link to="/">
            <h1>DepressGo</h1>
          </Link>
        </div>
        <div className="nav">
          <Link to="/">Home </Link>
          <Link to="/Main/QuoteOfDay"> The Quote The Day </Link>
          <Link to="/Main/StayInspired">Stay Inspired </Link>
          <Link to="/Main/ContactUs">Contact Us </Link>
          <Link to="/Main/NeedHelp">
            Need Help? Speak To A Licensed Therapist
          </Link>
        </div>
        <div className="theme-quote">
          <p>
            “Today is the first day of the rest of your life.” ~ Attributed to
            Charles E. “Chuck” Dederich, Sr
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
