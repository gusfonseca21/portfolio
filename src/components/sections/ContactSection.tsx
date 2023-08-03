"use client";

import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import EmailIcon from "../icons/EmailIcon";
import ContactForm from "../ContatctForm";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (copied) return;
    setCopied(true);
    navigator.clipboard.writeText("gusfonseca.dev@gmail.com");
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <section id='contact' className={styles.main}>
      <div className={styles.content}>
        <div className={styles["left-box"]}>
          <span className='section-title'>Contato</span>
          <h2 className='section-heading' style={{ textAlign: "start" }}>
            Precisa de um dev?
          </h2>
          <p className='subheading'>
            Com as ferramentas do desenvolvedor, vamos explorar novos horizontes
            e moldar o futuro!
          </p>
          <div className={styles.email} onClick={() => copyToClipboard()}>
            <span>
              <EmailIcon />
              gusfonseca.dev@gmail.com
            </span>
            <div
              className={styles.copied}
              style={{
                opacity: copied ? 1 : 0,
                transition: "all 200ms ease-in",
              }}
            >
              <span>Copiado!</span>
            </div>
          </div>
        </div>
        <div className={styles["right-box"]}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
