import React from "react";
import { useSelector } from "react-redux";

import { Button } from "native-base";
import { Text } from "react-native";
import { Center, Spinner, List, Box } from "native-base";
import ShopItem from "./ShopItem";

const ShopList = ({ navigation }) => {
  const shops = useSelector((state) => state.shops.shops);
  const shopLoading = useSelector((state) => state.shops.loading);
  if (shopLoading)
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );

  const shopList = shops.map((shop) => (
    <ShopItem key={shop.id} navigation={navigation} shop={shop} />
  ));

  return (
    <Center flex={1}>
      <Box w="70%">
        <Text>Shop List</Text>

        <List>{shopList}</List>
      </Box>
    </Center>
  );
};

export default ShopList;
