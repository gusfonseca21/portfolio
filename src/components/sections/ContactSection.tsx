import React, { useState } from "react";
import styles from "./ContactSection.module.css";
import Image from "next/image";
import EmailIcon from "../icons/EmailIcon";

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
      <div className={styles["left-box"]}>
        <span className='section-title'>Contact</span>
        <span className='section-heading'>
          <h2>Got a problem to solve?</h2>
          <span className={styles.subheading}>
            Get your space suit ready and tell me your ideas to develop your
            dream website.
          </span>
        </span>

        <div className={styles.email} onClick={() => copyToClipboard()}>
          <span>
            <EmailIcon />
            gusfonseca.dev@gmail.com
          </span>
          <div
            className={styles.copied}
            style={{
              opacity: copied ? 1 : 0,
              transition: "all 100ms ease-in",
            }}
          >
            <span>Copiado!</span>
          </div>
        </div>
      </div>
      <div className={styles["right-box"]}></div>
    </section>
  );
}
