import React from "react";
import styles from "./SourceCodeSection.module.css";
import MatrixBackground from "../MatrixBackground";
import Button from "../Button";

export default function SourceCodeSection() {
  return (
    <section id='source' className={styles.main}>
      <MatrixBackground />
      <div className={styles.content}>
        <span className='section-title'>Código Fonte</span>
        <h2 className='section-heading'>Nos bastidores</h2>
        <p className={`subheading ${styles.text}`}>
          Curioso para ver como este site foi construído? Clique no botão abaixo
          para visualizar o código-fonte.
        </p>
        <a href='https://github.com/gusfonseca21/portfolio' target='_blank'>
          <Button text='Mostre-me' style={styles.button} />
        </a>
      </div>
    </section>
  );
}
