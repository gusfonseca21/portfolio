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
  const aboutMeRef = useRef(null);
  return (
    <main className={styles.main}>
      <LoadingScreen />
      <ToastContainer {...toastProps} />
      <Navbar aboutMeRef={aboutMeRef} />
      <HeroSection />
      <AboutMeSection aboutMeRef={aboutMeRef} />
      <WorkSection />
      <ContactSection />
      <SourceCodeSection />
      <Footer />
    </main>
  );
}
