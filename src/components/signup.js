import React from "react";
import "./signup.css";
import sign from "../images/signup.png";
function signup(props) {
  return (
    <div className="signup">
      <div className="linear-gradient7"></div>
      <div className="signup-dsc">
        <img src={sign}></img>
      </div>
      <div className="form">
        <p>FILL THE FORM</p>
        <input type="text" placeholder="FIRST NAME"></input>
        <input type="text" placeholder="LAST NAME"></input>
        <br></br>
        <input
          id="email"
          type="email"
          placeholder="ENTER YOUR E-MAIL..."
        ></input>
        <br></br>
        <button>Submit</button>
      </div>
    </div>
  );
}

export default signup;
