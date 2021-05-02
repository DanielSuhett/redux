import Modal from ".";
import * as ProductSelector from "../../redux/selectors";
import { useSelector } from "react-redux";
import Barcode from "react-barcode";
import { Flex, useColorModeValue } from "@chakra-ui/react";

export default function S({ index }) {
  const product = useSelector((state) => ProductSelector.products(state));
  const backround = useColorModeValue("#fff", "#2D3748");
  const color = useColorModeValue("#000", "#fff");

  return (
    <Modal payload={product[index]} type="barcode">
      <Flex justifyContent="center">
        <Barcode
          value={product[index].bar_code}
          background={backround}
          lineColor={color}
        />
      </Flex>
    </Modal>
  );
}
