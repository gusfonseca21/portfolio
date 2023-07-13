"use client";
import React, { useRef } from "react";
import Navbar from "@/components/ui/Navbar";
import {
  HeroSection,
  AboutMeSection,
  WorkSection,
  ContactSection,
} from "../components/sections";
import styles from "./page.module.css";

export default function Home() {
  const aboutMeRef = useRef(null);
  return (
    <main className={styles.main}>
      <Navbar aboutMeRef={aboutMeRef} />
      <HeroSection />
      <AboutMeSection aboutMeRef={aboutMeRef} />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
