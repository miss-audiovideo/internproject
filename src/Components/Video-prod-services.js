import React from "react";
import videoIcon from "./Images/icons/video_library_black_24dp.png";
import reviewIcon from "./Images/icons/outline_reviews_black_24dp.png";
import buildingIcon from "./Images/icons/outline_location_city_black_24dp.png";
import starIcon from "./Images/icons/outline_star_border_black_24dp.png";
import studioIcon from "./Images/icons/outline_video_camera_front_black_24dp.png";
import vrIcon from "./Images/icons/vr.png";

const VideoServices = () => {
  return (
    <>
      <div className="video-gallery">
        <div className="container-2">
          <div className="heading-container">
            <div className="services-heading position-relative">
              Video Production Services
            </div>
          </div>
          <div className="video-services-section">
            <div className="video-services-item">
              <div>
                <img src={videoIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Priceless Video Production</h3>
              <p>
                While our videos are unsurpassed, our prices are very
                competitive. In fact, we can bring our video production costs
                well below the rest.
              </p>
            </div>
            <div className="video-services-item">
              <div>
                <img src={starIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Famous Names</h3>
              <p>
                We demand the best in the business. That's why our crew have
                years of experience and industry awards. We are San Diego Video
                Production.
              </p>
            </div>
            <div className="video-services-item">
              <div>
                <img src={reviewIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Rave Reviews</h3>
              <p>
                We work hand-in-hand with our clients every step of the way.
                Now, read what they have to say about the relationships we’ve
                developed.
              </p>
            </div>
            <div className="video-services-item">
              <div>
                <img src={vrIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Beyond Reality</h3>
              <p>
                For exciting, immersive video we also have all the equipment to
                produce virtual reality videos. Both 180 and 360 landscapes in
                vivid detail.
              </p>
            </div>
            <div className="video-services-item">
              <div>
                <img src={studioIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Major Studio Services</h3>
              <p>
                Corporate video, TV commercials, Sales video, Live streaming
                video, Interactive video, Social media, VR, AR, AI and more.
              </p>
            </div>
            <div className="video-services-item">
              <div>
                <img src={buildingIcon} alt="icon" width="100%" />
              </div>
              <h3 style={{ fontWeight: "500" }}>Hollywood In San Diego</h3>
              <p>
                We have the stages, equipment and creative talent to produce any
                video. No matter how big or small a production.
              </p>
            </div>
          </div>
          <button className="our-services-btn">Our Services</button>
        </div>
      </div>
    </>
  );
};

export default VideoServices;
