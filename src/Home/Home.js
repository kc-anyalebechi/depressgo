import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

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
      

      <div>

        <div className="feelingQuestion">
          <h3>How are you feeling today?</h3>
        </div>

        <div className="feelingBtns">
          <Link to="/Main/GreenBtn">
            <button1>Good</button1>
          </Link>
          <button2>Okay</button2>
          <button3>Not Good</button3>
        </div>

      </div>
    </div>
  );
}

export default Home;
