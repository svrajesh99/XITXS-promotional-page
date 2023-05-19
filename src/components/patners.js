import React from "react";
import "./partners.css";
import xtixs from "../images/xtixs.png";
import partners from "../images/partners.png";
import TandT from "../images/TandT.png";
function patners(props) {
  return (
    <div className="partners">
      <div className="partners-grid">
        <div className="partners-logo">
          <img src={partners}></img>
        </div>
        <div className="partners-dsc">
          <img src={TandT}></img>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default patners;
