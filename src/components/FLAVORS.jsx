import React from "react";
import image1 from "../images/offer-image-1.c020474aea0ed9a09d2a.jpg";
import image2 from "../images/offer-image-2.d655d2ba6f4b2c6f7ac9.jpg";
import image3 from "../images/offer-image-3.2220579532c7ff25ef9c.jpg";
import image4 from "../images/pattern-2.dc00536f4043fe5c87ed.png";
import image5 from "../images/bg-2.8bae21f85dd8fdf29a8d.png";
import image6 from "../images/bg-1.8f7891ade2cf907c12b1.png";
function FLAVORS() {
  return (
    <div className="maindiv">
      <div className="backgroundimagediv">
        <img src={image5} alt="" />
      </div>
      <div className="maindiv2">
        <div className="maindivheading">
          <h4>FLAVORS FOR ROYALTY</h4>
          <h1>We Offer Top Notch</h1>
        </div>

        <div className="maincards">
          <div className="submaincard">
            <div className="submaincard1">
              <img src={image4} alt="" />
            </div>
            <div className="subcard3">
              <img src={image1} alt="" />
            </div>
            <div className="subcardheading">
              <a href="#">Breakfast</a>
              <br></br>
              <br></br>
              <a className="subnavbarlink" href="#">
                VIEW MENU
              </a>
            </div>
          </div>

          <div className="submaincard2">
            <div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever.
              </p>
            </div>
            <div className="submaincard3">
              <img src={image4} alt="" />
            </div>
            <div className="subcard4">
              <img src={image2} alt="" />
            </div>
            <div className="subcardheading1">
              <a href="#">Appetizers</a>
              <br></br>
              <br></br>
              <a className="subnavbarlink" href="#">
                VIEW MENU
              </a>
            </div>
          </div>
          <div className="submaincard">
            <div className="submaincard1">
              <img src={image4} alt="" />
            </div>
            <div className="subcard3">
              <img src={image3} alt="" />
            </div>
            <div className="subcardheading">
              <a href="#">Drinks</a>
              <br></br>
              <br></br>
              <a className="subnavbarlink" href="#">
                VIEW MENU
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundimagediv2">
        <img src={image6} alt="" />
      </div>
    </div>
  );
}
export default FLAVORS;
