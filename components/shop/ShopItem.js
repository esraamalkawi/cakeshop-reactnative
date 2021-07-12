import React from "react";
import { List } from "native-base";

const ShopItem = ({ navigation, shop }) => {
  return (
    <List.Item onPress={() => navigation.navigate("ShopDetail", { shop })}>
      {shop.name}
    </List.Item>
  );
};

export default ShopItem;
