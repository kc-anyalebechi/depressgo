// import React, { useEffect, useState } from "react";
import React from "react";
import Header from "./Header/Header";
import QuoteOfDay from "./QuoteOfDay/QuoteOfDay";
import StayInspired from "./Main/StayInspired";
import ContactUs from "./Main/ContactUs";
import NeedHelp from "./NeedHelp/NeedHelp";
import Footer from "./Footer/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import GreenBtn from "./Main/GreenBtn";
import Home from './Home/Home'; 

import "./App.css";

function App() {


  // *******************
  //   TODAYS DATE CODE
  // *******************

// const monthNames = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"
// ];

// const today = new Date();
  
//   let dd = String(today.getDate()).padStart(2, "0");
//   let yyyy = today.getFullYear();
//   today = monthNames + dd + + yyyy;

// return ("Today is " + monthNames[today.getMonth()]);


  // return <div className="App"></div>;


  
    /* ******************
       HEADER WITH NAVBAR
       ****************** */
  
  return (
    <div className="header">
      <div>
        <Header />
        
      </div>

      {/* *****************
      MAIN BODY SECTION
      ***************** */}

      <div className="main">

      

        {/* <Quote/> */}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Main/QuoteOfDay" element={<QuoteOfDay />} />
            <Route path="/Main/StayInspired" element={<StayInspired />} />
            <Route path="/NeedHelp" element={<NeedHelp />} />
            <Route path="/Main/ContactUs" element={<ContactUs />} />
            <Route path="/Main/GreenBtn" element={<GreenBtn />} />

          </Routes>
        </main>
        <hr />
      <div className="depressgo-features">
        <h1>
          features will go here
          
        </h1>
      </div>
      </div>

      {/* ******
      FOOTER
      ******  */}
      <div className="footer">
        <Footer /> 
        
        
      </div>
    </div>
  );
}  

export default App;
