import React, { useState, useEffect } from "react";

// Importing the costume components
import Header from "./Header";

// Importing the style file
import "../css/App.css";

// Importing the costume components
import SideBar from "./SideBar";
import VideoList from "./VideoList";
import DisplayVideo from "./DisplayVideo";

// Importing the API
import fetchVideos from "../api/fetchVideos";

// Creating the App component
const App = () => {
  // Setting up state
  const [sidebar, setSidebar] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState({});
  const [dark, setDark] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  // Fetching the videos
  const getVideos = async () => {
    const response = await fetchVideos("/search", {
      params: {
        q: "reactjs",
      },
    });
    setVideos(response.data.items);
  };

  return (
    <div className={`app-container ${dark ? "dark" : ""}`}>
      <Header toggle={setSidebar} />
      <div className="content">
        <SideBar active={sidebar} toggleDark={setDark} />
        {Object.keys(selectedVideo).length === 0 ? (
          <VideoList videos={videos} setVideo={setSelectedVideo} />
        ) : (
          <DisplayVideo
            videos={videos}
            setVideo={setSelectedVideo}
            selectedVideo={selectedVideo}
          />
        )}
        {console.log(selectedVideo, Object.keys(selectedVideo))}
      </div>
    </div>
  );
};

// Exporting the App component
export default App;
