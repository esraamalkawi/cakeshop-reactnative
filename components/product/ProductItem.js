import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { List, Button } from "native-base";
import NumericInput from "react-native-numeric-input";
import { addItemToCart } from "../../store/actions/cartActions";

const ProductItem = ({ navigation, product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAdd = () => {
    const newItem = { quantity, itemId: product.id };
    dispatch(addItemToCart(newItem));
  };
  return (
    <>
      <List.Item
        onPress={() => navigation.navigate("ProductDetail", { product })}
      >
        {product.name}
      </List.Item>
      <NumericInput
        value={quantity}
        onChange={setQuantity}
        initValue={quantity}
        minValue={1}
        onLimitReached={(isMax, msg) => console.log(isMax, msg)}
        totalWidth={240}
        totalHeight={50}
        iconSize={25}
        step={1}
        valueType="real"
        rounded
        textColor="black"
        iconStyle={{ color: "white" }}
        rightButtonBackgroundColor="grey"
        leftButtonBackgroundColor="grey"
      />
      <Button onPress={handleAdd}>ADD</Button>
    </>
  );
};

export default ProductItem;
