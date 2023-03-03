import React from "react";
import { UilSearch } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Search.css";

// Creating the Search component
const Search = () => {
  return (
    <form className="search-container">
      <input type="text" placeholder="Search..." />
      <button type="submit">
        <UilSearch />
      </button>
    </form>
  );
};

// Exporting the Search component
export default Search;
