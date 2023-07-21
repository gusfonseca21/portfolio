"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import {
  HeroSection,
  AboutMeSection,
  WorkSection,
  ContactSection,
  SourceCodeSection,
  Footer,
} from "../components/sections";
import styles from "./page.module.css";
import { ToastContainer, ToastContainerProps, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import LoadingScreen from "@/components/LoadingScreen";

const toastProps: ToastContainerProps = {
  position: "bottom-center",
  closeButton: false,
  transition: Slide,
  hideProgressBar: true,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  closeOnClick: false,
  draggable: false,
  theme: "dark",
  toastClassName: styles.toast,
};

export default function Home() {
  const [heroRef, setHeroRef] = useState<React.RefObject<HTMLElement> | null>(
    null
  );
  const [navStyle, setNavStyle] = useState(false);

  const heroSectionRef = useRef(null);

  useEffect(() => {
    setHeroRef(heroRef);
  }, [heroRef]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setNavStyle(!entry.isIntersecting);
      });
    });
    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      <Navbar navStyle={navStyle} />
      <main className={styles.main}>
        <ToastContainer {...toastProps} />
        <HeroSection heroRef={heroSectionRef} />
        <AboutMeSection />
        <WorkSection />
        <ContactSection />
        <SourceCodeSection />
      </main>
      <Footer />
    </>
  );
}
