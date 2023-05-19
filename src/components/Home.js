import React, { useState } from "react";
import "./Home.css";
import language from "../images/language.png";
import { HiMenu } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import image from "../images/image.png";
import scroll from "../images/scroll.png";
import Frame from "../images/Frame.png";
import music from "../images/MUSIC.png";
import Ximage from "../images/ximage.png";
import title from "../images/title.png";
function Home(props) {
  const [active, setActive] = useState(true);
  return (
    <div className="home">
      <img className="img" src={title}></img>
      <div className="buttons">
        <button className="home-bt">HOME</button>
        <button className="sport-bt">SPORT</button>
        <button className="esport-bt">ESPORT</button>
        <img src={language} alt="language"></img>
      </div>
      <div
        className="menu"
        style={!active ? { display: "block" } : { display: "none" }}
      >
        <HiMenu
          onClick={() => {
            setActive(true);
          }}
        />
      </div>
      <div  className="cancel" style={active ? { display: "block" } : { display: "none" }}>
        <GiCancel id="cancel"
          onClick={() => {
            setActive(false);
          }}
        />
      </div>
      <div className={active ? "show-menu1" : "show-menu"}>
        <button className="home-bt">HOME</button>
        <button className="sport-bt">SPORT</button>
        <button className="esport-bt">ESPORT</button>
        <img src={language} alt="language"></img>
      </div>
      <div className="x">
        <img src={Ximage} alt="x" />
      </div>
      <div className="image">
        <img src={image} alt="image" />
      </div>
      <div className="home-footer">
        <div>
          <img className="grid-item1" src={music}></img>
        </div>
        <div>
          <img className="grid-item2" src={scroll} alt="scroll"></img>
        </div>
        <div>
          <img className="grid-item3" src={Frame} alt="frame"></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
