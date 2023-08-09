import React from 'react'
import "./Footer.css"

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";


const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-row">
          <h3>Support</h3>
          <p>Online Help</p>
          <p>Customer Service </p>
          <p>Shipping FAQ</p>
          <p>Warranty</p>
          <p>Mi exchange</p>
          <p>Bulk Orders</p>
          <p>User Guide</p>
          <p>Laptop Drivers</p>
          <p>Mi Screen Protect</p>
          <p>Mi Extended Wrranty</p>
          <p>Mi Complete Project</p>
          <p>Certification</p>
          <p>Service Centre</p>
        </div>
        <div className="footer-row">
          <h3>SHOP AND LEARN</h3>
          <p>Redmi Phones</p>
          <p>Tv's</p>
          <p>Audio</p>
          <p>Laptops and Tablets</p>
          <p>LifeStyle</p>
          <p>Smart Home</p>
        </div>
        <div className="footer-row">
          <h3>RETAIL STORE</h3>
          <p>Mi Store</p>
          <p>Mi Store Franchise</p>
          <p>Mi Authorised Store</p>
        </div>
        <div className="footer-row">
          <h3>ABOUT US</h3>
          <p>Xiaomi</p>
          <p>Privacy Policy</p>
          <p>User Agreement</p>
          <p>Integrity & Compliance</p>
          <p>CSR and Disclosures</p>
          <p>E-Waste Management</p>
          <p>In The Press</p>
          <p>Trust Center</p>
          <p>Culture</p>
          <p>SmartPhone Quality</p>
          <p>TV Quality</p>
          Service Quality
        </div>
        <div className="footer-row">
          <h3>Follow Mi</h3>
          <FacebookIcon />
          <TwitterIcon />
          <InstagramIcon />
          
        </div>
      </div>
      <hr />
    </>
  );
}

export default Footer