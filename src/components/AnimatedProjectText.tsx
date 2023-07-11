import React from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedProjectText.module.css";

interface AnimatedProjectProps {
  projectIndex: null | number;
  projectObj: {
    name: string;
    date: string;
    subheader: string;
    index: number;
  };
}

export default function AnimatedProjectText({
  projectIndex,
  projectObj,
}: AnimatedProjectProps) {
  const textMotion = {
    hidden: {
      y: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.4 },
    },
    visible: {
      y: "0%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.3 },
    },
  };

  return (
    <div className={styles["text-div"]}>
      <span draggable={false} className={styles.container}>
        <motion.span
          draggable={false}
          className={styles["project-date"]}
          variants={textMotion}
          animate={projectIndex === projectObj.index ? "visible" : "hidden"}
        >
          {projectObj.date}
        </motion.span>
      </span>
      <span className={styles.container}>
        <motion.span
          className={styles["project-name"]}
          variants={textMotion}
          animate={projectIndex === projectObj.index ? "visible" : "hidden"}
        >
          {projectObj.name}
        </motion.span>
      </span>
      <span className={styles.container}>
        <motion.span
          draggable={false}
          className={styles["project-subheader"]}
          variants={textMotion}
          animate={projectIndex === projectObj.index ? "visible" : "hidden"}
        >
          {projectObj.subheader}
        </motion.span>
      </span>
    </div>
  );
}
