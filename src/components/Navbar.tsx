import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

interface NavbarProps {
  aboutMeRef: React.RefObject<HTMLElement>;
}

export default function Navbar({ aboutMeRef }: NavbarProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hasHeroPassed, setHasHeroPassed] = useState<Boolean>(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (aboutMeRef.current) {
      if (scrollPosition >= aboutMeRef.current?.offsetTop - 5) {
        setHasHeroPassed(true);
      } else {
        setHasHeroPassed(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  return (
    <nav className={`${styles.main} ${hasHeroPassed && styles.glossy} `}>
      <div className={styles["left-links"]}>
        <a href='#'>About</a>
        <a href='#'>Work</a>
      </div>
      <div className={styles.logo}>
        <a>Gustavo Fonseca</a>
      </div>
      <div className={styles["hit-me"]}>Hit me up</div>
    </nav>
  );
}
