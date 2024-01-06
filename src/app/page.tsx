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
import { useInView } from "framer-motion";

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
  const [navStyle, setNavStyle] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const separatorRef = useRef(null);

  const isInView = useInView(separatorRef);

  useEffect(() => {
    setNavStyle(!isInView);
  }, [isInView]);

  const closeNavMenu = () => {
    if (!navbarOpen) return;
    setNavbarOpen(false);
  };

  return (
    <>
      <LoadingScreen />
      <Navbar
        navStyle={navStyle}
        navbarOpen={navbarOpen}
        setNavbarOpen={setNavbarOpen}
        closeNavMenu={closeNavMenu}
      />
      <main
        onClick={closeNavMenu}
        className={`${styles.main} ${navbarOpen ? styles.open : ""}`}
      >
        <ToastContainer {...toastProps} />
        <div id='hero' />
        <HeroSection heroHasPassed={navStyle} />
        <div ref={separatorRef} className={styles.separator} />
        <AboutMeSection />
        <WorkSection />
        <ContactSection />
        <SourceCodeSection />
      </main>
      <Footer />
    </>
  );
}
