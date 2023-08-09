import React, { useEffect,useState } from 'react'
import "./About.css"
import slider1 from "../../assets/images/slider1.jpg"
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import slider4 from "../../assets/images/slider4.jpg";

const About = () => {
     const imageUrls = [slider1, slider2, slider3, slider4];
     const [currentImage, setCurrentImage] = useState(0);

     useEffect(() => {
       const interval = setInterval(() => {
         setCurrentImage(
           (prevIndex) => (prevIndex + 1) % imageUrls.length
         );
       }, 2000); 
       return () => clearInterval(interval);
     }, []);
  return (
    <>
    <div className='about'>
        <div className='slider'>
            <img className='slideimage' src={imageUrls[currentImage]} alt="" />
        </div>
        <div className='add'>
            <h3 className='design'>#SuperNote #SuperDesign</h3>
            <h1>Redmi Note 12</h1>
            <h3>The Sunrise Gold colour of #RedmeNote12 is definitely <br /> getting some attention</h3>
            <h2>Buy Now</h2>
            

        </div>

    </div>
    </>
  )
}

export default About