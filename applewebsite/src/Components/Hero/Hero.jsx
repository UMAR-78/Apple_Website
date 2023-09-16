import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="mainDiv">
        <div className="HeroSection">
          <h1 className="MainHeading">iPhone 15 Pro</h1>
          <h2 className="secondHanding">Titanium.So strong.So light.So Pro.</h2>
          <p className="thirdHeading">Available starting 9.22</p>
          <div className="spansss">
            <span>Learn more &gt;</span>
            <span>Pre- order &gt;</span>
          </div>
          <div>
            <img
              className="HeroImage"
              src="./Apple1-removebg-preview.png"
              alt=""
            />
          </div>
        </div>

        <div className="HeroSection heroSection2">
          <h1 className="MainHeading">iPhone 15 Pro</h1>
          <p className="secondHanding">New Camera.New Design.Newphoria</p>
          <p className="thirdHeading">Available starting 9.22</p>
          <div className="spansss">
            <span>Learn more &gt;</span>
            <span>Pre- order &gt;</span>
          </div>
          <div>
            <img className="AppleImage" src="./Apple2.jpeg" alt="" />
          </div>
        </div>

        <div className="HeroSection heroSection3">
          <img className="watchImage" src="./Watch.png" alt="" />
          <p className="secondHanding">Smarter.Brigter.Mighter</p>
          <p className="thirdHeading">Available starting 9.22</p>
          <div className="spansss">
            <span>Learn more &gt;</span>
            <span>Pre- order &gt;</span>
          </div>
          <div>
            <img className="WacthesImage" src="./Watches.jpeg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
