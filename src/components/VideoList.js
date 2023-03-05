import React from "react";

// Importing the style file
import "../css/VideoList.css";

// Importing the costume components
import VideoItem from "./VideoItem";

// Creating the VideoList compoenent
const VideoList = ({ listed, videos }) => {
  if (videos.length === 0) return;
  if (listed)
    return (
      <div className="videolist">
        {videos.map((video) => (
          <VideoItem video={video} />
        ))}
      </div>
    );
  return (
    <div className="videolist-container">
      {videos.map((video) => (
        <VideoItem video={video} />
      ))}
    </div>
  );
};

// Exporting the component
export default VideoList;
