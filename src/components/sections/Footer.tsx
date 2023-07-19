import React from "react";
import styles from "./Footer.module.css";
import TagIcon from "../icons/TagIcon";
import { scrollToTop } from "@/helper/scrollToTop";
import { Link } from "react-scroll";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";

const sections = ["about", "work", "contact", "source"];

export default function Footer() {
  const scrollDuration = 1000;

  return (
    <footer className={styles.main}>
      <div className={styles.logo} onClick={scrollToTop}>
        <TagIcon />
      </div>
      <div className={styles.links}>
        {sections.map((section) => {
          return (
            <Link
              key={section}
              to={section}
              smooth={true}
              offset={1}
              duration={scrollDuration}
              className={styles.link}
            >
              {section !== "source" ? section : "Source Code"}
            </Link>
          );
        })}
      </div>
      <div className={styles["social"]}>
        <div className={styles.hitbox}>
          <a href='https://github.com/gusfonseca21' target='_blank'>
            <GithubIcon />
          </a>
        </div>
        <div className={styles.hitbox}>
          <a
            href='https://www.linkedin.com/in/gustavo-fonseca-38b736248/'
            target='_blank'
          >
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
