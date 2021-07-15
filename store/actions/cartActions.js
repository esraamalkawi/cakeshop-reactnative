import instance from "./instance";
import * as actionTypes from "./types";

export const addItemToCart = (newItem) => ({
  type: actionTypes.ADD_ITEM,
  payload: newItem,
});

export const deleteItemFromCart = (itemId) => ({
  type: actionTypes.DELETE_ITEM,
  payload: itemId,
});

export const checkoutCart = (items) => async (dispatch) => {
  const res = await instance.post("/checkout", items);

  dispatch({
    type: actionTypes.CHECKOUT,
    payload: [],
  });
};
