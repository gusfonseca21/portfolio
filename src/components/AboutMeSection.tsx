import React from "react";
import styles from "./AboutMeSection.module.css";
import Image from "next/image";
import meImage from "../../public/images/me.jpg";

export default function AboutMeSection() {
  return (
    <section className={styles.main}>
      <Image
        className={styles.meImage}
        src={meImage}
        alt='Gustavo Fonseca'
        width={500}
        height={500}
      />

      <div className={styles.text}>
        <h6>About</h6>
        <h4>Coffeholic</h4>
        <p>
          I am Gustavo, a passionate freelancer bringing you programming and
          design from the future. My expertise is developing next-level websites
          and web applications including full frontend design.
        </p>
      </div>
    </section>
  );
}
