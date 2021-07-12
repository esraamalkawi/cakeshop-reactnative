import * as actionTypes from "../actions/types";

const initialState = {
  shops: [],
  loading: true,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SHOP:
      return {
        ...state,
        shops: action.payload,
        loading: false,
      };

    // case actionTypes.CREATE_SHOP:
    //   return {
    //     ...state,
    //     shops: [...state.shops, action.payload],
    //   };
    default:
      return state;
  }
};
export default shopReducer;
