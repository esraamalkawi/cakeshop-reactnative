import React from "react";
import { Center, Image } from "native-base";
// import { useSelector } from "react-redux";
import { Text, StyleSheet } from "react-native";
import ProductList from "../product/ProductList";

const ShopDetail = ({ navigation, route }) => {
  //  const shop = useSelector((state) => state.shops.shops[2]);

  const { shop } = route.params;
  console.log(shop.products, "shop detail");
  return (
    <>
      <Center flex={1}>
        <Text>{shop.name}</Text>
        <Image style={styles.image} source={{ uri: shop.image }}></Image>
      </Center>
      <ProductList navigation={navigation} productsIds={shop.products} />
    </>
  );
};
export default ShopDetail;

const styles = StyleSheet.create({
  image: {
    height: "25%",
    width: "25%",
  },
});
