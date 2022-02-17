import React from "react";

import {goodQuotes} from "../QuotesApiData/goodQuotes"

function GreenBtn() {
    // const randomNumber = Math.floor(Math.random() * 3)
    const randomNumber = Math.floor(Math.random() * goodQuotes.length)

    console.log(Math.random())
    console.log (Math.floor(Math.random()))
    console.log(randomNumber)
    console.log(goodQuotes.length)

    
  return (

    <div className="randomQuote">
      
      <div>
        <h1>"{goodQuotes[randomNumber].quote}"</h1>
        <h3>~{goodQuotes[randomNumber].author}</h3>

        {/* <Routes>
          <Route path="/Main/GreenBtn" element={<GreenBtn />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default GreenBtn;
