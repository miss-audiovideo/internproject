import React from "react";
import video from "./Videos/Shoes Ad.MOV";

const VideoGallery = () => {
  return (
    <>
      <div className="video-gallery">
        <div className="container-2">
          <h1>Video Gallery</h1>
          <div className="video-section">
            <div className="video-section-1">
              <div className="video-1">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Lf4biDUfwug"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
              <div className="video-2">
                <iframe
                  className="a"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Lf4biDUfwug"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="b"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Lf4biDUfwug"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="c"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Lf4biDUfwug"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="video-section-2">
              <iframe
                className="a"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Lf4biDUfwug"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <iframe
                className="b"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Lf4biDUfwug"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="portfolio-btn">
            <button className="btn btn-primary">PORTFOLIO</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoGallery;
