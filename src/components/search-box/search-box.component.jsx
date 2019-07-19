import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ placeholder , handleChange }) => {
  return (
    <React.Fragment>
      <div >
        <input  
          type="search"
          placeholder={placeholder}
          onChange={handleChange}
          className="search"
        />
      </div>
    </React.Fragment>
  );
};

export default SearchBox;
