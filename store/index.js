import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { fetchProducts } from "./actions/productActions";
import { fetchShops } from "./actions/shopActions";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.dispatch(fetchProducts());
store.dispatch(fetchShops());

export default store;
