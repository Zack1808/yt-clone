import React from "react";

// Importing the costume components
import Header from "./Header";

// Importing the style file
import "../css/App.css";
import SideBar from "./SideBar";

// Creating the App component
const App = () => {
  return (
    <div className="app-container">
      <Header />
      <SideBar />
    </div>
  );
};

// Exporting the App component
export default App;
