import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import shopReducer from "./shopReducer";

const rootReducer = combineReducers({
  products: productReducer,
  shops: shopReducer,
  user: authReducer,
  items: cartReducer,
});
export default rootReducer;
