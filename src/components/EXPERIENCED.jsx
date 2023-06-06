import React from "react";
import image48 from "../images/team-1.13ef80b1974630746485.jpg";
import image45 from "../images/team-2.b5cdd3ec598386d90dc6.jpg";
import image46 from "../images/team-3.b9d6f81ac39cd9ccb9de.jpg";
import image47 from "../images/bg-9.8b309506e9fcec931806.png";
import image49 from "../images/bg-21.efeb7171dccd47a0f306.png"
function Experienced() {
  return (
    <div className="Experiencedmaindiv">
      <div className="Experiencedmaindivsub">
        <h4>EXPERIENCED TEAM</h4>
        <h1>Meet Our Chef</h1>
      </div>
      <div className="Experiencedcarddiv">
        <div className="Experiencedcarddiv1">
          <img src={image48} alt="" />
          <a href="#">
            <h2>Willium Joe</h2>
          </a>
          <h3>MASTER CHEF</h3>
          <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
        </div>
        <div className="Experiencedcarddiv1">
          <img src={image45} alt="" />
          <a href="#">
            <h2>Steave Den</h2>
          </a>
          <h3>MASTER CHEF</h3>
          <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
        </div>
        <div className="Experiencedcarddiv1">
          <img src={image46} alt="" />
          <a href="#">
            <h2>Lily Sopy</h2>
          </a>
          <h3>MASTER CHEF</h3>
          <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
        </div>
          </div>
          <div class="Experiencedimageclass">
              <img src={image47} alt=""/>
          </div>
          <div className="Experiencedimageclass1">
              <img src={image49}alt=""/>
          </div>
    </div>
  );
}
export default Experienced;
