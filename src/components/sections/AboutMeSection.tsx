import styles from "./AboutMeSection.module.css";
import Image from "next/image";
import meImage from "../../../public/images/me.webp";
import { AnimatedHeading } from "../AnimatedHeading";

const headings = [
  "Desenvolvedor",
  "Apaixonado por tecnologia",
  "Solucionador de problemas",
  "Determinado",
  "Aprendiz Incansável",
];

export default function AboutMeSection({}) {
  return (
    <section id='about' className={styles.main}>
      {/* <Image
        draggable={false}
        className={styles.meImage}
        src={meImage}
        alt='Gustavo Fonseca'
        priority
        unoptimized
      /> */}
      <div className={styles["image-box"]}>
        <Image
          draggable={false}
          className={styles.meImage}
          src={meImage}
          alt='Gustavo Fonseca'
          priority
          unoptimized
        />
      </div>
      <div className={styles.text}>
        <span className='section-title'>Sobre Mim</span>
        <div className={styles.heading}>
          <AnimatedHeading headings={headings} />
        </div>
        <span className={styles.description}>
          Sou Gustavo, um profissional do desenvolvimento web, focado em criar
          aplicações{" "}
          <span className='white-text'>
            cuidadosamente projetadas para melhorar a experiência dos usuários.
          </span>{" "}
          Meu objetivo é o desenvolvimento de sistemas que proporcionem uma
          jornada agradável e intuitiva.
        </span>
      </div>
    </section>
  );
}
