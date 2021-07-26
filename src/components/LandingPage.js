import React from "react";
import Img0 from "../marketing/image.jpg";
import Img1 from "../marketing/image2.jpg";
import Img2 from "../marketing/image3.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className="items">
        <div className="wrapper">
          <div className="landing-div">
            <img src={Img0} alt="#" />
            <p className="text2">some text </p>
          </div>
        </div>
      </div>

      <div className="items">
        <div className="wrapper">
          <img src={Img1} alt="#" />
          <p className="text2">some text </p>
        </div>
      </div>
      <div className="items">
        <div className="wrapper">
          <img src={Img2} alt="#" />
          <p className="text2">some text </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
