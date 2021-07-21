import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAddPokemon }) {
  const [formData, setFormData] = useState ({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  const handleChange = (event) => {
    setFormData({
      ...formData, 
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const addNewPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }
    fetch("http://localhost:3001/pokemon",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(addNewPokemon)
    })
        .then((r) => r.json())
        .then(onAddPokemon)
  }
  
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input 
          fluid label="Name" 
          placeholder="Name" 
          name="name" 
          value={formData.name}
          onChange={handleChange}
          />
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp}
            onChange={handleChange}
            />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.frontUrl}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.backUrl}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;

// https://img.pokemondb.net/sprites/black-white/shiny/bidoof-f.png
//https://img.pokemondb.net/sprites/black-white/back-shiny/bidoof-f.png