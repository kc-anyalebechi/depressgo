import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div>
      
      <div className="theme-quote">
        <h1>
          <em>“Today is the first day of the rest of your life.”</em> 
          <br />
          ~ 
          Charles E. Dederich, Sr
        </h1>
        </div>
      

      <div>

        <div className="feelingQuestion">
          <h3>How are you feeling today?</h3>
        </div>

        <div className="feelingBtns">
          <Link to="/Main/GreenBtn">
            <button>Good</button>
          </Link>
          <button>So-So</button>
          <button>Bad</button>
        </div>

      </div>
    </div>
  );
}

export default Home;
