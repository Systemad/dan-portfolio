import React from "react"
import { projects } from "../data/portfolio"
import { PortfolioItem } from "./PortfolioItem"
import { SimpleGrid } from "@chakra-ui/react"

const Portfolio = () => {
    return (
        <SimpleGrid columns={2} spacing={4}>
            {projects.map((item) => (
                <PortfolioItem project={item} />
            ))}
        </SimpleGrid>
    )
}

export default Portfolio
