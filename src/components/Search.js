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

//step 5 (cont): use the props passed from the parent component (line 3)
//then set up a handleChange function that will listen for an event... in this case, it is listening/looking for someone to type in the search bar in browser.
//then you pass the handleChange through as an onChange listener.
//dont forget to set the value={pokemonSearch} because this tells the computer that it is a controlled component. 
//once this is done, when you type on the browser, you can filter through all the unique pokemon.

//step 6: next deliverable you will be using the post method to add a new pokemon to the page. 
//go to parent component (page) and then (form)... think of it as a form submission....