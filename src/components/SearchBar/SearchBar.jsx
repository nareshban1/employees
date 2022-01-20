import React from "react";
import { SearchInput } from "./SearchBar.css";

const SearchBar = ({ searchQuery, setSearchQuery, handleSearch }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <SearchInput
      placeholder="Search"
      value={searchQuery}
      onChange={handleChange}
      onKeyDown={handleSearch}
    />
  );
};

export default SearchBar;
