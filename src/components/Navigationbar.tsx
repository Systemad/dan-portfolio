import { Box, Container, BoxProps, useColorMode, Button } from "@chakra-ui/react";
import * as React from "react";

import { FaMoon, FaSun } from "react-icons/fa";
export const Navigationbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box as="nav" role="navigation" position="fixed" bottom="50px" right={["0px"]} zIndex={1} py="3" px="4" h="5">
      <Button size="lg" borderRadius={"full"} onClick={toggleColorMode}>
        {colorMode === "dark" ? <FaSun /> : <FaMoon />}
      </Button>
    </Box>
  );
};
