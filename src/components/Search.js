import React, { useRef } from "react";
import { UilSearch } from "@iconscout/react-unicons";

// Importing the style file
import "../css/Search.css";

// Creating the Search component
const Search = ({ fetch }) => {
  // Setting up the ref
  const searchRef = useRef(null);

  // Handling the form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(searchRef.current.value);
  };

  return (
    <form className="search-container" onSubmit={handleSubmit}>
      <input type="text" placeholder="Search..." ref={searchRef} />
      <button type="submit">
        <UilSearch />
      </button>
    </form>
  );
};

// Exporting the Search component
export default Search;
