import styles from "./HeroSection.module.css";
import Background from "../ui/Background";
import Button from "../Button";
import Link from "next/link";

export default function HeroSection({
  heroHasPassed,
}: {
  heroHasPassed: boolean;
}) {
  return (
    <section className={styles["section-main"]}>
      <div className={styles.main}>
        {!heroHasPassed && <Background />}
        <div className={styles.heading}>
          <h1>
            Programming
            <br /> and Design
            <br /> from the Future
          </h1>
          <Link href='#work'>
            <Button
              text='Dig into my universe'
              style={styles["heading-button"]}
              clickFunction={() => {}}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
