"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <AboutMeSection />
    </main>
  );
}
