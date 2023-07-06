import React from "react";
import styles from "./HeroSection.module.css";
import Background from "../Background";

export default function HeroSection() {
  return (
    <section className={styles.main}>
      <Background />
      <div className={styles.heading}>
        <h1>Programming and Design from the Future</h1>
      </div>
    </section>
  );
}
