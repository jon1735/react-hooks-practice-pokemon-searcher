import React, {useEffect, useState} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";


function PokemonPage({ pokemon }) {
  const [pokeObject, setPokemonObject] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  useEffect (() => {
    fetch("http://localhost:3001/pokemon")
    .then(r => r.json())
    .then(data => setPokemonObject(data)) 
  }, [])
  

  const setPokemonFilter = pokeObject.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Const handleAddPokemon = (newPokemon) => {
  //   setPokemonObject([…pokeObject, newPokemon]);
  // }


  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search 
      searchTerm={searchTerm} onChangeSearch={setSearchTerm}
      />
      <br />
      <PokemonCollection 
      pokemon={setPokemonFilter}
      />
    </Container>
  );
}

export default PokemonPage;
