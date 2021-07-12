import React from "react";
import { NativeBaseProvider } from "native-base";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./store/index";
import ShopList from "./components/shop/ShopList";
import ShopDetail from "./components/shop/ShopDetail";
import ProductList from "./components/product/ProductList";
export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        {/* <Home /> */}
        {/* <ShopList /> */}
        <ShopDetail />
        {/* <ProductList /> */}
      </NativeBaseProvider>
    </Provider>
  );
}
