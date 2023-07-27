import styles from "./AboutMeSection.module.css";
import Image from "next/image";
import meImage from "../../../public/images/me.jpg";
import { AnimatedHeading } from "../AnimatedHeading";

const headings = [
  "Developer",
  "Designer",
  "Problem solver",
  "Freelancer",
  "Coffeeholic",
  "Globetrotter",
];

export default function AboutMeSection({}) {
  return (
    <section id='about' className={styles.main}>
      <Image
        draggable={false}
        className={styles.meImage}
        src={meImage}
        alt='Gustavo Fonseca'
        width={500}
        height={500}
        quality={100}
      />

      <div className={styles.text}>
        <span className='section-title'>About</span>
        <span className={styles.heading}>
          <AnimatedHeading headings={headings} />
        </span>
        <span className={styles.description}>
          I am Gustavo, a passionate freelancer bringing you{" "}
          <span className='white-text'>
            programming and design from the future
          </span>
          . My expertise is developing next-level websites and web applications
          including full frontend design.
        </span>
      </div>
    </section>
  );
}
