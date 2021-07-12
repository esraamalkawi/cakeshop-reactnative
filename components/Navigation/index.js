import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";
import shopReducer from "../../store/reducers/shopReducer";
import ProductList from "../product/ProductList";
import ProductDetail from "../product/ProductDetail";

// console.log(Stack);

const StackNavigator = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    // <NavigationContainer>
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "grey",
        },
      }}
    >
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Screen name="ShopList" component={ShopList} />
      <Screen
        name="ShopDetail"
        component={ShopDetail}
        options={({ route }) => {
          return { title: route.params.shop.name };
        }}
      />
      <Screen name="ProductList" component={ProductList} />
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ route }) => {
          return { title: route.params.product.name };
        }}
      />
    </Navigator>
  );
  {
    /* </NavigationContainer> */
  }
};
export default StackNavigator;
