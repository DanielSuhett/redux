import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import Modal from ".";
import React, { useState } from "react";
import * as ProductSelector from "../../redux/selectors";
import { useSelector } from "react-redux";

export default function M({ index }: { index: number }) {
  const product = useSelector((state) => ProductSelector.products(state));

  const [state, setState] = useState(product[index]);

  const handleState = (type, value) => {
    setState({ ...state, [type]: value });
  };

  return (
    <>
      <Modal payload={state} type="edit">
        <FormControl mb={5}>
          <FormLabel>Produto</FormLabel>
          <Input
            value={state.name}
            isRequired={true}
            onChange={(e) => handleState("name", e.target.value)}
          />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Quantidade</FormLabel>
          <Input
            value={state.quantity}
            type="number"
            onChange={(e) => handleState("quantity", e.target.value)}
          />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Categoria</FormLabel>
          <Input
            value={state.category}
            onChange={(e) => handleState("category", e.target.value)}
          />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Descrição</FormLabel>
          <Textarea
            value={state.description}
            onChange={(e) => handleState("description", e.target.value)}
            placeholder="Descrição do produto"
          />
        </FormControl>
      </Modal>
    </>
  );
}
