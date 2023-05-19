import React from "react";
import "./review.css";
import ring1 from "../images/ring1.png";
import ring2 from "../images/ring2.png";
import ring3 from "../images/ring3.png";
import ring4 from "../images/ring4.png";
function review(props) {
  return (
    <div className="review">
      <div className="review-grid">
        <div>
          <p className="p1">1 M+</p>
          <img src={ring1} />
          <p className="p2">Engaged email subscribers</p>
        </div>
        <div>
          <p className="p1">13+</p>
          <img src={ring2} />
          <p className="p2">Locations on all continents</p>
        </div>
        <div>
          <p className="p1">80+</p>
          <img src={ring3} />
          <p className="p2">Active countries and translated into 10+ languages</p>
        </div>
        <div>
          <p className="p1">300k+</p>
          <img src={ring4} />
          <p className="p2">Social media followers</p>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default review;
