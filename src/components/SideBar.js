import React from "react";
import {
  UilEstate,
  UilMusic,
  UilBrain,
  UilArrow,
  UilMoonEclipse,
} from "@iconscout/react-unicons";

// Importing the style file
import "../css/SideBar.css";

// Creating the SideBar component
const SideBar = () => {
  return (
    <div className="sidebar-container">
      <button>
        <div className="icon">
          <UilEstate />
          <small>Home</small>
        </div>
        <span>Home</span>
      </button>
      <button>
        <div className="icon">
          <UilMusic />
          <small>Music</small>
        </div>
        <span>Music</span>
      </button>
      <button>
        <div className="icon">
          <UilBrain />
          <small>Science</small>
        </div>
        <span>Science</span>
      </button>
      <button>
        <div className="icon">
          <UilArrow />
          <small>Programming</small>
        </div>
        <span>Programming</span>
      </button>
      <button>
        <div className="icon">
          <UilMoonEclipse />
          <small>Toggle DarkMode</small>
        </div>
        <span>Toggle DarkMode</span>
      </button>
    </div>
  );
};

// Exporting the SideBar component
export default SideBar;
