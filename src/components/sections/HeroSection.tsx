import React from "react";
import styles from "./HeroSection.module.css";
import Background from "../ui/Background";
import Button from "../Button";

export default function HeroSection() {
  return (
    <section className={styles.main}>
      <Background />
      <div className={styles.heading}>
        <h1>
          Programming
          <br /> and Design
          <br /> from the Future
        </h1>
        <Button
          text='Dig into my universe'
          clickFunction={() => console.log(`DEVE FAZER ALGO`)}
          style={styles["heading-button"]}
        />
      </div>
    </section>
  );
}
