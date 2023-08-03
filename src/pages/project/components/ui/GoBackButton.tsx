import React from "react";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import styles from "./GoBackButton.module.css";
import Link from "next/link";

export default function GoBackButton({ className }: { className?: string }) {
  return (
    <Link href='/' className={`${styles.main} ${className ? className : ""}`}>
      <LeftArrowIcon className={styles.icon} />
      <span className={styles.text}>Voltar</span>
    </Link>
  );
}
