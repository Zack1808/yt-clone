import React from "react";

// Importing the style file
import "../css/VideoList.css";

// Importing the costume components
import VideoItem from "./VideoItem";

// Creating the VideoList compoenent
const VideoList = ({ listed, videos, setVideo, selectedVideo = {} }) => {
  if (videos.length === 0) return;
  if (listed)
    return (
      <div className="videolist">
        {videos.map((video) => {
          if (video.id.videoId !== selectedVideo.id.videoId)
            return <VideoItem video={video} setVideo={setVideo} />;
          return null;
        })}
      </div>
    );
  return (
    <div className="videolist-container">
      {videos.map((video) => (
        <VideoItem video={video} setVideo={setVideo} />
      ))}
    </div>
  );
};

// Exporting the component
export default VideoList;
