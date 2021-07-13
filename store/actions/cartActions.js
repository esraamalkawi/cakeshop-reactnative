import axios from "axios";
import * as actionTypes from "./types";

export const addItems = (newItem) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: { newItem },
  };
};

// export const addShop = (newShop) => {
//   return async (dispatch) => {
//     try {
//       const formData = new FormData();
//       for (const key in newShop) formData.append(key, newShop[key]);
//       const res = await axios.post("http://localhost:8000/shops", formData);
//       dispatch({
//         type: actionTypes.CREATE_SHOP,
//         payload: { newShop: res.data },
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
