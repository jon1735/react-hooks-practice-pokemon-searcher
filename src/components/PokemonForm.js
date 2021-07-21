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

//step 6 (cont): set up a new useState that directly reflects the information in the database (name,hp,sprites)...this state results in us being able to add new info eventually
//then need to set up a handleChange and a handleSubmit function, which listens for the end users input on the browser (line 12-28)
//then we use a fetch POST method to actually add this information to our database (lines 30-40)
//then we pass the handleSubmit button to the actual form (button)
//next we add the values to equal the specific keys outlined in the initial state (name, hp, sprites) (lines 53, 58, 60, 76)
//dont forget to also add the onChange={handleChange} to the forn.inputs.....
//once this is done, the end user can then add a bidoof.


// https://img.pokemondb.net/sprites/black-white/shiny/bidoof-f.png
//https://img.pokemondb.net/sprites/black-white/back-shiny/bidoof-f.png