"use client";
import React, { useEffect, useRef, useState } from "react";
import "../../app/globals.css";
import styles from "./[projectName].module.css";
import Navbar from "@/components/ui/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import { Inter } from "next/font/google";
import { projectData } from "@/project-data";
import HeroProject from "./components/sections/HeroProject";
import Image from "next/image";
import RelatedProjects from "./components/sections/RelatedProjects";
import GoBackButton from "./components/ui/GoBackButton";
import { Footer } from "@/components/sections";
import { useRouter } from "next/router";
import YouTube, { YouTubePlayer } from "react-youtube";
import { useInView } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function ProjectPage() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const youtubeRef = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(youtubeRef, { once: true });

  useEffect(() => {
    if (isInView && youtubeRef.current)
      //@ts-ignore
      youtubeRef?.current.getInternalPlayer().playVideo();
  }, [isInView]);

  const router = useRouter();

  const queryProject = router.query.projectName;

  if (!queryProject) return;

  const selectedProject = projectData.filter(
    (project) => project.title.toLowerCase() === queryProject
  )[0];

  const relatedProjects = projectData.filter(
    (project) => project.title.toLowerCase() !== queryProject
  );

  const closeNavMenu = () => {
    if (!navbarOpen) return;
    setNavbarOpen(false);
  };

  return (
    <>
      <LoadingScreen />
      <Navbar
        navStyle={true}
        closeNavMenu={closeNavMenu}
        setNavbarOpen={setNavbarOpen}
        navbarOpen={navbarOpen}
      />
      <main
        className={`${styles.main} ${inter.className} ${
          navbarOpen ? styles.open : ""
        }`}
      >
        <HeroProject {...selectedProject} />
        {selectedProject.video ? (
          <div ref={videoRef}>
            <YouTube
              videoId={selectedProject.video}
              opts={{ width: 1024, height: 720 }}
              ref={youtubeRef}
            />
          </div>
        ) : null}
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
        <GoBackButton className={styles["go-back-btn"]} />
      </main>
      <Footer />
    </>
  );
}
