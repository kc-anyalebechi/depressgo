import React from 'react'
import { Link } from "react-router-dom";


function Header() {
  return (
    <div>
      <Link to='/'>
            <h1>DepressGo</h1>
          </Link>
      <nav>
          <Link to="/">Home </Link>
          <Link to="/Main/QuoteOfDay"> The Quote The Day </Link>
          <Link to="/Main/StayInspired">Stay Inspired </Link>
          <Link to="/Main/ContactUs">Contact Us </Link>
          <Link to="/Main/NeedHelp">
            Need Help? Speak To A Licensed Therapist
          </Link>
        </nav>

    </div>
  )
}

export default Header