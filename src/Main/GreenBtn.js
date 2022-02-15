import React from "react";
import { Routes, Route } from "react-router-dom";

function GreenBtn() {
  return (
    <div>
      GreenBtn
      <Header />
      <div>
        <h3>Based on how you feeling right now lets try </h3>
        {/* <Routes>
          <Route path="/GreenBtn" element={<GreenBtn />} />
        </Routes> */}
      </div>
      <Footer />
    </div>
  );
}

export default GreenBtn;
