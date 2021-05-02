import { Text } from "@chakra-ui/react";
import Modal from ".";
import React from "react";
import * as ProductSelector from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function D({ name, index }) {
  const product = useSelector((state) => ProductSelector.products(state));
  return (
    <>
      <Modal payload={product[index]} type="deleting">
        <Text>Tem certeza que deseja deletar {name}?</Text>
      </Modal>
    </>
  );
}
