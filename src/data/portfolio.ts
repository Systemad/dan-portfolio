interface Project {
    title: string
    description: string,
    imageUrl: string
    stack: Stack[]
    link: string
}

interface Stack {
    name: string
    language: string
    technologies: string[]
}

export const projects: Project[] = [
    {
        title: "Chat application",
        description: "Fullstack discord like, chat application",
        imageUrl: "/assets/terminal-website.jpg",
        stack: [
            {
                name: ".NET",
                language: "C#",
                technologies: ["ASP.NET", "Entity Framework", "SignalR"],
            },
            {
                name: "React",
                language: "TypeScript",
                technologies: ["Redux", "ChakraUI"],
            },
        ],
        link: "githublink",
    },
    {
        title: "Quiz application",
        description: "Fullstack multiplayer Quiz application",
        imageUrl: "/assets/terminal-website.jpg",
        stack: [
            {
                name: ".NET",
                language: "C#",
                technologies: ["ASP.NET", "Orleans", "SignalR"],
            },
            {
                name: "React",
                language: "TypeScript, HTML, CSS",
                technologies: ["Redux", "ChakraUI"],
            },
        ],
        link: "",
    },
    {
        title: "FormulaBlazor",
        description: "Formula 1 app that fetches displays information about Formula 1. Data is by Ergast and Wikipedia",
        imageUrl: "/assets/terminal-website.jpg",
        stack: [
            {
                name: ".NET",
                language: "C#",
                technologies: ["ASP.NET", "SignalR"],
            },
            {
                name: "Blazor",
                language: "HTML, CSS, C#",
                technologies: ["MudBlazor"],
            },
        ],
        link: "",
    },
]
