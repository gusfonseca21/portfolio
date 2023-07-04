import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const movementStrength = 50;

  const moveBackground = (e: React.MouseEvent) => {
    const height = movementStrength / window.innerHeight;
    const width = movementStrength / window.innerWidth;

    const pageX = e.pageX - window.innerWidth / 2;
    const pageY = e.pageY - window.innerHeight / 2;

    const newValueX = width * pageX - 1 - 25;
    const newValyeY = height * pageY * -1 - 50;

    const sectionEl = e.target as HTMLElement;
    sectionEl.style.backgroundPosition = `${newValueX}px ${newValyeY}px`;
  };
  return (
    <section className={styles.main} onMouseMove={(e) => moveBackground(e)}>
      <div className={styles.heading}>
        <h1>Programming and Design from the Future</h1>
      </div>
    </section>
  );
}
