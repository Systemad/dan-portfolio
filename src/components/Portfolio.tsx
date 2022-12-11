import React from "react"
import { projects } from "../data/portfolio"
import PortfolioItem from "./PortfolioItem"

const Portfolio = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((item) => (
                    <PortfolioItem project={item} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio
