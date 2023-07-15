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
import { ToastContainer, ToastContainerProps, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const toastProps: ToastContainerProps = {
  position: "top-center",
  closeButton: false,
  transition: Slide,
  hideProgressBar: true,
  pauseOnHover: false,
  pauseOnFocusLoss: false,
  closeOnClick: false,
  draggable: false,
  theme: "dark",
};

export default function Home() {
  const aboutMeRef = useRef(null);

  return (
    <main className={styles.main}>
      <ToastContainer {...toastProps} />
      <Navbar aboutMeRef={aboutMeRef} />
      <HeroSection />
      <AboutMeSection aboutMeRef={aboutMeRef} />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
