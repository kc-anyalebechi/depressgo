import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faClock, // the clock icon
  // faUserCircle, // the user circle icon
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

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
        <h3 className="feelQ">How are you feeling today?</h3>

        <div className="buttons">
          {/* <div className="greenBtn"> */}
          <button className="greenBtn">
            <Link to="/Main/GreenBtn">
              {/* <FontAwesomeIcon icon="fa-solid fa-face-smile-beam" /> */}
              <FontAwesomeIcon
                icon={faFaceSmile}
                style={{
                  fontSize: 100,
                  // backgroundColor: "white",
                  color: "green",
                }}
              />
            </Link>
          </button>
          {/* </div> */}

          <button className="yellowBtn">
            <Link to="/Main/GreenBtn">
              {/* <FontAwesomeIcon icon="fa-solid fa-face-smile-beam" /> */}
              <FontAwesomeIcon
                // icon={faFaceSmileBeam}
                
                style={{
                  fontSize: 100,
                  // backgroundColor: "white",
                  color: "yellow",
                }}
              />
            </Link></button>
          <button className="redBtn">
            <Link to="/Main/GreenBtn">
              <FontAwesomeIcon
                // icon={faFaceSmileBeam}
                style={{
                  fontSize: 100,
                  color: "red",
                }}
              />
            </Link></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
