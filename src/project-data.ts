export type projectDataProps = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  buttons: Buttons[];
  headImage: string;
  exampleImages: string[];
  projectLink?: string;
  openSourceLink?: string;
  video?: string;
};

export type Buttons = "viewProject" | "viewSourceCode";

export const projectData: projectDataProps[] = [
  {
    id: 1,
    title: "Forkify",
    date: "2022-08",
    description:
      "Projeto de uma aplicação web que acessa uma API contendo receitas e as disponibiliza em uma interface bonita e interativa.",
    tags: ["Web App", "React", "NextJS", "API"],
    buttons: ["viewProject", "viewSourceCode"],
    headImage: "/images/projects/forkify/forkify-1.webp",
    exampleImages: [
      "/images/projects/forkify/forkify-2.webp",
      "/images/projects/forkify/forkify-3.webp",
    ],
    projectLink: "https://forkify-mu.vercel.app/",
    openSourceLink: "https://github.com/gusfonseca21/Forkify",
  },
  {
    id: 2,
    title: "Expense Tracker",
    date: "2023-04",
    description:
      "Aplicativo mobile para manter e organizar suas despesas pessoais de maneira fácil e intuitiva.",
    tags: ["Mobile App", "React Native"],
    buttons: ["viewSourceCode"],
    headImage: "/images/projects/expense-tracker/expense-tracker-heading.webp",
    exampleImages: [
      "/images/projects/expense-tracker/expense-tracker-1.webp",
      "/images/projects/expense-tracker/expense-tracker-2.webp",
      "/images/projects/expense-tracker/expense-tracker-3.webp",
      "/images/projects/expense-tracker/expense-tracker-4.webp",
    ],
    projectLink: "https://expense-tracker-web-deploy.vercel.app/",
    openSourceLink: "https://github.com/gusfonseca21/expense-tracker",
    video: "umywIWBvy6I",
  },
  {
    id: 3,
    title: "ADB Memory Logger",
    date: "2023-11",
    description:
      "Ferramenta para automatizar a tarefa de gerar logs e gráficos do consumo de memória de um aplicativo em dispositivos Android.",
    tags: ["Automação", "Batch Script", "Python", "Android"],
    buttons: ["viewSourceCode"],
    headImage: "/images/projects/adb-memory-logger/adb-header.webp",
    exampleImages: [
      "/images/projects/adb-memory-logger/adb-1.webp",
      "/images/projects/adb-memory-logger/adb-header.webp",
    ],
    openSourceLink: "https://github.com/gusfonseca21/adb-memory-logger",
    video: "oGt-YYQF27Y",
  },
];
