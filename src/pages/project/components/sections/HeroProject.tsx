import React from "react";
import styles from "./HeroProject.module.css";
import Image from "next/image";
import { Buttons } from "@/project-data";

import { formatDate } from "@/helper/formatDate";
import GoBackButton from "../ui/GoBackButton";
import ViewProjectButton from "../ui/ViewProjectButton";
import DownArrowIcon from "../icons/DownArrowIcon";
import OpenSourceButton from "../ui/OpenSourceButton";

interface HeroProjectProps {
  id: number;
  title: string;
  date: string;
  description: string;
  tags: string[];
  buttons: Buttons[];
  headImage: string;
  projectLink: string;
  openSourceLink?: string;
}

export default function HeroProject({
  title,
  description,
  headImage,
  date,
  tags,
  projectLink,
  openSourceLink,
}: HeroProjectProps) {
  return (
    <section className={styles.main}>
      <GoBackButton />
      <div className={styles["image-overlay"]}>
        <div
          className={styles["head-image"]}
          style={{
            backgroundImage: `url(${headImage})`,
          }}
        />
      </div>
      <div className={styles.content}>
        <span className={styles.date}>{formatDate(date)}</span>
        <span className={styles.title}>{title}</span>
        <span className={styles.description}>{description}</span>
        <div className={styles.tags}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className={styles.buttons}>
          <ViewProjectButton link={projectLink} />
          {openSourceLink ? <OpenSourceButton link={openSourceLink} /> : ""}
        </div>
      </div>
      <DownArrowIcon className={styles["down-icon"]} />
    </section>
  );
}
