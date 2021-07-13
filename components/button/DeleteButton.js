import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Icon, Text } from "native-base";
import CartList from "../cart/CartList";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/actions/cartActions";

const DeleteButton = ({ productId }) => {
  const dispatch = useDispatch();
  console.log(productId);
  const handelDelete = () => {
    dispatch(deleteItemFromCart(productId));
  };
  return (
    <>
      <Icon as={AntDesign} name="delete" color="red" onPress={handelDelete} />
    </>
  );
};
export default DeleteButton;
