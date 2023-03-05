import React from "react";
import { UilBars, UilPlay } from "@iconscout/react-unicons";

// Importing costume components
import Search from "./Search";

// Importing the style file
import "../css/Header.css";

// creating the Header component
const Header = ({ toggle, fetch }) => {
  return (
    <div className="header-container">
      <div className="button-container">
        <button
          className="menu"
          onClick={() => toggle((prevState) => !prevState)}
        >
          <UilBars />
        </button>
        <button onClick={fetch}>
          <div className="logo">
            <UilPlay />
          </div>
          <span>YT-Clone</span>
        </button>
      </div>
      <Search />
    </div>
  );
};

// Exporting the Header component
export default Header;
