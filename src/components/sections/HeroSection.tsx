import React from "react";
import styles from "./HeroSection.module.css";
import Background from "../ui/Background";
import Button from "../Button";
import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id='hero' className={styles.main}>
      <Background />
      <div className={styles.heading}>
        <h1>
          Programming
          <br /> and Design
          <br /> from the Future
        </h1>
        <Link to='work' smooth={true} duration={1000}>
          <Button
            text='Dig into my universe'
            style={styles["heading-button"]}
          />
        </Link>
      </div>
    </section>
  );
}
