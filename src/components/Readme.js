import React from "react";
import "./Readme.css";
import pro1 from "../images/1.png";
import pro2 from "../images/2.png";
import pro3 from "../images/3.png";
import pro4 from "../images/4.png";
function Readme(props) {
  return (
    <div className="readme">
      <div className="linear-gradient6"></div>
      <div className="readme-grid">
        <div className="pro1">
          <div className="grid1-img">
            <img src={pro1}></img>
           <div className="pro-dsc"><p>Sven Väth Live in ibiza</p></div> 
          </div>
          <div className="grid1-but">
            <button>READ ME</button>
          </div>
        </div>
        <div className="pro2">
          <div className="grid2-img">
            <img src={pro2}></img>
            <div className="pro-dsc"><p>SKG Festival</p></div>
          </div>
          <div className="grid2-but">
            <button>READ ME</button>
          </div>
        </div>
        <div className="pro3">
          <div className="grid3-img">
            <img src={pro3}></img>
            <div className="pro-dsc"><p>Jorja smith In London</p></div>
          </div>
          <div className="grid3-but">
            <button>READ ME</button>
          </div>
        </div>
        <div className="pro4">
          <div className="grid4-img">
            <img src={pro4}></img>
            <div className="pro-dsc"><p>Lol world Championship</p></div>
          </div>
          <div className="grid4-but">
            <button>READ ME</button>
          </div>
        </div>
      </div>
      <hr></hr>
    </div>
  );
}

export default Readme;
