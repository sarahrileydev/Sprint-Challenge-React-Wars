import React from "react";

import "./StarWars.css";

const Character = props => {
  return (
    <div className="characterCard">
      <h3>{props.character.name}</h3>
      <p>
        <strong>Birth Year:</strong> {props.character.birth_year}
      </p>
      <p>
        <strong>Hair Color:</strong> {props.character.hair_color}
      </p>
      <p>
        <strong>Eye Color:</strong> {props.character.eye_color}
      </p>
    </div>
  );
};

export default Character;
