import React, { useRef, useEffect, useState } from "react";
import image1 from "./Images/founder/1.jpg";
import image2 from "./Images/featured/2.jpg";
import image3 from "./Images/featured/3.jpg";
import image4 from "./Images/featured/4.jpg";
import image5 from "./Images/featured/5.jpg";
import image6 from "./Images/featured/6.jpg";
import image7 from "./Images/featured/7.jpg";

const FounderSection = () => {
  const crousalRef = useRef(null);
  const initialImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ];
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState(initialImages);
  useEffect(() => {
    const interval = setInterval(() => {
      const featuresImg = document.querySelectorAll(".featured-img2");
      featuresImg.forEach((img) => {
        img.classList.add("image-slider");
      });
      images.push(images[0]);
      images.shift();
      console.log(images);
      setImages(images);
      console.log("hi");
      featuresImg.forEach((img) => {
        img.classList.remove("image-slider");
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [images]);
  return (
    <>
      <div className="featured-services-section" style={{ overflow: "hidden" }}>
        <div
          className="featured-img-container"
          style={{ flexShrink: 0, width: "266.7%" }}
          ref={crousalRef}
        >
          {images.map((image, ind) => {
            return (
              <div className="featured-img2" key={ind.toString()}>
                <img src={image} alt="image1" width="200%" />
              </div>
            );
          })}

          {/* <div className="featured-img2">
            <img src={images[index + 1]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 2]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 3]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 4]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 5]} alt="image1" width="100%" />
          </div>
          <div className="featured-img2">
            <img src={images[index + 6]} alt="image1" width="100%" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default FounderSection;
