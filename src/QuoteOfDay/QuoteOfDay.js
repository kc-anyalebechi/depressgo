import React, { useEffect, useState } from "react";
import './QuoteOfDay.css' 

function QuoteOfDay() {
  const [quoteData, setQuoteData] = useState("");
      
  // API Call
  const makeAPICall = () =>
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((results) => setQuoteData(results));

  // Use Effect
  useEffect(() => {
    makeAPICall();
  }, []);
  
  const randomNumber = Math.floor(Math.random() * quoteData.length)
  console.log(randomNumber)
  console.log(quoteData.length)



  if (quoteData) {
    return (
      <div className="randomQuote">
        <h4>Today's quote is...</h4>
        <em><h1>
           "{quoteData[randomNumber].text}"
        </h1></em>
        <h3>
          ~ {quoteData[randomNumber].author === null ? 'Unknown' : quoteData[randomNumber].author}
          
        </h3>

         {/* <h3>How are you feeling?</h3>

        <div>
        <Link to="/GreenBtn" > 
         <button>Good</button>
        </Link>

        <button>So-So</button>
        <button>Bad</button>
        </div> */}

      </div>
    );
  } else {
    return <p>Loading...</p>;
  }


}

export default QuoteOfDay