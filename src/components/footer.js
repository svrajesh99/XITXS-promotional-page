import React from "react";
import "./footer.css";
function footer(props) {
  return (
    <div className="footer">
      <div className="foooter-grid">
      <a href="#"><p>HOME</p></a>
      <a href="#"><p>ABOUT</p></a>
      <a href="#"><p> OUR CLIENTS</p></a>
      <a href="#"><p>JOBS</p></a>
      <a href="#"><p>BLOG</p></a>
      <a href="#"><p>CONTACT</p></a>
      </div>
      <hr></hr>
      <div className="publisher">©2021. Xtixs. All Rights Reserved</div>
      <div className="footer-right">
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookie Policy </a>
        <a href="#">Acceptable use policy</a>
      </div>
      <div className="linear-gradient8"></div>
    </div>
  );
}

export default footer;
