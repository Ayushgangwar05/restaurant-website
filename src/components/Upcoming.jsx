import React from "react";
import image50 from "../images/news-1.948acdade9b2be9536c6.jpg";
import image51 from "../images/news-2.7922bda59e3eea7baf0b.jpg";
import image52 from "../images/news-3.e8361b439b386b039c2b.jpg";
function Upcoming() {
  return (
    <div className="Upcomingmaindiv">
      <div className="Upcomingmaindivsub">
        <h4>RECENT UPDATES</h4>
        <h1>Upcoming Event</h1>
      </div>
      <div className="Upcomingmaindivsubcard">
        <div className="Upcomingmaindivsubcard1">
          <img src={image51} alt="" />
          <div className="Upcomingmaindivsubcard1date">
            <p>15/09/2022</p>
          </div>
          <div className="Upcomingmaindivsubcard1heading">
            <h5>FOOD, FLAVOUR</h5>
            <a href="#">Flavour so good you’ll try to eat with your eyes.</a>
          </div>
        </div>
        <div className="Upcomingmaindivsubcard1">
          <img src={image50} alt="" />
          <div className="Upcomingmaindivsubcard1date">
            <p>15/09/2022</p>
          </div>
          <div className="Upcomingmaindivsubcard1heading">
            <h5>HEALTHY FOOD</h5>
            <a href="#">Flavour so good you’ll try to eat with your eyes.</a>
          </div>
        </div>
        <div className="Upcomingmaindivsubcard1">
          <img src={image52} alt="" />
          <div className="Upcomingmaindivsubcard1date">
            <p>15/09/2022</p>
          </div>
          <div className="Upcomingmaindivsubcard1heading">
            <h5>RECIPIE</h5>
            <a href="#">Flavour so good you’ll try to eat with your eyes.</a>
          </div>
        </div>
      </div>
      <div className="Upcomingbutton">
        <button>VIEW OUR BLOG</button>
      </div>
    </div>
  );
}
export default Upcoming;
