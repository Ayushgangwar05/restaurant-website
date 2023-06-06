import React from "react";
import image13 from "../images/download (3).png";
import image14 from "../images/image-1.1ff31b0de9d1fa7568ce.jpg";
import image15 from "../images/bg-4.1919f4a0eda1ea89c32f.png";

function Specialdish() {
  return (
    <div className="specialdish">
      <div className="specialdish1">
        <img src={image14} alt="" />
        <div className="specialdish2">
          <div className="specialdish3">
            <h4>SPECIAL DISH</h4>
            <h1>Lobster Tortellini</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type.
            </p>
            <br></br>
            <p className="specialparaname">
              $40.00 <span>$20.00</span>
            </p>
            <br></br>
                      <button>VIEW ALL MENU</button>
                      <div className="specialimage12">
                          <img src={image15}alt=""/>
                      </div>
          </div>
          <div className="specialdishimg">
            <img src={image13} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Specialdish;
