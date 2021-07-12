import React from "react";
import { useSelector } from "react-redux";

import { Text } from "react-native";
import { Center, Spinner, List, Box } from "native-base";
import ProductItem from "./ProductItem";

const ProductList = ({ productsIds, navigation }) => {
  const products = useSelector((state) => state.products.products);
  const productLoading = useSelector((state) => state.products.loading);
  // console.log(props);
  if (productLoading)
    return (
      <Center flex={1}>
        <Spinner />
      </Center>
    );
  const shopProducts = productsIds.map((_product) =>
    products.find((product) => product.id === _product.id)
  );
  const productList = products.map((product) => (
    <ProductItem key={product.id} navigation={navigation} product={product} />
  ));

  return (
    <Center flex={1}>
      <Box w="70%">
        <Text>Product List</Text>
        <List>{productList}</List>
      </Box>
    </Center>
  );
};

export default ProductList;
