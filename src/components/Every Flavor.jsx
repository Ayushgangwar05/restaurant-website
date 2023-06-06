import React from "react";
import image7 from "../images/bg-3.b3be8b2e8a3d049196ab.png";
import image8 from "../images/image-1.661483ecb5620eb91605.jpg";
import image11 from "../images/pattern-2.dc00536f4043fe5c87ed.png";
import image10 from "../images/image-2.1561d09bd2af250694ab.jpg";
import image12 from "../images/download (2).png";
function EveryFlavor() {
  return (
    <div className="maindiv9">
      <div className="submaindiv">
        <h4>OUR STORY</h4>
        <h1>
          Every Flavor <br></br>Tells a Story
        </h1>
        <p>
          Lorem Ipsum is simply dummy text of the printingand typesetting
          industry lorem Ipsum has been the industrys standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to make a type specimen book It has survived not only five
          centuries, but also the leap into.
        </p>
        <br></br>
        <p>Book Through Call</p>
        <a href="#"> +80 (400) 123 4567</a>
        <br></br>
        <br></br>
        <button>READ MORE</button>
        <div className="maindiv9sub">
          <img src={image7} alt="" />
        </div>
      </div>
      <div className="mainpartdiv">
        <div className="submaindiv9">
          <img src={image8} alt="" />
          <div className="submaindiv90">
            <img src={image12} alt="" />
          </div>
        </div>

        <div className="maindivflovor1">
          <div className="maindivflovor">
            <div className="submaindivflovor">
              <img src={image11} alt="" />
            </div>
            <div className="submaindiv1flovor">
              <img src={image10} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EveryFlavor;
