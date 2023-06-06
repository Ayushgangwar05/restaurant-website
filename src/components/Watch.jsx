import React from "react";
import image60 from "../images/musicplaybutton.jpg";
import image61 from "../images/image-3.e321bbcd23fb672a86e4.jpg";
import image62 from "../images/pattern-2.dc00536f4043fe5c87ed.png";
function Watch() {
  return (
    <div className="Watchmaindiv">
      <div className="Watchmaindivsub">
        <h4>AMAZING EXPERIENCE</h4>
        <h1>Watch Our Video</h1>
        <div class="Watchmainimg">
          <img src={image60} alt="" />
        </div>
        <h2>
          A modern restaurant with a menu that <br></br>will make your mouth
          water.
        </h2>
        <h6>WILLIUM JOE - MASTER CHEF</h6>
        <div className="Watchimage62">
          <img src={image62} alt="" />
        </div>
        <div className="Watchmaindivmatter">
          <div className="Watchmaindivmattersub1">
            <p>150+</p>
            <div className="Watchmaindivmattersub2">
              <h5>DAILY ORDER</h5>
            </div>
          </div>
          <div className="Watchmaindivmattersub1">
            <p>82+</p>
            <div className="Watchmaindivmattersub2">
              <h5>SPECIAL DISHES</h5>
            </div>
          </div>
          <div className="Watchmaindivmattersub1">
            <p>35+</p>
            <div className="Watchmaindivmattersub2">
              <h5>EXPERT CHEF</h5>
            </div>
          </div>
          <div className="Watchmaindivmattersub1">
            <p>10+</p>
            <div className="Watchmaindivmattersub2">
              <h5>AWARDS WON</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Watch;
