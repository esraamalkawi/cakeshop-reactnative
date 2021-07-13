import * as actionTypes from "../actions/types";

const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      const newItem = action.payload;
      const foundItem = state.items.find(
        (item) => item.itemId === newItem.itemId
      );
      if (foundItem)
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundItem ? newItem : item
          ),
        };
      else
        return {
          ...state,
          items: [...state.items, { ...newItem }],
        };
    // , quantity: 1
    case actionTypes.DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.itemId != action.payload),
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
export default cartReducer;
