import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Quote() {
  return (
    <div>
      <h3>How are you feeling?</h3>

      <Link to="/GreenBtn">
        <button>Good</button>
      </Link>

      <button>So-So</button>
      <button>Bad</button>
    </div>
  );
}

export default Quote;
