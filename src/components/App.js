import React, { useState, useEffect } from "react";

// Importing the costume components
import Header from "./Header";

// Importing the style file
import "../css/App.css";

// Importing the costume components
import SideBar from "./SideBar";
import VideoList from "./VideoList";
import DisplayVideo from "./DisplayVideo";
import Loader from "./Loader";

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
    setDark(JSON.parse(localStorage.getItem("yt-clone-dark-mode")));
  }, []);

  useEffect(() => {
    localStorage.setItem("yt-clone-dark-mode", JSON.stringify(dark));
  }, [dark]);

  // Fetching the videos
  const getVideos = async (q = "reactjs") => {
    const response = await fetchVideos("/search", {
      params: {
        q,
      },
    });
    setVideos(response.data.items);
  };

  // fetching new videos
  const fetchVids = (q = "reactjs") => {
    setSelectedVideo({});
    getVideos(q);
  };

  return (
    <div className={`app-container ${dark ? "dark" : ""}`}>
      <Header toggle={setSidebar} fetch={fetchVids} />
      <div className="content">
        <SideBar active={sidebar} toggleDark={setDark} fetch={fetchVids} />
        {videos.length !== 0 ? (
          <Loader />
        ) : Object.keys(selectedVideo).length === 0 ? (
          <VideoList videos={videos} setVideo={setSelectedVideo} />
        ) : (
          <DisplayVideo
            videos={videos}
            setVideo={setSelectedVideo}
            selectedVideo={selectedVideo}
          />
        )}
      </div>
    </div>
  );
};

// Exporting the App component
export default App;
