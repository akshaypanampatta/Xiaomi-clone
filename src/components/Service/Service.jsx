import React from 'react'
import "./Service.css"
import mi1 from "../../assets/images/mi1.png"
import mi2 from "../../assets/images/mi2.png";
import mi3 from "../../assets/images/mi3.png";

const Service = () => {
  return (
    <>
      <div className="service">
        <div className="care">
          <h1>XIAOMI CARE</h1>
          <div className='logos'>
            <div className="image-container1">
              <div image-item>
                <img className="mi1" src={mi1} alt="" />
                <p>Mi Extended Wrranty</p>
              </div>
            </div>
            <div className="image-container2">
              <div image-item>
                <img className="mi2" src={mi2} alt="" />
                <p>Mi Screen Protect</p>
              </div>
            </div>
            <div className="image-container3">
              <div image-item>
                <img className="mi3" src={mi3} alt="" />
                <p>Mi Complete Protect</p>
              </div>
            </div>
          </div>
        </div>
        <div className="centres">
          <h1>Service Centres</h1>
          <h3>We'll guide you to the best solution </h3>
        </div>
      </div>
    </>
  );
}

export default Service