import styles from "./Navbar.module.css";
import Button from "../Button";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

interface NavbarProps {
  navStyle: boolean;
}

export default function Navbar({ navStyle }: NavbarProps) {
  const pathName = usePathname();

  const initialPage = pathName === "/";

  return (
    <nav
      className={`${styles.main} ${navStyle && styles.glossy} ${
        inter.className
      }`}
    >
      <div className={styles["left-links"]}>
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
