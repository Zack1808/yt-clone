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
const SideBar = ({ active, toggleDark, fetch }) => {
  return (
    <div className="sidebar-container">
      <button className={!active && "active"} onClick={fetch}>
        <div className="icon">
          <UilEstate />
          <small className={!active && "active"}>Home</small>
        </div>
        <span className={active && "active"}>Home</span>
      </button>
      <button
        className={!active && "active"}
        onClick={() => fetch("metallica, iron maiden, acdc, linkin park")}
      >
        <div className="icon">
          <UilMusic />
          <small className={!active && "active"}>Music</small>
        </div>
        <span className={active && "active"}>Music</span>
      </button>
      <button className={!active && "active"} onClick={() => fetch("science")}>
        <div className="icon">
          <UilBrain />
          <small className={!active && "active"}>Science</small>
        </div>
        <span className={active && "active"}>Science</span>
      </button>
      <button
        className={!active && "active"}
        onClick={() => fetch("programming")}
      >
        <div className="icon">
          <UilArrow />
          <small className={!active && "active"}>Programming</small>
        </div>
        <span className={active && "active"}>Programming</span>
      </button>
      <button
        className={!active && "active"}
        onClick={() => toggleDark((prevState) => !prevState)}
      >
        <div className="icon">
          <UilMoonEclipse />
          <small className={!active && "active"}>Toggle DarkMode</small>
        </div>
        <span className={active && "active"}>Toggle DarkMode</span>
      </button>
    </div>
  );
};

// Exporting the SideBar component
export default SideBar;
