import { Box, useColorModeValue, Container } from "@chakra-ui/react";

export default function C({ children }) {
  const Background = useColorModeValue("#007A7A", "#2D3748");

  return (
    <Container maxW="container.xl">
      <Box
        height="100%"
        bgGradient={Background}
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Box>
    </Container>
  );
}
