import React from "react";
import design from "../images/design.png";
import scr1 from "../images/scr1.png";
import scr2 from "../images/scr2.png";
import xtixs from "../images/xtixs.png";
import "./Demo.css";
function Demo(props) {
  return (
    <div className="demo">
      <div className="grid">
        <div className="title">
          <p className="heading">
            FOR TRUE <br></br> CXREATORS
          </p>
          <p className="description">
            We are building a future proof ticketing platform with a
            collaborative mindset, appreciating the nuances of being an
            extension of your brand when engaging with your fans. A flexible and
            proactive attitude that will make xtixs feel like your partner
            rather than a service provider.
          </p>
          <button><b>BOOK A DEMO</b></button>

          {/* <img src={design}></img> */}
        </div>

        <div className="scr1">
          <img src={scr2}></img>
        </div>
        <div className="scr2">
          <img src={scr1}></img>
        </div>
      </div>
      <div className="xtixs">
      <img src={xtixs}></img></div>
      <div className="linear-gradient1"></div>
      <hr></hr>
    </div>
  );
}

export default Demo;
