import React from "react";

const Characters = props => {
  return (
    <div className="characterCard">
      <h3>{props.character.name}</h3>
      <p>
        <strong>Birth Year:</strong> {props.character.birth_year}
      </p>
      <p>
        <strong>Hair Color:</strong> {props.character.hair_color}
      </p>
    </div>
  );
};

export default Character;
