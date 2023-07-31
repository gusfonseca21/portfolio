import Button from "@/components/Button";
import React from "react";
import styles from "./OpenSourceButton.module.css";
import GithubIcon from "@/components/icons/GithubIcon";

interface OpenSourceButtonProps {
  link: string;
}

export default function OpenSourceButton({ link }: OpenSourceButtonProps) {
  return (
    <Button
      text='View Source Code'
      iconBefore={<GithubIcon className={styles.icon} />}
      style={styles.button}
      clickFunction={() => {
        window.open(link);
      }}
    />
  );
}
