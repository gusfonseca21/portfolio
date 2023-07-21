import React from "react";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import styles from "./GoBackButton.module.css";
import Link from "next/link";

export default function GoBackButton() {
  return (
    <Link href='/' className={styles.main}>
      <LeftArrowIcon className={styles.icon} />
      <span className={styles.text}>Go back</span>
    </Link>
  );
}
