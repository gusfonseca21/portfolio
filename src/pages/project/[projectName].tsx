"use client";
import React from "react";
import { useRouter } from "next/router";
import "../../app/globals.css";
import styles from "./[projectName].module.css";
import Navbar from "@/components/ui/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import { Inter } from "next/font/google";
import { projectData } from "@/project-data";
import HeroProject from "./components/sections/HeroProject";
import Image from "next/image";
import RelatedProjects from "./components/sections/RelatedProjects";

const inter = Inter({ subsets: ["latin"] });

console.log(`teste`);

export default function ProjectPage() {
  const router = useRouter();

  const queryProject = router.query.projectName;

  if (!queryProject) return;

  const selectedProject = projectData.filter(
    (project) => project.title.toLowerCase() === queryProject
  )[0];

  const relatedProjects = projectData.filter(
    (project) => project.title.toLowerCase() !== queryProject
  );

  return (
    <main className={`${styles.main} ${inter.className}`}>
      <LoadingScreen />
      <Navbar />
      <HeroProject {...selectedProject} />
      <div className={styles["example-images"]}>
        {selectedProject.exampleImages.map((image, index) => {
          return (
            <Image
              key={index}
              src={image}
              height={500}
              width={500}
              className={styles.image}
              alt={image}
              unoptimized
              priority
            />
          );
        })}
      </div>
      <RelatedProjects projects={relatedProjects} />
    </main>
  );
}
