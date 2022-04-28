import React from "react";
import {Search} from "./StyleElements"

function SearchBar({ onSearch, searchTerm }) {
  return (
    <Search>
      <div className="search">
        <input
          type="text"
          placeholder="Search for an animal..."
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}

        ></input>
      </div>
    </Search>
  );
}

export default SearchBar;


