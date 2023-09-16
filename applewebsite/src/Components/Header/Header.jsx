import React from "react";
import "./Header.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div>
          <img src="./AppleLogo.svg" alt="Apple logo" />
        </div>
        <div className="NAVBAR">
          <ul>
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/">Mac</a>
            </li>
            <li>
              <a href="/">IPad</a>
            </li>
            <li>
              <a href="/">Iphone</a>
            </li>
            <li>
              <a href="/">Watch</a>
            </li>
            <li>
              <a href="/">Vision</a>
            </li>
            <li>
              <a href="/">Airpods</a>
            </li>
            <li>
              <a href="/">TV & Home</a>
            </li>
            <li>
              <a href="/">Entertainment</a>
            </li>
            <li>
              <a href="/">Accessories</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
        <div className="">
          <AiOutlineSearch className="NavIcons" />
          <BsBag className="NavIcons" />
        </div>
      </div>
      <div className="Banner">
        Get $200–$650 in credit toward iPhone 15 or iPhone 15 Pro when you trade
        in iPhone 11 or higher.<span>See what your device is worth &gt;</span>
      </div>
    </>
  );
};

export default Header;
