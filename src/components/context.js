"use client";

import { createContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

let API = "https://fakestoreapi.com/products";

const initialState = {
  hit: [],
  searchParams: null,
};

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchNewsData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;

      dispatch({
        type: "GET_PRODUCTS",
        payload: {
          hits: data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchNewsData(`${API}`);
  }, []);

  // Search Functionality
  const searchHandler = (searchParams) => {
    dispatch({ type: "SEARCH_PRODUCTS", payload: searchParams });
  };

  return (
    <Context.Provider value={{ ...state, searchHandler }}>
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
