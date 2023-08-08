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
          <ul className="right-list">
            <li className="second-list discover">Discover</li>
            <li className="second-list support">Support</li>
            <li className="second-list search-icon"><SearchIcon/></li>
            <li className="second-list cart-icon"><ShoppingCartIcon/></li>
            <li className="second-list profile-icon"><PersonOutlineIcon/></li>
           
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
