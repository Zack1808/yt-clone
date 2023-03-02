import React from "react";
import { UilBars, UilPlay } from "@iconscout/react-unicons";

// Importing costume components
import Search from "./Search";

// Importing the style file
import "../css/Header.css";

// creating the Header component
const Header = () => {
  return (
    <div className="header-container">
      <div className="button-container">
        <button className="menu">
          <UilBars />
        </button>
        <button>
          <div className="logo">
            <UilPlay />
          </div>
          YT-Clone
        </button>
      </div>
      <Search />
    </div>
  );
};

// Exporting the Header component
export default Header;
