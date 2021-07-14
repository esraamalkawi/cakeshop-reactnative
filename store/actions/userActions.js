import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import decode from "jwt-decode";
import * as actionTypes from "./types";

export const createUser = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://192.168.1.82:8000/signup", userData);
      dispatch(
        {
          type: actionTypes.SET_USER,
          payload: res.data,
        },
        navigation.navigate("CartList")
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const signin = (userData, navigation) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://192.168.1.82:8000/signin", userData);
      await AsyncStorage.setItem("myToken", res.data.token);
      dispatch(
        {
          type: actionTypes.SET_USER,
          payload: decode(res.data.token),
        },
        navigation.goBack()
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const signout = () => {
  return {
    type: actionTypes.SET_USER,
    payload: null,
  };
};

// export const checkForToken = () => {
//   const token = localStorage.getItem("myToken");
//   if (token) {
//     const currentTime = Date.now();
//     const user = decode(token);
//     if (user.exp > currentTime) {
//       return { type: actionTypes.SET_USER, payload: decode(res.data.token) };
//     } else localStorage.removeItem("myToken");
//     return {
//       type: actionTypes.SET_USER,
//       payload: null,
//     };
//   }
// };

// const setUser =() => {
//   localStorage.setItem("myToken", token )
//   return  { type: actionTypes.SET_USER, payload: decode(token) };
// }
