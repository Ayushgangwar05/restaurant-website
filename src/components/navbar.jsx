import React from "react";
import image2 from "../images/slider-1.427b3237a3c8fa6857c0.jpg";
import image3 from "../images/download (8).png";
import image4 from "../images/download (1).png";

function NavBar() {
  return (
    <div>
      <nav>
        <div className="navbar1">
          <div className="navbarlink">
            <a href="#">
              envato<span>market</span>
            </a>
          </div>
          <div className="button1">
            <button>Buy Now</button>
          </div>
        </div>
        <div className="mainsubnavbar">
          <div className="subnavbar">
            <div className="subnavbar1">
              <p className="paranamenavbar">
                Restaurant St, Delicious City, London 9578, UK
              </p>
              <p className="para1namenavbar"> Daily : 8.00 am to 10.00 pm</p>
            </div>
            <div className="navbarlink2">
              <a className="sublink" href="#">
                {" "}
                +1 123 456 7890
              </a>
              <a href="#"> booking@restaurant.com</a>
            </div>
          </div>
          <div className="blankdiv4"></div>

          <div className="section3">
            <img src={image3} alt="" />
            <button>Find a Table</button>
          </div>
          <div className="heading">
            <h4>
              D E L I G H T F U L <span> E X P E R I E N C E</span>
            </h4>
            <h1>
              Flavors Inspired by <br></br>the Seasons
            </h1>
            <p>Come with family & fell the joy of mouthwatering food</p>
            <button>VIEW OUR MENU</button>
          </div>
          <div className="End">
            <div></div>
            <div className="navend">
              <a href="#">
                <img className="navendimg" src={image4} alt="" />
                <p>BOOK A TABLE</p>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default NavBar;
