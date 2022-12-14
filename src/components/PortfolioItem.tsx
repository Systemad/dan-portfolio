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
} from "@chakra-ui/react"
import React from "react"
import { Project } from "../data/portfolio"

type Props = {
    project: Project
}
export const PortfolioItem = ({ project }: Props) => {
    return (
        <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
            shadow={"lg"}
            rounded={"lg"}
        >
            <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={project.imageUrl}
            />

            <Stack>
                <CardBody>
                    <Heading size="md">{project.title}</Heading>
                    <Text py="2">{project.description}</Text>
                </CardBody>

                <CardFooter>
                    <Link href={project.link} isExternal>
                        GitHub
                    </Link>
                </CardFooter>
            </Stack>
        </Card>
    )
}

/*
        <div className="p-1 bg-white dark:border-white rounded-lg overflow-hidden shadow-lg">
            <img
                src={project.imageUrl}
                alt="portfolio"
                className="w-full rounded-lg shadow-lg h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">
                    {project.title}
                </h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
                    {project.stack.map((item) => (
                        <>
                            <span className="inline-block px-2 py-1 font-semibold bg-gray-300 dark:border-white rounded-md">
                                {item.name} - {item.language}
                            </span>
                            <br className="bg-blue-200" />
                            {item.technologies.map((tech) => (
                                <span className="inline-block px-2 py-1 font-semibold bg-gray-100 dark:border-white rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </>
                    ))}
                </p>
                <div className="relative">
                    <button
                        type="button"
                        className="bg-slate-500 p-1 mt-2 rounded-lg text-white absolute bottom-0 right-0"
                        data-ripple-light="true"
                    >
                        GitHub
                    </button>
                </div>
            </div>
        </div>
*/
