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