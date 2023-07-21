import React from "react";
import { motion } from "framer-motion";
import styles from "./AnimatedProjectText.module.css";
import { projectDataProps } from "@/project-data";

interface AnimatedProjectProps {
  projectObj: projectDataProps;
  projectIndex: number | null;
}

export default function AnimatedProjectText({
  projectObj,
  projectIndex,
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

  const { id, title, tags, headImage } = projectObj;

  return (
    <div className={styles["text-div"]}>
      <span draggable={false} className={styles.container}>
        <motion.span
          draggable={false}
          className={styles["project-date"]}
          variants={textMotion}
          animate={projectIndex === id ? "visible" : "hidden"}
        >
          {projectObj.date}
        </motion.span>
      </span>
      <span className={styles.container}>
        <motion.span
          className={styles["project-title"]}
          variants={textMotion}
          animate={projectIndex === id ? "visible" : "hidden"}
        >
          {title}
        </motion.span>
      </span>
      <span className={styles.container}>
        <motion.span
          draggable={false}
          className={styles["project-tags"]}
          variants={textMotion}
          animate={projectIndex === id ? "visible" : "hidden"}
        >
          {...tags}
        </motion.span>
      </span>
    </div>
  );
}
