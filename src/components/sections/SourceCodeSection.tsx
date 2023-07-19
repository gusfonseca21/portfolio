import React from "react";
import styles from "./SourceCodeSection.module.css";
import MatrixBackground from "../MatrixBackground";
import Button from "../Button";

export default function SourceCodeSection() {
  return (
    <section id='source' className={styles.main}>
      <MatrixBackground />
      <div className={styles.content}>
        <span className='section-title'>Source Code</span>
        <span className='section-heading'>
          <h2>Behind the simulation</h2>
          <p className='subheading'>
            You take the <span className='white-text'>blue pill</span> - you
            keep scrolling, you leave this site and believe whatever you want to
            believe. You take the <span className='white-text'>red pill</span> -
            you stay in wonderland, and I show you how deep the rabbit hole
            goes.
          </p>
        </span>
        <a href='https://github.com/gusfonseca21/portfolio' target='_blank'>
          <Button text='Show me' style={styles.button} />
        </a>
      </div>
    </section>
  );
}
