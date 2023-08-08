import React from "react";
import "./Navbar.css";
import { useState } from "react";
import logo from "../../assets/images/xiaomi-logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";




const Navbar = () => {
  const [state, setState] = useState(false);
  return (
    <>
      <div className={state === false ? "navbar" : "navbar1"}>
        <img className="logo" src={logo} alt="" />
        <span>
          <ul className={state === false ? "left-list" : "left-list1"}>
            <li className={state === false ? "first-list" : "first-list1"}>
              Store
            </li>

            <li className={state === false ? "first-list" : "first-list1"}>
              Phone
            </li>

            <li className={state === false ? "first-list" : "first-list1"}>
              TV & Smart Home
            </li>

            <li className={state === false ? "first-list" : "first-list1"}>
              Laptop & Tablet
            </li>
            <li className={state === false ? "first-list" : "first-list1"}>
              LifeStyle
            </li>
          </ul>
        </span>

        <span className={state === false ? "nav-right" : "nav-right1"}>
          <ul className={state===false?"right-list":"right-list-2"}>
            <li className={state===false?"second-list discover":"second-list-2 "}>Discover</li>
            <li className={state===false?"second-list support":"second-list-2 "}>Support</li>
            <li className={state===false?"second-list search-icon":"second-list-2 "}><SearchIcon/></li>
            <li className={state===false?"second-list cart-icon":"second-list-2 "}><ShoppingCartIcon/></li>
            <li className={state===false?"second-list support profile-icon":"second-list-2 "}><PersonOutlineIcon/></li>
          </ul>
        </span>
        <span className="menubar" onClick={() => setState(!state)}>
          {" "}
          <MenuIcon/>
         
        </span>
      </div>
    </>
  );
};

export default Navbar;
