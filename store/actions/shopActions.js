import axios from "axios";
import * as actionTypes from "./types";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("http://192.168.1.82:8000/shops");
      dispatch({
        type: actionTypes.FETCH_SHOP,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
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
