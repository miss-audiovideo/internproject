import React, { useEffect, useRef } from "react";
import image1 from "./Images/featured/1.jpg";
import image2 from "./Images/featured/2.jpg";
import image3 from "./Images/featured/3.jpg";
import image4 from "./Images/featured/4.jpg";
import image5 from "./Images/featured/5.jpg";
import image6 from "./Images/featured/6.jpg";
import image7 from "./Images/featured/7.jpg";

const FeaturedServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const scroll = window.addEventListener("scroll", () => {
      const img = document.querySelectorAll(".featured-img");
      const img1 = document.querySelectorAll(".featured-img1");
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > sectionRef.current.offsetTop - 250) {
        img.forEach((item) => {
          item.style.opacity = "1";
          item.style.transform = "translateY(0%)";
        });
        img1.forEach((item1) => {
          item1.style.opacity = "1";
          item1.style.transform = "translateY(0%)";
        });
      }
    });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  return (
    <>
      <div ref={sectionRef} className="featured-services-section">
        <div className="container-2">
          <div className="featured-heading">
            Featured <span style={{ color: "#82dade" }}>Services</span>
          </div>
          <div className="underline" />
          <div className="featured-img-container">
            <div className="featured-img">
              <img src={image1} alt="image1" width="100%" />
              <div className="featured-img-text">Promo</div>
            </div>
            <div className="featured-img1">
              <img src={image2} alt="image1" width="100%" />
              <div className="featured-img-text">Interactive</div>
            </div>
            <div className="featured-img">
              <img src={image3} alt="image1" width="100%" />
              <div className="featured-img-text">Webshow</div>
            </div>
            <div className="featured-img1">
              <img src={image4} alt="image1" width="100%" />
              <div className="featured-img-text">Live</div>
            </div>
            <div className="featured-img">
              <img src={image5} alt="image1" width="100%" />
              <div className="featured-img-text">Social Media</div>
            </div>
            <div className="featured-img1">
              <img src={image6} alt="image1" width="100%" />
              <div className="featured-img-text">Website</div>
            </div>
            <div className="featured-img">
              <img src={image7} alt="image1" width="100%" />
              <div className="featured-img-text">Drone</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedServices;
