import styles from "./Navbar.module.css";
import Button from "../Button";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface NavbarProps {
  navStyle: boolean;
  navbarOpen: boolean;
  setNavbarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeNavMenu: () => void;
}

export default function Navbar({
  navStyle,
  navbarOpen,
  setNavbarOpen,
  closeNavMenu,
}: NavbarProps) {
  const pathName = usePathname();

  const initialPage = pathName === "/";

  return (
    <nav
      className={`${styles.main} ${(navStyle || navbarOpen) && styles.glossy} ${
        inter.className
      } ${navbarOpen ? styles["show-navbar"] : ""}`}
    >
      <div className={styles["left-links"]}>
        <Link href={initialPage ? "#about" : "/#about"}>Sobre Mim</Link>
        <Link href={initialPage ? "#work" : "/#work"}>Trabalho</Link>
      </div>
      <input
        className={styles.checkbox}
        type='checkbox'
        checked={navbarOpen}
        name=''
        id=''
        onClick={() => {
          if (setNavbarOpen) setNavbarOpen(!navbarOpen);
        }}
      />
      <div className={styles["hamburger-lines"]}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
      <div className={`${styles["nav-menu"]} ${navbarOpen ? styles.show : ""}`}>
        <Link onClick={closeNavMenu} href={initialPage ? "#about" : "/#about"}>
          Sobre Mim
        </Link>
        <Link onClick={closeNavMenu} href={initialPage ? "#work" : "/#work"}>
          Trabalho
        </Link>
      </div>

      <div className={styles.logo}>
        <Link onClick={closeNavMenu} href={initialPage ? "#hero" : "/"}>
          <span className={styles.name}>
            <span style={{ fontWeight: 300 }}>GUSTAVO</span> FONSECA
          </span>
        </Link>
      </div>
      <Link href={initialPage ? "#contact" : "/#contact"}>
        <Button
          text='Contato'
          style={styles.button}
          clickFunction={closeNavMenu}
        />
      </Link>
    </nav>
  );
}
