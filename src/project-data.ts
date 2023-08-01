export type projectDataProps = {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  buttons: Buttons[];
  headImage: string;
  exampleImages: string[];
  projectLink: string;
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
    tags: ["Web app", "React", "NextJS", "API"],
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
    title: "Lockey",
    date: "2023-06",
    description:
      "LOCKEY is the ultimate tool for both encryption and decryption - brought to you from the past.",
    tags: ["Website", "Web-app", "Open-source"],
    buttons: ["viewProject", "viewSourceCode"],
    headImage: "/images/projects/lockey/lockey-head.webp",
    exampleImages: [
      "/images/projects/lockey/lockey-example-1.gif",
      "/images/projects/lockey/lockey-example-2.webp",
    ],
    projectLink: "https://lockey.lokkeestudios.com/",
    openSourceLink: "https://github.com/lokkeestudios/lockey",
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
