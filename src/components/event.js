import React from "react";
import "./event.css";
import profile2 from "../images/profile1.png";
import profile3 from "../images/profile2.png";
import profile1 from "../images/profile3.png";
import d1 from "../images/d3.png";
import d3 from "../images/d2.png";
import d2 from "../images/d1.png";
function event(props) {
  return (
    <div className="event">
      <div className="linear-gradient2"></div>
      <div>
        <p className="p11">WHAT WE DO</p>
        <p className="p21">
          XTIXS provides an enhanced and alternative method to a ticketing
          industry often profiting from lack of transparency. Our platform is an
          all-in-one solution for creating events, buying and selling tickets,
          live streaming. We exist to add value to both client and customers
          alike.
        </p>
      </div>
      <div className="profile-grid">
        <div className="grid-item">
          <img className="profile1" src={profile1}></img>
          <img className="d1" src={d1}></img>
          <p className="grid-heading">
            <b>FOR ATTENDEES</b>
          </p>
          <p>
            Get extra security with a unique digital ID bought through XTIXS
            when registering for events, buying, selling or transferring your
            tickets.
          </p>
        </div>
        <div className="grid-item">
          <img className="profile2" src={profile2}></img>
          <img className="d2" src={d2}></img>
          <p className="grid-heading">
            <b>FOR ORGANISERS</b>
          </p>
          <p>
            Create unlimited online, live or hybrid events for free, track your
            progress through FanXP and pay zero set-up or monthly fees.
          </p>
        </div>
        <div className="grid-item">
          <img className="profile3" src={profile3}></img>
          <img className="d3" src={d3}></img>
          <p className="grid-heading">
            <b>FOR SOCIETY</b>
          </p>
          <p>
            XTIXS is a business that gives back to the community. We donate a of
            ours booking fees to non profit organizations aiming to make impact
            on the planet.{" "}
          </p>
        </div>
      </div>
      <div>
      </div>
      <div className="linear-gradient3"></div>
      <hr></hr>
    </div>
  );
}

export default event;
