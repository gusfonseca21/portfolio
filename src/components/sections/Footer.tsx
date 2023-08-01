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
      <Link
        href={initialPage ? `#hero` : `/#hero`}
        className={styles.logo}
        onClick={scrollToTop}
      >
        <TagIcon />
      </Link>
      <div className={styles.links}>
        <Link href={initialPage ? `#about` : `/#about`} className={styles.link}>
          Sobre Mim
        </Link>
        <Link href={initialPage ? `#work` : `/#work`} className={styles.link}>
          Trabalho
        </Link>
        <Link
          href={initialPage ? `#contact` : `/#contact`}
          className={styles.link}
        >
          Contato
        </Link>
        <Link
          href={initialPage ? `#source` : `/#source`}
          className={styles.link}
        >
          Código Fonte
        </Link>
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
