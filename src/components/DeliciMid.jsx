import React from "react";
import image34 from "../images/image-2.a39c46e803cccd321e96.jpg";
import image35 from "../images/author-thumb-1.aab523c54dd89962db1f.jpg";
import image36 from "../images/author-thumb-2.c4665c85dc4694b6b4df.jpg";
import image37 from "../images/author-thumb-3.e83894eedcbad091c25e.jpg";
import image38 from "../images/bg-7.b534b54c0ed20ec92dcf.png"
function DeliciMid() {
  return (
    <div className="delicimidmainpage">
      <div className="midmaincontainer">
        <div className="midmaincontainer1">
          <h1>"</h1>
          <p>
            I wanted to thank you for inviting me down for that amazing dinner
            the other night. The Food was extraordinary.
          </p>
        </div>
        <div className="midmaincontainer1img">
          <img src={image35} alt="" />
          <img src={image36} alt="" />
          <img src={image37} alt="" />
        </div>
      </div>
      <div className="maindivinputtag">
        <div className="Reservation">
          <div className="Reservation1">
            <h1>Online Reservation</h1>
            <p>Booking request +88-123-123456 or fill out the order form </p>
            <div className="inputbox">
              <input type="text" id="text65" placeholder="Your Name" required />
              <input
                type="Number"
                id="number"
                placeholder="Phone Number"
                required
              />
              <div className="inputbox1">
                <select name="select">
                  <option value={"value1"}>person1</option>
                  <option value={"value2"}>person2</option>
                  <option value={"value3"}>person3</option>
                  <option value={"value4"}>person4</option>
                  <option value={"value5"}>person5</option>
                  <option value={"value6"}>person6</option>
                  <option value={"value7"}>person7</option>
                </select>
                <select name="select">
                  <option value={"value1"}>DD//MM//Year</option>
                  <option value={"value2"}>DD//MM//Year</option>
                  <option value={"value3"}>DD//MM//Year</option>
                  <option value={"value4"}>DD//MM//Year</option>
                  <option value={"value5"}>DD//MM//Year</option>
                  <option value={"value6"}>DD//MM//Year</option>
                  <option value={"value7"}>DD//MM//Year</option>
                </select>
                <select name="select">
                  <option value={"value1"}>09:AM</option>
                  <option value={"value2"}>10:AM</option>
                  <option value={"value3"}>11:AM</option>
                  <option value={"value4"}>01:PM</option>
                  <option value={"value5"}>09:PM</option>
                  <option value={"value6"}>10:PM</option>
                  <option value={"value7"}>11:PM</option>
                </select>
              </div>
              <div className="inputbutton">
                <button>BOOK A TABLE</button>
              </div>
            </div>
          </div>
          <div className="contactus">
            <h1>Contact Us</h1>
            <h4>Booking Request</h4>
            <a href="#">+88-123-123456</a>
            <h5>Location</h5>
            <p>
              Restaurant St, Delicious City,<br></br> London 9578, UK
            </p>
            <h5>Lunch Time</h5>
            <p>
              Monday to Sunday <br></br>11.00 am - 2.30pm
            </p>
            <h5>Dinner Time</h5>
            <p>
              Monday to Sunday <br></br>05.00 pm - 10.00pm
            </p>
          </div>
        </div>
      </div>
      <div className="Enddelciouspage">
              <div className="Enddelciouspageimg">
                  <img src={image38}alt=""/>
        </div>
      </div>
    </div>
  );
}
export default DeliciMid;
