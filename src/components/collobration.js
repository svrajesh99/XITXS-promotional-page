import React from "react";
import "./collobration.css";
import travel from "../images/travel.png";
import colx1 from "../images/colx.png";
import colbg from "../images/col-bg.png";
import sports from "../images/sport-col.png";
import travelcol from "../images/travel-col.png";
import xtixs from "../images/xtixs.png";
import computer from "../images/computer.png";
import stand from "../images/Stand.png";
function collobration(props) {
  return (
    <div className="collobration">
      <div className="linear-gradient4"></div>
      <div className="colx">
        <img src={colx1}></img>
      </div>
      <div className="colx-bg"></div>
      <p>
        XTIXS has multiple integrations available to ensure the relationship
        between fan and business is succinct. We are agnostic & collaborative by
        choice.
      </p>
      <div className="collobration-bt">
        <div>
          <button>SPORTS</button>
        </div>
        <div>
          <button className="collobration-bts">TICKET</button>
        </div>
        <div>
          <button className="collobration-bts">TRAVEL SOLUTION</button>
        </div>
        <div>
          <button className="collobration-bts">INSURENCE</button>
        </div>
      </div>
      <div className="collobration-grid">
        <div className="grid1">
          <div className="grid1-content">
            The world we live in is becoming increasingly unpredictable and a
            number of eventualities may arise putting your business and
            customers at risk.{" "}
          </div>
          <div className="grid1-img">
            <img src={colbg} />
          </div>
        </div>
        <div className="grid2">
          <img src={travel}></img>
        </div>
        <div className="grid3">
          <img src={sports}></img>
          <div className="grid3-dsc">
            To mitigate the risks of event cancellation,Event Protect have
            developed partnerships to support worldwide delivery of our
            comprehensive package suited to cover all types of events.
          </div>
          <div>
            <button>SPORTS</button>
          </div>
        </div>
        <div className="grid4">
          <div>
            <button className="collobration-bts">INSURENCE</button>
            <img src={travelcol} />
          </div>
        </div>
      </div>
      <div className="linear-gradient5"></div>
      <div className="preview">
        <img src={xtixs}></img>
        <div className="preview-grid">
          <div className="first"><p>Know your fans.</p></div>
          <div>
            <img id="computer" src={computer}></img>
            <img id="stand"src={stand}></img>
          </div>
          <div className="second"><p> Unlock new value.</p></div>
        </div>
      </div>
      <p id="col-footer">With FanXP, you as an event organizer get to dive deeper into your fan profile in order to deliver a better experience using data as your decision maker. Collect the identity, location and engagement habits of every fan and put that data to work. Our partner with Pumpjack simplifies the collection of data point and insights to help you grow your commercial opportunities.</p>
    <hr></hr>
    </div>
  );
}

export default collobration;
