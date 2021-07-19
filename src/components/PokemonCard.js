import React, {useState} from "react";
import { Card } from "semantic-ui-react";


function PokemonCard({ pokemon }) {
  const [pokeObject, setPokemonObject] = useState(true)
  const {name, hp, sprites} = pokemon

  const handlePokemonClick = () => {
    setPokemonObject((pokemon) => !pokemon)
  }

  return (
    <Card>
      <div onClick={handlePokemonClick}>
        <div className="image">
          <img alt={name} src={pokeObject ? sprites.front : sprites.back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
           {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
