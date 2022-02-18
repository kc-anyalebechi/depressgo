import React from "react";

import {mehQuotes} from "../QuotesApiData/mehQuotes"

function yellowBtn() {
    // const randomNumber = Math.floor(Math.random() * 3)
    const randomNumber = Math.floor(Math.random() * mehQuotes.length)

    console.log(Math.random())
    console.log (Math.floor(Math.random()))
    console.log(randomNumber)
    console.log(mehQuotes.length)

    
  return (

    <div className="randomQuote">
      
      <div>
        <h1>"{mehQuotes[randomNumber].quote}"</h1>
        <h3>~{mehQuotes[randomNumber].author}</h3>

        
      </div>
    </div>
  );
}

export default yellowBtn;
