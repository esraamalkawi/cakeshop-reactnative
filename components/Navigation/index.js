import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopList from "../shop/ShopList";
import ShopDetail from "../shop/ShopDetail";

import ProductDetail from "../product/ProductDetail";
import CartButton from "../button/CartButton";
import CartList from "../cart/CartList";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

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
      <Screen
        name="ProductDetail"
        component={ProductDetail}
        options={({ navigation, route }) => ({
          title: route.params.product.name,
          headerRight: () => <CartButton navigation={navigation} />,
        })}
      />
      <Screen name="CartList" component={CartList} />
      <Screen name="Signin" component={Signin} />
      <Screen name="Signup" component={Signup} />
    </Navigator>
  );
};
export default StackNavigator;
