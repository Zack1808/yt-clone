import React from "react";

// Importing the style file
import "../css/VideoItem.css";

// Creating the VideoItem component
const VideoItem = ({ video }) => {
  return (
    <div className="videoitem-container">
      <img src={video.snippet.thumbnails.medium.url} alt="" />
      <div className="video-info">
        <div className="description">
          <h4>{video.snippet.title}</h4>
          <small>{video.snippet.channelTitle}</small>
        </div>
      </div>
    </div>
  );
};

// Exporting the VideoItem component
export default VideoItem;
