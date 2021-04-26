import {
  Button,
  Flex,
  Heading,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const Main = () => {
  const styles = {
    icons: {
      fontSize: "24px"
    }
  };
  const { toggleColorMode } = useColorMode();
  const formBackround = useColorModeValue("gray.100", "gray.700");
  const ToggleIcon = useColorModeValue(IoMdSunny, IoMdMoon);
  const Background = useColorModeValue(
    "linear(#fff, #007A7A)",
    "linear-gradient(#2D3748, #007A7A)"
  );

  const openLink = (link: string) => window.open(link);

  return (
    <Flex
      height="100vh"
      bgGradient={Background}
      alignItems="center"
      justifyContent="center"
    >
      <Flex direction="column" background={formBackround} p={12} rounded={6}>
        <Heading mb={6} colorScheme="teal">
          Daniels Boilerplate
        </Heading>
        <Button mb={12} colorScheme="teal" onClick={toggleColorMode}>
          <ToggleIcon style={styles.icons} />
        </Button>
        <Flex justifyContent="space-around">
          <Button onClick={() => openLink("https://github.com/DanielSuhett")}>
            <SiGithub style={styles.icons} />
          </Button>
          <Button
            onClick={() =>
              openLink("https://www.linkedin.com/in/daniel-suhett/")
            }
          >
            <SiLinkedin style={styles.icons} />
          </Button>
          <Button
            onClick={() => openLink("https://twitter.com/danielsuhett99")}
          >
            <SiTwitter style={styles.icons} />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Main;
