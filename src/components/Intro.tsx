import React from "react"

import { Center, Heading, VStack, Text, Highlight } from "@chakra-ui/react"

const Intro = () => {
    return (
        <Center mb="6">
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
                        .NET Developer
                    </Highlight>
                </Text>
                <Text fontSize={"lg"}>
                    Work in progress, it is being updated continually.
                    <br />
                    This does not include unfished projects.
                </Text>
            </VStack>
        </Center>
    )
}

export default Intro
