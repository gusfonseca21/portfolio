import Button from "@/components/Button";
import React from "react";
import styles from "./ViewProject.module.css";
import EyeIcon from "../icons/EyeIcon";

interface ViewProjectButtonProps {
  link: string;
}

export default function ViewProjectButton({ link }: ViewProjectButtonProps) {
  return (
    <Button
      text='View Project'
      iconBefore={<EyeIcon className={styles.icon} />}
      style={styles.button}
      clickFunction={() => {
        window.open(link);
      }}
    />
  );
}
