import React from "react";

function Search({ pokemonSearch, onChangePokemonSearch }) {
  const handleChange = (event) =>{
    onChangePokemonSearch(event.target.value) 
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
        className="prompt" 
        value={pokemonSearch}
        onChange={handleChange}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;