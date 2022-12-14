import React from "react"
import { projects } from "../data/portfolio"
import { PortfolioItem } from "./PortfolioItem"
import { SimpleGrid, Container } from "@chakra-ui/react"

const Portfolio = () => {
    return (
        <Container maxW={"5xl"}>
            <SimpleGrid columns={2} spacing={4}>
                {projects.map((item) => (
                    <PortfolioItem project={item} />
                ))}
            </SimpleGrid>
        </Container>
    )
}

export default Portfolio
