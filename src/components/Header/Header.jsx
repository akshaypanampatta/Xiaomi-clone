import React from 'react'
import "./Header.css"
import header1 from "../../assets/images/header-image-1.webp"
import header2 from "../../assets/images/header-image-2.webp";
import { Button } from "react-bootstrap";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header1">
          <img className="image1" src={header1} alt="" />
          <div className="overlay1">
            <h1>Redmi Note 12 5g</h1>
            <h3>Now Available in sunrise Gold</h3>
            <h3>From ₹14,999*</h3>
            <Button className="btn" variant="light">
              Shop Now
            </Button>
          </div>
        </div>
        <div className="header2">
          <img className="image2" src={header2} alt="" />
          <div className="overlay2">
            <h1>xiaomi Smart TV </h1>
            <h1>X Series</h1>
            <h3>Sale is Live</h3>
            <h3>
              From ₹28,999{" "}
              <p style={{ textDecoration: "line-through" }}>₹42,999 </p>
            </h3>
            <Button className="btn" variant="light">
              Shop Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header