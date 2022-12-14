import {
    Card,
    Stack,
    CardBody,
    Heading,
    CardFooter,
    Button,
    Image,
    Text,
    Link,
    Divider,
    Badge,
    Spacer,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    PopoverCloseButton,
    PopoverHeader,
    PopoverBody,
    Flex,
    Box,
    ButtonGroup,
    Tag,
    TagLabel,
    HStack,
} from "@chakra-ui/react"
import React from "react"
import { Project } from "../data/portfolio"

type Props = {
    project: Project
}
export const PortfolioItem = ({ project }: Props) => {
    return (
        <Card overflow="hidden" variant="outline" shadow={"lg"} rounded={"lg"}>
            <CardBody>
                <Image borderRadius="lg" src={project.imageUrl} />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{project.title}</Heading>
                    <Text py="2">{project.description}</Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Flex>
                    <HStack>
                        {project.stack.map((item) => (
                            <Popover trigger="hover">
                                <PopoverTrigger>
                                    <Tag
                                        size="lg"
                                        colorScheme="red"
                                        borderRadius="full"
                                    >
                                        <TagLabel>{item.name}</TagLabel>
                                    </Tag>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <PopoverArrow />
                                    <PopoverHeader>
                                        Technologies used
                                    </PopoverHeader>
                                    <PopoverBody>
                                        {item.language}
                                        {item.technologies.map((tech) => (
                                            <Text>{tech}</Text>
                                        ))}
                                    </PopoverBody>
                                </PopoverContent>
                            </Popover>
                        ))}

                        <Spacer />
                        <Button>GitHub</Button>
                    </HStack>
                </Flex>
            </CardFooter>
        </Card>
    )
}
