import React from "react";
import styles from "./HeroProject.module.css";
import Image from "next/image";
import { Buttons, projectDataProps } from "@/project-data";

import { formatDate } from "@/helper/formatDate";
import GoBackButton from "../ui/GoBackButton";
import ViewProjectButton from "../ui/ViewProjectButton";
import DownArrowIcon from "../icons/DownArrowIcon";
import OpenSourceButton from "../ui/OpenSourceButton";

export default function HeroProject({
  title,
  description,
  headImage,
  date,
  tags,
  projectLink,
  openSourceLink,
}: projectDataProps) {
  if (!title) return;

  console.log(projectLink);

  return (
    <section id='hero' className={styles.main}>
      <GoBackButton />
      <div className={styles["image-overlay"]}>
        <Image
          src={headImage}
          height={500}
          width={500}
          alt={title}
          unoptimized
          priority
          className={styles["head-image"]}
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
          {projectLink ? <ViewProjectButton link={projectLink} /> : ""}
          {openSourceLink ? <OpenSourceButton link={openSourceLink} /> : ""}
        </div>
      </div>
      <DownArrowIcon className={styles["down-icon"]} />
    </section>
  );
}
