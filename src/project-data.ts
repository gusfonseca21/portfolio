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
    openSourceLink: "https://github.com/gusfonseca21/expense-tracker",
  },
  {
    id: 3,
    title: "Nullpunkt",
    date: "2023-07",
    description:
      "E-Commerce website for Nullpunkt Functional Fragrances, a unisex wellbeing brand with a vision to support people in integrating more mindful and balanced routines.",
    tags: ["Website", "Shopify"],
    buttons: ["viewProject"],
    headImage: "/images/projects/nullpunkt/nullpunkt-head.webp",
    exampleImages: [
      "/images/projects/nullpunkt/nullpunkt-example-1.webp",
      "/images/projects/nullpunkt/nullpunkt-example-2.webp",
      "/images/projects/nullpunkt/nullpunkt-example-3.webp",
      "/images/projects/nullpunkt/nullpunkt-example-4.webp",
    ],
    projectLink: "https://nullpunkt.co/",
  },
];
