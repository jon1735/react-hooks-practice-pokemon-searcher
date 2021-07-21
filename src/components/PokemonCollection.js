import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const pokemonInfo = pokemon.map((poke) => (
    <PokemonCard 
      key={poke.id}
      pokemon={poke}
    />
  ))

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonInfo}
    </Card.Group>
  );
}

export default PokemonCollection;

//step 3 (cont): We then pass the prop taken from "pokemonPage" (aka: parent component).
//In this case, we pass {pokemon} as an "argument" - NOTE: the prop is not considered an argument bc it is in curly braces
//THEN we map over the information in the data base. (this information is in the component "db.json")
//Line 6 shows how to map over the information, "pokemonInfo" is a new named "variable/object" made up by the user to be used at a later time; in this case it's in the return (line 15) as a "variable/object"
//continuing on line 6, "poke" is the result of mapping through the pokemon database. (this returns one object from the array in the database) *mapping over pokemon returns ONE "poke"
//in this lab, "PokemonCard" component was grayed out, meaning it wasnt being used ATM, so we added it ourselves as: <PokemonCard /> 
//in lines 8-9, inside the "pokemonCard" component, we want to pass the keys for the actual pokemon information 
//(cont): first we always start with a "key", you set it equal to a single oject inside the array... for the key, it is normally set equal to the id in the database
//pokemon={poke} because we are taking out ONE object from the array in the database. 

//step 4: we then need to pass this information the cards, which will hold all of the information taken from the database.
//continue to the component, "PokemonCard"
