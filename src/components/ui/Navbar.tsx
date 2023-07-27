import styles from "./Navbar.module.css";
import Button from "../Button";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

interface NavbarProps {
  navStyle: boolean;
}

export default function Navbar({ navStyle }: NavbarProps) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const pathName = usePathname();

  const initialPage = pathName === "/";

  console.log("navbarOpen", navbarOpen);
  return (
    <nav
      className={`${styles.main} ${(navStyle || navbarOpen) && styles.glossy} ${
        inter.className
      } ${navbarOpen ? styles["show-navbar"] : ""}`}
    >
      <div className={styles["left-links"]}>
        <Link href={initialPage ? "#about" : "/#about"}>About</Link>
        <Link href={initialPage ? "#work" : "/#work"}>Work</Link>
      </div>
      <input
        className={styles.checkbox}
        type='checkbox'
        name=''
        id=''
        onClick={() => setNavbarOpen(!navbarOpen)}
      />
      <div className={styles["hamburger-lines"]}>
        <span className={`${styles.line} ${styles.line1}`}></span>
        <span className={`${styles.line} ${styles.line2}`}></span>
        <span className={`${styles.line} ${styles.line3}`}></span>
      </div>
      <div className={`${styles["nav-menu"]} ${navbarOpen ? styles.show : ""}`}>
        <Link href={initialPage ? "#about" : "/#about"}>About</Link>
        <Link href={initialPage ? "#work" : "/#work"}>Work</Link>
      </div>

      <div className={styles.logo}>
        <Link href={initialPage ? "#hero" : "/"}>
          <span className={styles.name}>
            <span style={{ fontWeight: 300 }}>GUSTAVO</span> FONSECA
          </span>
        </Link>
      </div>
      <Link href={initialPage ? "#contact" : "/#contact"}>
        <Button text='Hit me up!' style={styles.button} />
      </Link>
    </nav>
  );
}
