import React from "react";
import { List } from "native-base";

const ProductItem = ({ navigation, product }) => {
  return (
    <List.Item
      onPress={() => navigation.navigate("ProductDetail", { product })}
    >
      {product.name}
    </List.Item>
  );
};

export default ProductItem;
