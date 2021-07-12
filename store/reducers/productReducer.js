import * as actionTypes from "../actions/types";

const initialState = {
  products: [],
  loading: true,
};
const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionTypes.DELETE_PRODUCT:
    //   const keepProduct = state.products.filter(
    //     (product) => product.id !== action.payload.productId
    //   );
    //   return {
    //     ...state,
    //     products: keepProduct,
    //   };

    // case actionTypes.CREATE_PRODUCT:
    //   return {
    //     ...state,
    //     products: [...state.products, action.payload],
    //   };
    // case actionTypes.UPDATE_PRODUCT:
    //   const { updatedProduct } = action.payload;
    //   return {
    //     ...state,
    //     products: state.products.map((product) =>
    //       product.id === updatedProduct.id ? updatedProduct : product
    //     ),
    //   };
    case actionTypes.FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default productReducer;
