import React from "react";
import { HStack, List } from "native-base";
import { Text } from "react-native";

const CartItem = ({ item }) => {
  return (
    <HStack w="80%" justifyContent="space-between" alignItems="center">
      <Text>{item.name}</Text>
      <Text> quantity : {item.quantity}</Text>
      <Text>{item.price * item.quantity} JD</Text>
    </HStack>
  );
};

export default CartItem;
