import React from "react";
import "./searchButtonCategory.css"

const SearchButtonsCategory = ({name, onToggle, isActive}) => {

    return(
      <h2 onClick={onToggle} style={{fontSize: isActive? "40px" : null, textShadow: isActive ? "2px 2px #ec2020": null }} className="searchButtonCategory">{name}</h2>
    );
  };

export default SearchButtonsCategory;