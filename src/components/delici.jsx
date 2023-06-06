import React from "react";
import NavBar from "../components/navbar";
import FLAVORS from "./FLAVORS";
import EveryFlavor from "./Every Flavor";
import Specialdish from "../components/specialdish";
import DeliciousMenu from "../components/Delicious Menu";
import Specialties from "./Best Specialties";
import DeliciMid from "./DeliciMid";
import Strength from "./Strength";
import Experienced from "./EXPERIENCED";
import Upcoming from "./Upcoming";
import Offres from "./Offers";
import Watch from "./Watch";
import image70 from "../images/image-3.231c7c2566e54a4f4df4.png"
function Delici() {
  return (
    <div>
      <div>
        <NavBar />
        <FLAVORS />
        <EveryFlavor />
      </div>
      <div className="delicimainparts">
        <Specialdish />
        <div className="delicisubmainparts1">
          <img src={image70} alt="" />
        </div>
        <DeliciousMenu />
      </div>

      <div>
        <Specialties />
      </div>
      <div>
        <DeliciMid />
      </div>
      <div>
        <Strength />
      </div>
      <Experienced />
      <div>
        <Watch />
        <Upcoming />
      </div>
      <div>
        <Offres />
      </div>
    </div>
  );
}
export default Delici;
