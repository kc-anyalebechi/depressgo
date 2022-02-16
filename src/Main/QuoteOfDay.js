import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"; 

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
      <div>
        <h4>Your Quote Of The Day...</h4>
        <p>
           "{quoteData[randomNumber].text}"
        </p>
        <p>
          ~ {quoteData[randomNumber].author === null ? 'Unknown' : quoteData[randomNumber].author}
          
        </p>

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