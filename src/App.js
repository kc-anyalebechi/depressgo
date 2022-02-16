// import React, { useEffect, useState } from "react";
import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import QuoteOfDay from "./Main/QuoteOfDay";
import StayInspired from "./Main/StayInspired";
import ContactUs from "./Main/ContactUs";
import NeedHelp from "./Main/NeedHelp";
import Footer from "./Footer/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import GreenBtn from "./Main/GreenBtn";


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

        <main>
          <Routes>
            <Route path="/Home" element={<Navigate to="/" />} />
            <Route path="/Main/QuoteOfDay" element={<QuoteOfDay />} />
            <Route path="/Main/StayInspired" element={<StayInspired />} />
            <Route path="/Main/NeedHelp" element={<NeedHelp />} />
            <Route path="/Main/ContactUs" element={<ContactUs />} />
            <Route path="/Main/GreenBtn" element={<GreenBtn />} />

          </Routes>
        </main>

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
