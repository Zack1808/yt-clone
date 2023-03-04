import React from "react";

// Importing the style file
import "../css/VideoItem.css";

// Creating the VideoItem component
const VideoItem = () => {
  return (
    <div className="videoitem-container">
      <img src="https://via.placeholder.com/500x300" alt="" />
      <div className="video-info">
        <img src="https://via.placeholder.com/500x300" alt="" />
        <div className="description">
          <h4>Video title</h4>
          <small>Creator name</small>
          <small>316k views * 2 years ago</small>
        </div>
      </div>
    </div>
  );
};

// Exporting the VideoItem component
export default VideoItem;
