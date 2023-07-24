"use client";
import React, { useState } from "react";
import styles from "./Button.module.css";
import Loading from "./ui/Loading";

interface ButtonProps {
  text: string;
  clickFunction?: () => void;
  clickAnimation?: boolean;
  style?: string;
  loading?: boolean;
  iconBefore?: JSX.Element;
  iconAfter?: JSX.Element;
}

export default function Button({
  text,
  clickFunction,
  style = "",
  loading,
  iconBefore,
  iconAfter,
}: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandler = () => {
    setIsClicked(true);
    if (clickFunction) {
      clickFunction();
    }
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  return (
    <div
      className={`${styles.button} ${style} ${isClicked ? styles.click : ""}`}
      onClick={clickHandler}
    >
      {!loading ? (
        <>
          {iconBefore} {text} {iconAfter}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
