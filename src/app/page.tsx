"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect, useRef } from "react";
import HeroSection from "@/components/sections/HeroSection";
import AboutMeSection from "@/components/sections/AboutMeSection";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  const aboutMeRef = useRef(null);
  return (
    <main className={styles.main}>
      <Navbar aboutMeRef={aboutMeRef} />
      <HeroSection />
      <AboutMeSection aboutMeRef={aboutMeRef} />
    </main>
  );
}
