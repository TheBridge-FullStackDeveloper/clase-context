import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";

const Characters = () => {
  const { characters, getCharacters } = useContext(GlobalContext);

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      {characters.map((character) => {
        return (
          <div>
            <h2>{character.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
