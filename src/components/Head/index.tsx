import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import CreateProduct from "../Modal/create";
import { Stack } from "@chakra-ui/react";

export default function T() {
  const styles = {
    icons: {
      fontSize: "24px"
    }
  };
  const { toggleColorMode } = useColorMode();
  const ToggleIcon = useColorModeValue(IoMdSunny, IoMdMoon);

  const backround = useColorModeValue("gray.200", "gray.700");
  return (
    <Stack
      spacing={8}
      align="center"
      justify="center"
      direction="row"
      p={[4, 4, 4, 4]}
      mt={4}
      mb={4}
      borderRadius={"xl"}
      width="100%"
      bg={backround}
    >
      <CreateProduct />
      <Button colorScheme="teal" onClick={toggleColorMode}>
        <ToggleIcon style={styles.icons} />
      </Button>
    </Stack>
  );
}
