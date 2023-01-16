export interface Project {
    title: string
    description: string
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
        title: "Shopping",
        description: `Fullstack general e-commerce website built with latest technologies, React 18 and Redux toolkit.
            Powered by .NET 7 and Orleans. Includes authentication and easy admin portal for management.`,
        imageUrl: "assets/soon.png",
        stack: [
            {
                name: ".NET",
                language: "C#",
                technologies: ["ASP.NET", "Orleans"],
            },
            {
                name: "React",
                language: "TypeScript, HTML, CSS",
                technologies: ["Redux Toolkit", "Mantine"],
            },
            {
                name: "Swagger",
                language: "JSON",
                technologies: ["Swagger, NSwag"],
            },
        ],
        link: "https://github.com/Systemad/shopping",
    },
    {
        title: "Playground",
        description:
            "Fullstack multiplayer Quiz application made in React 18 with ChakraUI, Redux and .NET 6 powered backend with ASP.NET Core API and Orleans.",
        imageUrl:
            "https://raw.githubusercontent.com/Systemad/Playground/main/assets/screenshots/quizoverview.png",
        stack: [
            {
                name: ".NET",
                language: "C#",
                technologies: ["ASP.NET", "Orleans", "SignalR"],
            },
            {
                name: "React",
                language: "TypeScript, HTML, CSS",
                technologies: ["Redux Toolkit", "ChakraUI"],
            },
            {
                name: "Swagger",
                language: "JSON",
                technologies: ["Swagger, NSwag"],
            },
        ],
        link: "https://github.com/Systemad/Playground",
    },
    {
        title: "Formula Blazor",
        description:
            "Blazor app made with .NET 7 and Mudblazor that fetches certain information about Formula 1, such as drivers, teams, standings and calendar.",
        imageUrl:
            "https://raw.githubusercontent.com/Systemad/FormulaBlazor/main/assets/index.jpg",
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
        title: "shorting",
        description:
            "URL Shortener application made in Blazor powered by .NET 7, and Orleans with the goal for scalability. The UI is made in Material Design by MudBlazor component library.",
        imageUrl:
            "https://raw.githubusercontent.com/Systemad/shorting/main/img/index.png",
        stack: [
            {
                name: ".NET",
                language: "C#",
                technologies: [
                    "ASP.NET",
                    "Entity Framework",
                    "SignalR, Orleans",
                ],
            },
            {
                name: "Docker",
                language: "",
                technologies: [],
            },
            {
                name: "Orleans",
                language: "C#",
                technologies: [],
            },
            {
                name: "Mudblazor",
                language: "",
                technologies: [],
            },
        ],
        link: "https://github.com/Systemad/shorting",
    },
    {
        title: "Chat application",
        description: "Fullstack discord like, chat application",
        imageUrl: "assets/soon.png",
        stack: [
            {
                name: ".NET",
                language: "C#",
                technologies: ["ASP.NET", "Entity Framework", "SignalR"],
            },
            {
                name: "React",
                language: "TypeScript",
                technologies: ["Redux Toolkit (Query)", "ChakraUI"],
            },
            {
                name: "Swagger",
                language: "JSON",
                technologies: ["Swagger, NSwag"],
            },
        ],
        link: "https://github.com/Systemad/Dovecord-React",
    },
]
