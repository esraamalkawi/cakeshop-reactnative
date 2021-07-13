import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Icon, Text } from "native-base";
import CartList from "../cart/CartList";
import { useSelector } from "react-redux";

const CartButton = ({ navigation }) => {
  const items = useSelector((state) => state.items.items);
  let total = 0;
  items.forEach((e) => (total += e.quantity));
  return (
    <>
      <Text>{total}</Text>
      <Icon
        as={AntDesign}
        name="shoppingcart"
        color="red"
        onPress={() => navigation.navigate(CartList)}
      />
    </>
  );
};
export default CartButton;
