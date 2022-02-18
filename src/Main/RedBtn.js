import React from "react";

import {notGoodQuotes} from "../QuotesApiData/notGoodQuotes"

function RedBtn() {
    // const randomNumber = Math.floor(Math.random() * 3)
    const randomNumber = Math.floor(Math.random() * notGoodQuotes.length)

    console.log(Math.random())
    console.log (Math.floor(Math.random()))
    console.log(randomNumber)
    console.log(notGoodQuotes.length)

    
  return (

    <div className="randomQuote">
      
      <div>
        <h1>"{notGoodQuotes[randomNumber].quote}"</h1>
        <h3>~{notGoodQuotes[randomNumber].author}</h3>

        
      </div>
    </div>
  );
}

export default RedBtn;
