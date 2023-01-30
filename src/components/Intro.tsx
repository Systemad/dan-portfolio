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
              px: "2",
              py: "1",
              rounded: "lg",
              bg: "blue.100",
            }}
          >
            .NET & Fullstack Fullstack
          </Highlight>
        </Text>
        <Text fontSize={"lg"}>
          Work in progress, it is being updated continually.
          <br />
          This also includes unfished projects.
        </Text>
      </VStack>
    </Center>
  );
};

export default Intro;
