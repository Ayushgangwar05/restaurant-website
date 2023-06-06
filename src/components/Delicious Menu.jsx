import React from "react";
import image19 from "../images/menu-image-5.82f62d04acb6111c989f.png";
import image20 from "../images/menu-image-6.1e64cf3019cac040ec9f.png";
import image21 from "../images/menu-image-7.6b0c1db809a2a1fe6b45.png";
import image22 from "../images/menu-image-8.248ea7ed7b0fe0e7b354.png";
import image23 from "../images/menu-image-9.2d536b53e3eaa8df3e3d.png";
import image24 from "../images/menu-image-10.cedb6922e903ab4051f1.png";
import image25 from "../images/bg-6.c1e0ae1fefd7dd68d5c6.png";
import image26 from "../images/bg-5.aada0ae02d8a7acdeaf7.png";
function DeliciousMenu() {
  return (
    <div className="maincontainer">
      <div className="submaincontainer">
        <h4>SPECIAL SELECTION</h4>
        <h1>Delicious Menu</h1>
      </div>
      <div className="subcontainernav">
        <div className="subcontainersubnav">
          <ul>
            <a href="#">
              <li>MORNING</li>
            </a>
            <a href="#">
              <li>WEEKDAY LUNCH</li>
            </a>
            <a href="#">
              <li>DINNER</li>
            </a>
            <a href="#">
              <li>WINES</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="maincontainerforimage">
        <div className="subdivcontainerimages">
          <div className="subdivcontainerimages1">
            <a href="#">
              <img src={image19} alt="" />
            </a>
            <div className="maindivcontainerinteral">
              <div className="subdivcontainerlink">
                <a className="interallink" href="#">
                  Greek Salad
                </a>
                <div className="blankdiv"></div>
                <div className="ratediv">
                  <p>$25.50</p>
                </div>
              </div>
              <div className="linksubdivcontain">
                <a href="#">
                  Tomatoes, green bell pepper, sliced cucumber onion, olives,
                  and feta cheese.
                </a>
              </div>
            </div>
          </div>
          <div className="subdivcontainerimages1">
            <a href="#">
              <img src={image20} alt="" />
            </a>
            <div className="maindivcontainerinteral">
              <div className="subdivcontainerlink">
                <a className="interallink" href="#">
                  Lasagne<span>SEASONAL</span>
                </a>
                <div className="blankdiv3"></div>
                <div className="ratediv">
                  <p>$40.00</p>
                </div>
              </div>
              <div className="linksubdivcontain">
                <a href="#">
                  Vegetables, cheeses, ground meats, tomato sauce, seasonings
                  and spices
                </a>
              </div>
            </div>
          </div>
          <div className="subdivcontainerimages1">
            <img src={image21} alt="" />
            <div className="maindivcontainerinteral">
              <div className="subdivcontainerlink">
                <a className="interallink" href="#">
                  Butternut<span>Pumpkin</span>
                </a>
                <div className="blankdiv3"></div>
                <div className="ratediv">
                  <p>$10.00</p>
                </div>
              </div>
              <div className="linksubdivcontain">
                <a href="#">
                  Typesetting industry lorem Lorem Ipsum is simply dummy text of
                  the priand.
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="blankdiv1"></div>
        <div className="subdivcontainerimages">
          <div className="subdivcontainerimages1">
            <img src={image22} alt="" />
            <div className="maindivcontainerinteral">
              <div className="subdivcontainerlink">
                <a className="interallink" href="#">
                  Tokusen Wagyu<span>NEW</span>
                </a>
                <div className="blankdiv"></div>
                <div className="ratediv">
                  <p>$39.00</p>
                </div>
              </div>
              <div className="linksubdivcontain">
                <a href="#">
                  Vegetables, cheeses, ground meats, tomato sauce, seasonings
                  and spices.
                </a>
              </div>
            </div>
          </div>

          <div className="subdivcontainerimages1">
            <img src={image23} alt="" />
            <div className="maindivcontainerinteral">
              <div className="subdivcontainerlink">
                <a className="interallink" href="#">
                  Olivas Rellenas
                </a>
                <div className="blankdiv"></div>
                <div className="ratediv">
                  <p>$25.00</p>
                </div>
              </div>
              <div className="linksubdivcontain">
                <a href="#">
                  Tomatoes, green bell pepper, sliced cucumber onion, olives,
                  and feta cheese.
                </a>
              </div>
            </div>
          </div>
          <div className="subdivcontainerimages1">
            <img src={image24} alt="" />
            <div className="maindivcontainerinteral">
              <div className="subdivcontainerlink">
                <a className="interallink" href="#">
                  Opu Fish
                </a>
                <div className="blankdiv"></div>
                <div className="ratediv">
                  <p>$49.00</p>
                </div>
              </div>
              <div className="linksubdivcontain">
                <a href="#">
                  Vegetables, cheeses, ground meats, tomato sauce, seasonings
                  and spices
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="backgroundimagediv">
        <img src={image26} alt="" />
      </div>

      <div className="deliciouspara">
        <p>During winter daily from 7:00 pm to 9:00 pm</p>
        <button>VIEW ALL MENU</button>
      </div>
      <div className="backgroundimagediv1">
        <img src={image25} alt="" />
      </div>
    </div>
  );
}
export default DeliciousMenu;
