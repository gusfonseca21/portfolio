import React from "react";
import styles from "./Footer.module.css";
import TagIcon from "../icons/TagIcon";
import { scrollToTop } from "@/helper/scrollToTop";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const sections = ["about", "work", "contact", "source"];

export default function Footer() {
  const pathName = usePathname();

  const initialPage = pathName === "/";

  return (
    <footer className={`${inter.className} ${styles.main} `}>
      <div className={styles.logo} onClick={scrollToTop}>
        <TagIcon />
      </div>
      <div className={styles.links}>
        {sections.map((section) => {
          return (
            <Link
              key={section}
              href={initialPage ? `#${section}` : `/#${section}`}
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
