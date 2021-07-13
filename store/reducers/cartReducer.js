import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    { itemId: 6, quantity: 3 },
    { itemId: 7, quantity: 5 },
  ],
  // loading: true,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.ADD_TO_CART:
    //   return {
    //     ...state,
    //     items: [...state.items],
    //   };
    default:
      return state;
  }
};
export default cartReducer;
