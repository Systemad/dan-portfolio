export interface Project {
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
        title: "Playground",
        description: "Fullstack multiplayer Quiz application made in React 18 with ChakraUI, Redux and .NET 6 as backend",
        imageUrl: "https://raw.githubusercontent.com/Systemad/Playground/main/assets/screenshots/quizoverview.png",
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
        link: "https://github.com/Systemad/Playground",
    },
    {
        title: "Formula Blazor",
        description: "Blazor app made with .NET 7 and Mudblazor that fetches certain information about Formula 1, such as drivers, teams, standings and calendar.",
        imageUrl: "https://raw.githubusercontent.com/Systemad/FormulaBlazor/main/assets/index.jpg",
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
        link: "https://github.com/Systemad/FormulaBlazor",
    },
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
]
