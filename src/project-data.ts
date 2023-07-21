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
    title: "Contentary",
    date: "2023-05",
    description:
      "Website for Contentary, the social media agency, founded by the two influencers behind Shoppisticated.",
    tags: ["Website"],
    buttons: ["viewProject"],
    headImage: "/images/projects/contentary/contentary-heading.webp",
    exampleImages: [
      "/images/projects/contentary/contentary-example-1.webp",
      "/images/projects/contentary/contentary-example-2.webp",
      "/images/projects/contentary/contentary-example-3.webp",
    ],
    projectLink: "https://contentary-agency.com/",
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
      "/images/projects/lockey/lockey-example-3.webp",
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
