import React from "react";
import { useSelector } from "react-redux";

import { Text } from "react-native";
import { Center, Spinner, List, Box } from "native-base";
import CartItem from "./CartItem";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.items.items);
  const allProducts = useSelector((state) => state.products.products);
  // const itemLoading = useSelector((state) => state.items.loading);
  // if (itemLoading)
  //   return (
  //     <Center flex={1}>
  //       <Spinner />
  //     </Center>
  //   );

  const itemList = items
    .map((item) => ({
      ...allProducts.find((p) => p.id === item.itemId),
      quantity: item.quantity,
    }))
    .map((item) => (
      <CartItem key={item.id} navigation={navigation} item={item} />
    ));

  return (
    <Center flex={1}>
      <Box w="70%">
        <Text>YOUR CART</Text>
        <List>{itemList}</List>
      </Box>
    </Center>
  );
};

export default CartList;
