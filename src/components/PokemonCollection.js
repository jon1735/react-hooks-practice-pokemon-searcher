import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({pokemon}) {
  const cardCollection = pokemon.map((monster) => (
    <PokemonCard 
    key={monster.id}
    pokemon={monster}
    />
  ))  
    return( 
    <Card.Group itemsPerRow={6}>
      {cardCollection}
    </Card.Group>
    )
}




// function PokemonCollection({pokemon}) {
//   const cardCollection = pokemon.map((monster) => {
//     <PokemonCard 
//       key={monster.id}
//       pokemon={monster}
//     /> 
//     );
//     return 
//       <Card.Group itemsPerRow={6}>
//         {cardCollection}
//       </Card.Group>
// }

// function PokemonCollection({ pokemon }) {
//   const cards = pokemon.map((monster) => (
//     <PokemonCard key={monster.id} pokemon={monster} />
//   ));

//   return <Card.Group itemsPerRow={6}>{cardCollection}</Card.Group>;
// }




export default PokemonCollection;
