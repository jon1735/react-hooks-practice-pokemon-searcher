import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";




function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonSearch, setPokemonSearch] = useState("")
  
  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((r) => r.json())
      .then(setPokemon)
  }, [])

  const handleAddNewPokemon = (addNewPokemon) => {
    setPokemon([...pokemon, addNewPokemon])
  }


  const pokemonRendered = pokemon.filter((poke) => {
     return poke.name.toLowerCase().includes(pokemonSearch.toLowerCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm 
      onAddPokemon={handleAddNewPokemon}
      />
      <br />
      <Search 
      pokemonSearch={pokemonSearch}
      onChangePokemonSearch={setPokemonSearch}
      />
      <br />
      <PokemonCollection 
      pokemon={pokemonRendered}
      />
    </Container>
  );
}

export default PokemonPage;

//Step 1: set up useState & useEffect directly under the function of PokemonPage.
//after setting up the state (line 11), you then jump into setting up the useEffect on (line 15-18)
//In line 16, you utilize the api/database link provided by the lab/assessment

//Step 2: you then pass down the state of "pokemon" down as a prop to the component in the return. In this case it will go in the component "pokemonCollection" because that's where the pokemon cards/images will live
//the prop that is passed down below is initially "pokemon={pokemon}", but the second "pokemon" will be changed at a later time when working on the filter/search deliverable (line 43)

//step 3: once the prop is passed into the component from step 2, you then go into that component to continue rendering the information to the browser
//in this case, go to the component, "pokemonCollection"

//step 5 (cont): first things first, we set up a state that will be our starting point...we set state equals to an empty string ("") (line 12)
//you can name the state whatever you want.
//we need to actually set up the filter function so on (line 25-27), we start by naming the function, we chose "pokemonRendered"
//then we set up a pokemon.filter, (we literally just added ".filter" to the end of pokemon which is the initial state)...this is also the data array from the db.json
//immediately after pokemon.filter, we put (poke) right next to it, this shows that we are drawing out an individual object (pokemon) in this function
//right after this, we set up an arrow function to return "poke.name.toLowerCase().includes(pokemonSearch.toLowerCase()" - this is how the function is written out...
//you then pass the information down to the components (line 38-39)
//line 39 is a bit unclear, but just know you will use "onChangeblahblahblah"... this is then passed to the child component. 
//go to child component "search"

//step 6 (cont): set up a new function that will be the starting point to help us add new information to the database/brower. (line 20-22)
//need to use spread operator.. this helps you return a whole database of information, and then your new information is added to the database. 
//Once you have your function written out, you need to pass the prop down to the component in the return. in this case, it is (line 34)
//proceed to child component (PokemonForm)