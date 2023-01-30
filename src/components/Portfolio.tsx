import { projects } from "../data/portfolio";
import { PortfolioItem } from "./PortfolioItem";
import { Stack, Heading, Container, Text } from "@chakra-ui/react";

const Portfolio = () => {
  return (
    <Container maxW={"5xl"}>
      <Heading mb="8">Projects</Heading>
      <Stack spacing={8}>
        {projects.map((item) => (
          <PortfolioItem project={item} />
        ))}
      </Stack>
    </Container>
  );
};

export default Portfolio;
