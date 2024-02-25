import React from "react";
import "./Footer.css";
import NavLogo from "../NavLogo/NavLogo";
import instagram from "../Assets/instagram_icon.png";
import pintester from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <footer>
      <div className="containers">
        <NavLogo />
        <ul className="userInfo">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="social">
          <li>
            <img src={instagram} alt="" />
          </li>
          <li>
            <img src={pintester} alt="" />
          </li>
          <li>
            <img src={whatsapp} alt="" />
          </li>
        </ul>
        <hr />
        <p className="copyRight">Copyright @ 2023 - All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
