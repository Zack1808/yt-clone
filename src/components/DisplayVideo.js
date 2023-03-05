import React from "react";

// Importing the style file
import "../css/DisplayVideo.css";

// Importing the costume components
import VideoList from "./VideoList";

// Creating the DisplayVideo component
const DisplayVideo = ({ videos }) => {
  return (
    <div className="displayvideo-container">
      <div className="video-information">
        <iframe src="https://unsplash.it/800" />
        <div className="video-description">
          <h2>Video Title</h2>
          <div className="channel">
            <img src="https://unsplash.it/800" alt="" />
            <div className="channel-info">
              <h4>Channel name</h4>
              <small>2.52M subscribers</small>
            </div>
          </div>
          <div className="description">Video description</div>
        </div>
      </div>
      <VideoList listed videos={videos} />
    </div>
  );
};

// Exporting the DisplayVideo component
export default DisplayVideo;
