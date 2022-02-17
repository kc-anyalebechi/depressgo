import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Home() {
  return (
    <div>
      <div className="theme-quote">
        <h1>
          <em>“Today is the first day of the rest of your life.”</em>
        </h1>
        <h3>~ Charles E. Dederich, Sr</h3>
      </div>

      <div callName="questionSection">
        <h3>How are you feeling today?</h3>

        <div className="buttons">
          {/* <div className="greenBtn"> */}
            <Link to="/Main/GreenBtn">
              <button className="greenBtn">
              <FontAwesomeIcon icon="fa-solid fa-face-smile-beam" />
              </button>
            </Link>
          {/* </div> */}

          <button className="yellowBtn">Okay</button>
          <button className="redBtn">Not Good</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
