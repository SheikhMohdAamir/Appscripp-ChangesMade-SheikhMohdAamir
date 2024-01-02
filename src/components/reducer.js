"use client";

const reducer = (state, action) => {
  if (action.type === "GET_PRODUCTS") {
    return {
      ...state,
      hits: action.payload.hits,
      searchParams: null,
    };
  } else if (action.type === "SEARCH_PRODUCTS") {
    return {
      ...state,
      searchParams: action.payload,
    };
  }
};

export default reducer;
