import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Image,
  Text,
  Divider,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  Flex,
  Box,
  ButtonGroup,
  Tag,
  TagLabel,
  HStack,
  LinkBox,
  Spacer,
  LinkOverlay,
} from "@chakra-ui/react";
import { Project } from "../data/portfolio";

type Props = {
  project: Project;
};

export const PortfolioItem = ({ project }: Props) => {
  return (
    <Card
      bgColor={"#f6f6f7"}
      _dark={{ backgroundColor: "#252529" }}
      overflow="hidden"
      shadow={"xl"}
      rounded={"2xl"}
      direction={{ base: "column", sm: "row" }}
    >
      <Image objectFit="cover" maxW={{ base: "100%", sm: "200px" }} src={project.imageUrl} />
      <Stack>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">{project.title}</Heading>
            <Text py="2">{project.description}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Flex minWidth="max-content" alignItems="center" gap="2">
            <Box>
              <HStack>
                {project.stack.map((item) => (
                  <Popover trigger="hover">
                    <PopoverTrigger>
                      <Tag size="lg" borderRadius="full">
                        <TagLabel>{item.name}</TagLabel>
                      </Tag>
                    </PopoverTrigger>
                    <PopoverContent borderRadius={"xl"}>
                      <PopoverArrow />
                      <PopoverHeader>Technologies used</PopoverHeader>
                      <PopoverBody>
                        {item.language}
                        {item.technologies.map((tech) => (
                          <Text>{tech}</Text>
                        ))}
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                ))}
              </HStack>
            </Box>
            <Spacer />
            <ButtonGroup gap="2" justifyContent={"flex-end"}>
              <LinkBox justifyContent={"flex-end"}>
                <LinkOverlay href={project.link} isExternal>
                  <Button borderRadius={"full"}>GitHub</Button>
                </LinkOverlay>
              </LinkBox>
            </ButtonGroup>
          </Flex>
        </CardFooter>
      </Stack>
    </Card>
  );
};
