import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import Modal from ".";
import React, { useEffect } from "react";

export default function M() {
  const [state, setState] = React.useState({
    bar_code: Math.random().toString(36).substring(7),
    name: "",
    description: "",
    quantity: 0,
    category: ""
  });

  const handleChange = (event, type) =>
    setState({ ...state, [type]: event.target.value });

  useEffect(() => {
    setState({
      bar_code: Math.random().toString(36).substring(7),
      name: "",
      description: "",
      quantity: 1,
      category: ""
    });
  }, []);

  return (
    <>
      <Modal type="create" payload={state}>
        <FormControl mb={5}>
          <FormLabel>Produto</FormLabel>
          <Input
            onChange={(e) => handleChange(e, "name")}
            value={state.name}
            placeholder="Nome do produto"
          />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Quantidade</FormLabel>
          <Input
            value={state.quantity}
            onChange={(e) => handleChange(e, "quantity")}
            placeholder="Quantidade em números"
            type="number"
          />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Categoria</FormLabel>
          <Input
            value={state.category}
            onChange={(e) => handleChange(e, "category")}
            placeholder="Categoria do produto"
          />
        </FormControl>

        <FormControl mb={5}>
          <FormLabel>Descrição</FormLabel>
          <Textarea
            value={state.description}
            onChange={(e) => handleChange(e, "description")}
            placeholder="Descrição do produto"
          />
        </FormControl>
      </Modal>
    </>
  );
}
