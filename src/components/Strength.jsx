import React from "react";
import image40 from "../images/download (4).png";
import image41 from "../images/download (5).png";
import image42 from "../images/download (6).png";
import image43 from "../images/download (7).png";
import image44 from "../images/bg-8.11bc61489e11b03a92c1.png";
function Strength() {
  return (
    <div className="Strengthmainclass">
      <div className="Submaindivstrength">
        <h4>WHY CHOOSE US</h4>
        <h1>Our Strength</h1>
      </div>
      <div className="Strengthcarddiv">
        <div className="Strengthcarddiv1">
          <img src={image40} alt="" />
          <h3>Hygienic Food</h3>
          <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
        </div>
        <div className="Strengthcarddiv1">
          <img src={image41} alt="" />
          <h3>Fresh Environment</h3>
          <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
        </div>
        <div className="Strengthcarddiv1">
          <img src={image42} alt="" />
          <h3>Skilled Chefs</h3>
          <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
        </div>
        <div className="Strengthcarddiv1">
          <img src={image43} alt="" />
          <h3>Event & Party</h3>
          <p>Lorem Ipsum is simply dummy printing and typesetting.</p>
        </div>
      </div>
      <div className="Strengthcarddiv1img">
        <img src={image44} alt="" />
      </div>
    </div>
  );
}
export default Strength;
