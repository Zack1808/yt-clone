import React from "react";

// Importing the style file
import "../css/DisplayVideo.css";

// Importing the costume components
import VideoList from "./VideoList";

// Creating the DisplayVideo component
const DisplayVideo = ({ videos, setVideo, selectedVideo }) => {
  return (
    <div className="displayvideo-container">
      <div className="video-information">
        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
        />
        <div className="video-description">
          <h2>{selectedVideo.snippet.title}</h2>
          <div className="channel">
            <div className="channel-info">
              <h4>{selectedVideo.snippet.channelTitle}</h4>
            </div>
          </div>
          <div className="description">{selectedVideo.snippet.description}</div>
        </div>
      </div>
      <VideoList
        listed
        videos={videos}
        setVideo={setVideo}
        selectedVideo={selectedVideo}
      />
    </div>
  );
};

// Exporting the DisplayVideo component
export default DisplayVideo;
