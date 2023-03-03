import React, { useState } from "react";

// Importing the costume components
import Header from "./Header";

// Importing the style file
import "../css/App.css";
import SideBar from "./SideBar";

// Creating the App component
const App = () => {
  // Setting up state
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className="app-container">
      <Header toggle={setSidebar} />
      <SideBar active={sidebar} />
    </div>
  );
};

// Exporting the App component
export default App;
