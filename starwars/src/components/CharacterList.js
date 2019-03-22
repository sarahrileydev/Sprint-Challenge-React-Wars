import React from "react";
import "./StarWars.css";

import Character from './Character';

const CharacterList = props => {
  return (
    <div className="list">
      {props.list.map(character => (
        <Character key={character.created} character={character} />
      ))}
    </div>
  );
};


export default CharacterList;
