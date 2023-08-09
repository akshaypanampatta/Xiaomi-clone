import React from "react";
import "./Container.css";
import picture1 from "../../assets/images/picture1.jpg";
import picture2 from "../../assets/images/picture2.jpg";
import picture3 from "../../assets/images/picture3.jpg";
import picture4 from "../../assets/images/picture4.jpg";


const Container = () => {
  return (
    <>
      <div className="cont">
        <div className="top-images">
          <div className="firstset">
            <img className="picture1" src={picture1} alt="" />
            <div className="text1">
              <h2>Smart Choices for Stronger India</h2>
              <h4>Sale is Live</h4>
              <h5>Shop Now</h5>
            </div>
          </div>
          <div>
            <div className="secondset">
              <img className="picture2" src={picture2} alt="" />
              <div className="text2">
                <h2>Redmi Watch 3 Active</h2>
                <h4>Sale is Live</h4>
                <h5>Shop Now</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-images">
          <div className="thirdset">
            <img className="picture3" src={picture3} alt="" />
            <div className="text3">
              <h2>Redmi Watch 3 Active</h2>
              <h4>Sale is Live</h4>
              <h5>Shop Now</h5>
            </div>
          </div>
          <div className="fourthset">
            <img className="picture4" src={picture4} alt="" />
            <div className="text4">
              <h2>Laptops & Tablets</h2>
              <h4>Sale is Live</h4>
              <h5>Shop Now</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
