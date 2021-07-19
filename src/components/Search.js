import React from "react";

function Search({searchTerm, onChangeSearch}) {
const pokeNameChange = (event) => {
  onChangeSearch (event.target.value)
} 

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" 
        value={searchTerm}
        onChange={pokeNameChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
