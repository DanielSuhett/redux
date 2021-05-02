import {
  Flex,
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Skeleton
} from "@chakra-ui/react";
import EditProduct from "../Modal/edit";
import DeleteProduct from "../Modal/delete";
import BarcodeProduct from "../Modal/barcode";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as productActions from "../../redux/actions/Product";
import * as ProductSelector from "../../redux/selectors";
import { useEffect } from "react";

export default function T() {
  const backround = useColorModeValue("gray.200", "gray.700");
  const dispatch = useDispatch();
  const products = useSelector((state) => ProductSelector.products(state));
  const loading = useSelector((state) => ProductSelector.loading(state));

  useEffect(() => {
    dispatch(productActions.products());
  }, []);

  const TR = ({
    name,
    quantity,
    category,
    created_at,
    index
  }: {
    name: string;
    quantity: number;
    category: string;
    created_at: string;
    description: string;
    index: number;
  }) => (
    <Tr>
      <Td>{name}</Td>
      <Td isNumeric>{quantity}</Td>
      <Td>{category}</Td>
      <Td isNumeric>{created_at}</Td>
      <Td>
        <Flex justifyContent="space-around">
          <EditProduct index={index} />

          <DeleteProduct name={name} index={index} />

          <BarcodeProduct index={index} />
        </Flex>
      </Td>
    </Tr>
  );

  return (
    <Flex
      width="100%"
      direction="column"
      alignSelf="center"
      background={backround}
      p={12}
      rounded={6}
    >
      {loading ? (
        <Stack>
          <Skeleton height="50px" />
          <Skeleton height="50px" />
          <Skeleton height="50px" />
        </Stack>
      ) : (
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Produto</Th>
              <Th isNumeric>quantidade</Th>
              <Th>categoria</Th>
              <Th isNumeric>criado</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody borderRadius="xl">
            {products.map((p, index) => (
              <TR
                key={index}
                name={p.name}
                quantity={p.quantity}
                category={p.category}
                description={p.description}
                index={index}
                created_at={new Date(p.createdAt).toLocaleString()}
              />
            ))}
          </Tbody>
        </Table>
      )}
    </Flex>
  );
}
