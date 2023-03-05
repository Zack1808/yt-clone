import React, { useState } from "react";

// Importing the costume components
import Header from "./Header";

// Importing the style file
import "../css/App.css";

// Importing the costume components
import SideBar from "./SideBar";
import VideoList from "./VideoList";
import DisplayVideo from "./DisplayVideo";

// Creating the App component
const App = () => {
  // Setting up state
  const [sidebar, setSidebar] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [dark, setDark] = useState(false);

  return (
    <div className={`app-container ${dark ? "dark" : ""}`}>
      <Header toggle={setSidebar} />
      <div className="content">
        <SideBar active={sidebar} toggleDark={setDark} />
        {selectedVideo.length !== 0 ? <VideoList /> : <DisplayVideo />}
      </div>
    </div>
  );
};

// Exporting the App component
export default App;
