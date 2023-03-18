import React from "react";

import { Center, Heading, VStack, Text, Highlight } from "@chakra-ui/react";

const Intro = () => {
  return (
    <Center mt="6" mb="6">
      <VStack>
        <Heading as="h1" size="2xl">
          Dan
        </Heading>
        <Text fontSize={"2xl"}>
          <Highlight
            query=".NET"
            styles={{
              px: "5",
              py: "1",
              rounded: "full",
              color: "white",
              bg: "#009688",
              _dark: { color: "black", bg: "#80cbc4" },
            }}
          >
            .NET & Fullstack Developer
          </Highlight>
        </Text>
        <Text fontSize={"lg"} textAlign={"center"}>
          Work in progress, it is being updated continually.
          <br />
          This also includes unfinished projects.
        </Text>
      </VStack>
    </Center>
  );
};

export default Intro;
