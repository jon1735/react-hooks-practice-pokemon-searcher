import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {

  const { name, hp, sprites } = pokemon

  const [cardFront, setCardFront] = useState(true)
    const handleClick = () => {
      setCardFront((cardFront) => !cardFront) 
    }


  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={cardFront ? sprites.front : sprites.back} alt= {name} />
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

//step 4 (cont): First we passed "pokemon" as a prop to line(4) from its parent component 
//next we destructured the information inside the database on line 6...we set this information to be equal to "pokemon"
//we do this because we want "pokemon" to show the information in the database in its destructured form (name, hp, sprites)
//then we put the destructured attributes inside the JSX inside the return (line 21) {name}
//we added "hp" in line 26 within a span tag
//{name} also has to go into the image tag as, (alt={name}), this is due to accessibility reasons (in case the image doesnt render, at least the name will for the end user)
//by adding these attributes to the JSX, it will help the information finally render on the page
//once this is done, the information will finally be rendered to the page
//To render the images on the browser, we had to useState again, because this lab wanted us to "flip" the images from front to back when it was clicked in browser. Inside useState, we set the intial value to TRUE (line 8-11)
//we then set up the "handleClick" so we could pass it down at a later time in the return. (line 16)
//inside the handleClick function, we used the initial state of "setCardFront((cardFront)" to be equal to "!cardFront"... the exclamation point shows that this is a truthy value 
//then we passed this "stateful" information down to the image tag in the return. We used a terneary method to basically say: if the cardFront at the start of the page load is true, it will display the front of the card(cardFront)
//if it's false (:) it returns "sprites.back", which is the back of the image. 
//so basically the front of the card will always display first, then when clicked, it'll show the back.
//also need to set up the onClick function BEFORE the terneary. (line 16)
//information will now be displayed on the browser page. 

//step 5: next deliverable was setting up the filter. The filter was set up in the parent component (PokemonPage)
//please go to parent component to continue explanation.
