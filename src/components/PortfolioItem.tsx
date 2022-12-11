import React from "react"
import { Project } from "../data/portfolio"

type Props = {
    project: Project
}
function PortfolioItem({ project }: Props) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-stone-900 dark:border-white rounded-md overflow-hidden"
        >
            <img
                src={project.imageUrl}
                alt="portfolio"
                className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
                    {project.title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                    {project.stack.map((item) => (
                        <div className="flex">
                            <div>
                                <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                    {item.name} - {item.language}
                                </span>
                            </div>
                            <div className="flex">
                                <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                                    {item.technologies.map((tech) => (
                                        <div>{tech}</div>
                                    ))}
                                </span>
                            </div>
                        </div>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem
