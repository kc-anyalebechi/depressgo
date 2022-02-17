import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div>
      
      <div className="theme-quote">
        <h1>
          <em>“Today is the first day of the rest of your life.”</em> 
          </h1>
          <h3>
          ~ 
          Charles E. Dederich, Sr
          </h3>
      </div>
      

      <div callName="question-section">


          <h3>How are you feeling today?</h3>
        

          <Link to="/Main/GreenBtn">
            <button>Good</button>
          </Link>
          <button>Okay</button>
          <button>Not Good</button>
        
      </div>
    </div>
  );
}

export default Home;
