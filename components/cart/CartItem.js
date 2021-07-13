import React from "react";
import DeleteButton from "../button/DeleteButton";
import { HStack, List } from "native-base";
import { Text } from "react-native";

const CartItem = ({ item }) => {
  console.log("cartitem", item);
  return (
    <HStack w="80%" justifyContent="space-between" alignItems="center">
      <Text>{item.name}</Text>
      <Text> quantity : {item.quantity}</Text>
      <Text>{item.price * item.quantity} JD</Text>
      <DeleteButton productId={item.id} />
    </HStack>
  );
};

export default CartItem;
