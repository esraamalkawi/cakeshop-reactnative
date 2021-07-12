import React from "react";
import { List } from "native-base";

const ProductItem = ({ product }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("ProductDetail", { product })}
    >
      {product.name}
    </List.Item>
  );
};

export default ProductItem;
