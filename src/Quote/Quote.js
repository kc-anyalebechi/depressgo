import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"; 


function Quote() {
  
        const [QuoteData, setQuoteData] = useState("");
      
        // API Call
        const makeAPICall = () =>
          fetch("https://type.fit/api/quotes")
            .then((response) => response.json())
            .then((results) => setQuoteData(results));
      
        // Use Effect
        useEffect(() => {
          makeAPICall();
        }, []);
      
        if (QuoteData) {
          return (
            <div>
              <h4>Example API Call for Inspirational Quotes</h4>
              <p>
                <strong>Quote:</strong> "{QuoteData[6].text}"
              </p>
              <p>
                <strong>Author:</strong> {QuoteData[6].author}
              </p>
      
              <h3>How are you feeling?</h3>

              <div>
              <Link to="/GreenBtn" > 
               <button>Good</button>
              </Link>

              <button>So-So</button>
              <button>Bad</button>
              </div>

            </div>
          );
        } else {
          return <p>Loading...</p>;
        }
      
    
       
}

export default Quote