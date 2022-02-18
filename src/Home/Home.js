import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile, faFaceFrown, faFaceMeh } from "@fortawesome/free-solid-svg-icons";



function Home() {
  return (
    <div>
      <div className="theme-quote">
        <h1>
          <em>“Today is the first day of the rest of your life.”</em>
        </h1>
        <h3>~ Charles E. Dederich, Sr</h3>
      </div>

      <div className="questionSection">
        <h3 className="feelQ">How are you feeling today?</h3>
        <p>~~~✨Click On A Face Below✨~~~</p>

        <div className="buttons">
          {/* <div className="greenBtn"> */}
          <button className="greenBtn">
            <Link to="/Main/GreenBtn">
              <FontAwesomeIcon
                icon={faFaceSmile}
                style={{
                  fontSize: 100,
                  // backgroundColor: "white",
                  color: "238823",
                }}
              />
            </Link>
            <p>I'm good.</p>

          </button>
          {/* </div> */}

          <button className="yellowBtn">
            <Link to="/Main/YellowBtn">
              <FontAwesomeIcon
                icon={faFaceMeh}
                style={{
                  fontSize: 100,
                  // backgroundColor: "white",
                  color: "ffbf00",
                }}
              />
            </Link>
            <span className="meh">
            <p>Meh.</p>
            </span>

          </button>
          <button className="redBtn">
            <Link to="/Main/RedBtn">
              <FontAwesomeIcon
                icon={faFaceFrown}
                style={{
                  fontSize: 100,
                  color: "d2222d",
                }}
              />
            </Link>
            <p>I feel off.</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
