// import React, { useEffect, useState } from "react";
import React from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import QuoteOfDay from "./Main/QuoteOfDay";
import StayInspired from "./Main/StayInspired";
import ContactUs from "./Main/ContactUs";
import NeedHelp from "./Main/NeedHelp";
import Footer from "./Footer/Footer";
import { Route, Link, Routes, Navigate } from "react-router-dom";
import "./App.css";


function App() {
  // const [QuoteData, setQuoteData] = useState("");
  
//   useEffect (()=> {
//     const quoteUrl = 'https://zenquotes.io/api/quotes'; 
//     const makeApiCall = async () => {
//       const res = await fetch(quoteUrl);
//       const json = await res.json(); 
//       return json
//     }; 
//     makeApiCall().then((json) => {
//       setQuoteData(json.results); 
    
//   }); 

// }, []); 

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
      <h1>This the app</h1>
      <div>
        <Header />
        <nav>
          <Link to='/'>
            <h1>DepressGo</h1>
          </Link>

          <Link to="/">Home</Link>
          <Link to="/Main/QuoteOfDay">Get The Quote The Day</Link>
          <Link to="/Main/StayInspired">Stay Inspired</Link>
          <Link to="/Main/ContactUs">Contact Us</Link>
          <Link to="/Main/NeedHelp">
            Need Help? Speak To A Licensed Therapist
          </Link>
        </nav>
      </div>

      {/* *****************
      MAIN BODY SECTION
      ***************** */}

      <div className="main">
        <Main />
        <h1>the main section in the app</h1>

        <main>
          <Routes>
            <Route path="/Home" element={<Navigate to="/" />} />
            <Route path="/Main/QuoteOfDay" element={<QuoteOfDay />} />
            <Route path="/Main/StayInspired" element={<StayInspired />} />
            <Route path="/Main/NeedHelp" element={<NeedHelp />} />
            <Route path="/Main/ContactUs" element={<ContactUs />} />


          </Routes>
        </main>
      </div>

      {/* ******
      FOOTER
      ******  */}
      <div className="footer">
        <Footer />
        Footer
        <h1>the footer section in the app</h1>
      </div>
    </div>
  );
}  

export default App;
