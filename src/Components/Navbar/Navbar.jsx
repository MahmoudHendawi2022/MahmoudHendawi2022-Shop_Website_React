import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import cart_icon from "../Assets/cart_icon.png";
import NavLogo from "../NavLogo/NavLogo";
import { shopContext } from "../../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const x1 = useNavigate();
  const { getTotalProductLength } = useContext(shopContext);
  const menuRef = useRef();
  const barRef = useRef();
  const liRef = useRef();
  const [menuToggle, setMenuToggle] = useState(false);
  const [open , setOpen] = useState(false)

  useEffect(()=>{
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false)
        setMenuToggle(false)
      }
    };
    document.addEventListener("mousedown",handler)
    document.addEventListener("scroll",handler)
    // return()=>{
    //   document.removeEventListener("mousedown",handler)
    // }
  })


  const dropDownToggle = (e) => {
    setOpen(!open)
    // menuRef.current.classList.toggle("nav-menu-visiable");
    setMenuToggle(!menuToggle);
  };

  const liOnclickFunction = (x)=>{
    setOpen(false)
    setMenuToggle(false)
    setMenu(x)
  }
  
  return (
    <div className="navbar"  ref={menuRef}>
      <div className="containers">
        <NavLogo />
        <ul className={`nav-menu ${open?"nav-menu-visiable" : ""}`} >
          <li ref={liRef} onClick={() => {liOnclickFunction("shop")}}><Link to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
          <li ref={liRef} onClick={() => {liOnclickFunction("mens")}}><Link to="/mens">Mens</Link> {menu === "mens" ? <hr /> : <></>}</li>
          <li ref={liRef} onClick={() => {liOnclickFunction("womans")}}><Link to="/womans">Womens</Link>{" "}{menu === "womans" ? <hr /> : <></>}</li>
          <li ref={liRef} onClick={() => {liOnclickFunction("kids")}}><Link to="/kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
          <button ref={liRef} className="navBtn button-nav-responsive" onClick={() => {x1("/loginSignUp");setOpen(false);
    setMenuToggle(false)}}>Login</button>
        </ul> 
        
        <div className="nav-login">
          <button className="navBtn" onClick={() => x1("/loginSignUp")}>Login</button>
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className="cart-icon-number">{getTotalProductLength()}</div>
          <FontAwesomeIcon icon={menuToggle ? faTimes : faBars} className="bars" onClick={dropDownToggle} ref={barRef}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
