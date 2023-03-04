import React, { useState } from "react";

// Importing the costume components
import Header from "./Header";

// Importing the style file
import "../css/App.css";

// Importing the costume components
import SideBar from "./SideBar";
import VideoList from "./VideoList";

// Creating the App component
const App = () => {
  // Setting up state
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="app-container">
      <Header toggle={setSidebar} />
      <div className="content">
        <SideBar active={sidebar} />
        <VideoList />
      </div>
    </div>
  );
};

// Exporting the App component
export default App;
