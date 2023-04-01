import React from "react";

import { Center, Heading, VStack, Text, Highlight, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
          Below are personal projects of mine
          <br />
          Also be sure to checkout my&nbsp;
          <Link href="https://blog.danova.me/" isExternal>
            blog <ExternalLinkIcon mx="2px" />
          </Link>
        </Text>
      </VStack>
    </Center>
  );
};

export default Intro;
