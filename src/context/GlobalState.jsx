import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

const initialState = {
  characters: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getCharacters = async () => {
    try {
      const res = await axios.get("https://rickandmortyapi.com/api/character");
      // setCharacters(res.data.results);
      const action = {
        type: "GET_CHARACTERS",
        payload: res.data.results,
      };
      dispatch(action);
      // dispatch({
      //     type:"GET_CHARACTERS",
      //     payload: res.data.results
      // })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        characters: state.characters,
        getCharacters,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
