import React from "react";
import image28 from "../images/menu-image-12.d21e54a8cc34de459bc8.jpg";
import image29 from "../images/menu-image-13.def913c8d8e23413a075.jpg";
import image30 from "../images/menu-image-14.cc993aeb8cae1e7c3ae7.jpg";
import image31 from "../images/menu-image-11.7be629d8a04827b964cc.jpg";
function Specialties() {
  return (
    <div specialtiessubmaindiv>
      <div className="specialtiessubmaindiv2">
        <div className="specialtiessubmaindiv3">
          <h4>SPECIAL OFFER</h4>
          <h1>Best Specialties</h1>
          <div className="specialtiessubmaindiv1">
            <div
              className="specialtiessubmaindiv"
              style={{ marginTop: "40px" }}
            >
              <img src={image28} alt="" />
              <h1>Tokusen Wagyu</h1>
              <p>Tamatoes,green bell pepper,sliced cucumber onion,olives...</p>
              <span>$45.00</span>
            </div>
            <div className="specialtiessubmaindiv">
              <img src={image29} alt="" />
              <h1>Butternut Pumpkin</h1>
              <p>
                Avocados with crab meat,red onion,crab salad red bell pepper..
              </p>
              <span>$15.00</span>
            </div>
            <div
              className="specialtiessubmaindiv"
              style={{ marginTop: "40px" }}
            >
              <img src={image30} alt="" />
              <h1>Opu Fish</h1>
              <p>Vegetables, cheeses,ground meats,tomato sauce,seasonings...</p>
              <span>$12.00</span>
            </div>
            <div className="specialtiessubmaindiv">
              <img src={image31} alt="" />
              <h1>Greek Salad</h1>
              <p>
                Avocados with crab meat,red onion,crab salad red bell pepper..
              </p>
              <span>$39.00</span>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <div className="specialitiesbutton">
          <button>VIEW ALL MENU</button>
        </div>
      </div>
    </div>
  );
}
export default Specialties;
