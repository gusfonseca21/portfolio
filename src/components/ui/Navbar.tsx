import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import Button from "../Button";
import Image from "next/image";
import logo from "../../../public/images/logo2.png";
import { Link } from "react-scroll";

const scrollDuration = 1000;

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

  const funcTeste = () => {
    console.log(`DEVE LEVAR À SEÇÃO DE CONTATO`);
  };

  return (
    <nav className={`${styles.main} ${hasHeroPassed && styles.glossy} `}>
      <div className={styles["left-links"]}>
        <Link to='about' smooth={true} duration={scrollDuration}>
          About
        </Link>
        <Link to='work' smooth={true} duration={scrollDuration}>
          Work
        </Link>
      </div>
      <div className={styles.logo}>
        <Link to='hero' smooth={true} duration={scrollDuration}>
          <Image
            draggable={false}
            src={logo}
            alt='Gustavo Fonseca'
            width={180}
          />
        </Link>
      </div>
      <Button text='Hit me up!' clickFunction={funcTeste} />
    </nav>
  );
}
