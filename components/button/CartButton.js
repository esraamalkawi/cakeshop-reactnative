import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Icon } from "native-base";
import CartList from "../cart/CartList";

const CartButton = ({ navigation }) => {
  return (
    <Icon
      as={AntDesign}
      name="shoppingcart"
      color="red"
      onPress={() => navigation.navigate(CartList)}
    />
  );
};
export default CartButton;
