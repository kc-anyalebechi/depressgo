import React from "react";
import { Link } from "react-router-dom";
import "./home.css"; 

function Home() {
  return (
    <div>
      <div className="theme-quote">
        <p>
          “Today is the first day of the rest of your life.” ~ Attributed to
          Charles E. “Chuck” Dederich, Sr
        </p>
      </div>
      <div>
        <h3>How are you feeling today?</h3>

        <Link to="/Main/GreenBtn">
          <button>Good</button>
        </Link>

        <button>So-So</button>
        <button>Bad</button>
      </div>
    </div>
  );
}

export default Home;
