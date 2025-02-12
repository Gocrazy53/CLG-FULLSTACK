import React from "react";
import "./VideoSection.css"
const VideoSection = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video-player" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoSection;
