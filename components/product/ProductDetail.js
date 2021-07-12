import React from "react";
import { Center, Image } from "native-base";
// import { useSelector } from "react-redux";
import { Text, StyleSheet } from "react-native";

const ProductDetail = ({ route }) => {
  const { product } = route.params;
  return (
    <>
      <Center flex={1}>
        <Text>{product.name}</Text>
        <Image style={styles.image} source={{ uri: product.image }}></Image>
      </Center>
    </>
  );
};
export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    height: "25%",
    width: "25%",
  },
});
