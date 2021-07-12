import React from "react";
import { List } from "native-base";

const ProductItem = ({ product }) => {
  return <List.Item>{product.name}</List.Item>;
};

export default ProductItem;
