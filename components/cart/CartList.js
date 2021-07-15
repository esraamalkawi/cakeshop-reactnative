import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Text, Alert } from "react-native";
import { Center, Button, List, Box } from "native-base";
import CartItem from "./CartItem";
import { checkoutCart } from "../../store/actions/cartActions";

const CartList = ({ navigation }) => {
  const items = useSelector((state) => state.items.items);
  const allProducts = useSelector((state) => state.products.products);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleCheckOut = () => {
    if (user) {
      dispatch(checkoutCart(items));
      console.log("user here", user);
    } else
      Alert.alert(" login", "you must login first", [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "signin", onPress: () => navigation.navigate("Signin") },
        { text: "signup", onPress: () => navigation.navigate("Signup") },
      ]);
  };

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
      <Button onPress={handleCheckOut}>check out</Button>
    </Center>
  );
};

export default CartList;
