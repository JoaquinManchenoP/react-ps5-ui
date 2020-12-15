import React, { useState, createContext } from "react";

const initialState = {
  gameBackgound:
    "https://gmedia.playstation.com/is/image/SIEPDC/astro-bot-rescue-mission-wallpaper-05-en-us-06jul20?$native--t$",
};

export const Context = createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <Context.Provider value={[state, setState]}>{children}</Context.Provider>
  );
};

export default Store;
