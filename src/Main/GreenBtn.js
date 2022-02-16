import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {goodQuotes} from "../QuotesApiData/goodQuotes"

function GreenBtn() {
    // const randomNumber = Math.floor(Math.random() * 3)
    const randomNumber = Math.floor(Math.random() * goodQuotes.length)

    console.log(Math.random())
    console.log (Math.floor(Math.random()))
    console.log(randomNumber)
    console.log(goodQuotes.length)

    
  return (

    <div>
      
      <div>
        <p>"{goodQuotes[randomNumber].quote}"</p>
        <p>~{goodQuotes[randomNumber].author}</p>

        {/* <Routes>
          <Route path="/Main/GreenBtn" element={<GreenBtn />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default GreenBtn;
