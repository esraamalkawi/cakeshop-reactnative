import React from "react";
import { List } from "native-base";

const ShopItem = ({ shop }) => {
  return <List.Item>{shop.name}</List.Item>;
};

export default ShopItem;
