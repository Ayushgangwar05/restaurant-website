import React from "react";
import image52 from "../images/image-4.d995f9d301855fd7f80c.jpg";
import image56 from "../images/pattern-4.6e9add1b0612329274ab.png";
import image57 from "../images/download.png";
function Offres() {
  return (
    <div className="Offresmaindiv1">
      <div className="Offresmaindiv">
        <div className="Offresmaindivsub">
          <ul>
            <a href="#">
              <li>HOME</li>
            </a>
            <a href="#">
              <li>MENUS</li>
              <a href="#">
                <li>ABOUT US</li>
              </a>
              <a href="#">
                <li>OUR CHEFS</li>
              </a>
              <a href="#">
                <li>CONTACT</li>
              </a>
            </a>
          </ul>
        </div>
        <div className="Offresmaidivimg">
          <img src={image56} alt="" />
          <div className="Offresmaidivimgsubdiv">
            <a href="#">
              <img src={image57} alt="" />
            </a>
            <p>Restaurant St, Delicious City, London 9578, UK</p>
            <a href="#">booking@domainname.com</a>
            <br></br>
            <a href="#">Booking Request : +88-123-123456</a>
            <br></br>
            <a href="#">Open : 09:00 am - 01:00 pm</a>
            <h2>Get News & Offers</h2>
            <p>Subscribe us & Get 25% Off.</p>
            <input type="email" id="email" placeholder="Your email" />
            <button>SUBRSCRIBE</button>
          </div>
        </div>
        <div className="Offresmaidivend">
          <ul>
            <a href="#">
              <li>FACEBOOK</li>
            </a>
            <a href="#">
              <li>INSTAGRAM</li>
            </a>
            <a href="#">
              <li>TWITTER</li>
            </a>
            <a href="#">
              <li>YOUTUBE</li>
            </a>
            <a href="#">
              <li>GOOGLE MAP</li>
            </a>
          </ul>
        </div>
      </div>
      <p className="para100">
        © 2022 Restaurt. All Rights Reserved | Crafted by{" "}
        <a href="#"> Kalanidhi Themes</a>
      </p>
    </div>
  );
}
export default Offres;
