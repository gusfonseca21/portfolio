import React from "react";
import styles from "./AboutMeSection.module.css";
import Image from "next/image";
import meImage from "../../../public/images/me.jpg";
import { AnimatedHeading } from "../ui/AnimatedHeading";

const headings = [
  "Developer",
  "Designer",
  "Problem solver",
  "Freelancer",
  "Coffeeholic",
  "Globetrotter",
];

interface AboutMeProps {
  aboutMeRef: React.RefObject<HTMLElement>;
}

export default function AboutMeSection({ aboutMeRef }: AboutMeProps) {
  return (
    <section className={styles.main} ref={aboutMeRef}>
      <Image
        className={styles.meImage}
        src={meImage}
        alt='Gustavo Fonseca'
        width={500}
        height={500}
      />

      <div className={styles.text}>
        <span className={styles.about}>About</span>
        <span className={styles.heading}>
          <AnimatedHeading headings={headings} />
        </span>
        <p>
          I am Gustavo, a passionate freelancer bringing you programming and
          design from the future. My expertise is developing next-level websites
          and web applications including full frontend design.
        </p>
      </div>
    </section>
  );
}
