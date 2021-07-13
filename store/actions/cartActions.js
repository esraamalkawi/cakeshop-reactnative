import axios from "axios";
import * as actionTypes from "./types";

export const addItemToCart = (newItem) => ({
  type: actionTypes.ADD_ITEM,
  payload: newItem,
});

export const deleteItemFromCart = (itemId) => ({
  type: actionTypes.DELETE_ITEM,
  payload: itemId,
});

export const checkoutCart = () => ({
  type: actionTypes.CHECKOUT,
});
