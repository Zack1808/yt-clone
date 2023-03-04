import React from "react";

// Importing the style file
import "../css/VideoList.css";

// Importing the costume components
import VideoItem from "./VideoItem";

// Creating the VideoList compoenent
const VideoList = ({ listed }) => {
  const list = [
    1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 11, 1, 11, 11, 1, 1, 1, 1, 1, 1,
  ];

  if (listed)
    return (
      <div className="videolist">
        {list.map((item) => (
          <VideoItem />
        ))}
      </div>
    );

  return (
    <div className="videolist-container">
      {list.map((item) => (
        <VideoItem />
      ))}
    </div>
  );
};

// Exporting the component
export default VideoList;
