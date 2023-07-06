import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  clickFunction: () => void;
  style?: string;
}

export default function Button({
  text,
  clickFunction,
  style = "",
}: ButtonProps) {
  return (
    <div className={`${styles.button} ${style}`} onClick={clickFunction}>
      {text}
    </div>
  );
}
