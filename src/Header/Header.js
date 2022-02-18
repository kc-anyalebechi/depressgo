import React from "react";
import { Link  } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

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
        {/* <>
      <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar=nav" />
          <Navbar.Collapse id="responsive-narbar-nav">
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Link to="/Main/QuoteOfDay"> The Quote The Day </Link>
              <Link to="/Main/ContactUs">Contact Us </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </> */}

    

        <div className="nav">
           {/* <Link to="/">Home      </Link>  */}
           <Link to="/Main/QuoteOfDay"> The Quote The Day      </Link>
          <Link to="/Main/StayInspired">Stay Inspired      </Link>
          <Link to="/Main/ContactUs">Contact Us     </Link>
          <Link to="/NeedHelp">
            Need Someone To Listen?
          </Link>
        </div>


        {/* <div className="theme-quote">
          <p>
            “Today is the first day of the rest of your life.” ~ Attributed to
            Charles E. “Chuck” Dederich, Sr
          </p> 
        </div>  */}
       
      </div>
    </div>
  );
}

export default Header;


