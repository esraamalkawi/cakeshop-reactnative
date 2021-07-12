import { combineReducers } from "redux";
import productReducer from "./productReducer";
// import authReducer from "./authReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  products: productReducer,
  shops: shopReducer,
  // user: authReducer,
});
export default rootReducer;
