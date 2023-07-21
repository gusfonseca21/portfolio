import React from "react";
import styles from "./RelatedProjects.module.css";
import { projectDataProps } from "@/project-data";
import Image from "next/image";
import { formatDate } from "@/helper/formatDate";
import Link from "next/link";

export default function RelatedProjects({
  projects,
}: {
  projects: projectDataProps[];
}) {
  return (
    <section className={styles.main}>
      <div className={styles["section-heading"]}>
        <span className='section-title'>Related Projects</span>
        <span className='section-heading'>
          <h2>Discover new worlds</h2>
        </span>
      </div>
      <div className={styles["other-projects"]}>
        {projects.map((project, index) => {
          if (index <= 1) {
            return (
              <Link
                key={project.id}
                href={`/project/${project.title.toLowerCase()}/#hero`}
                className={styles["other-project"]}
              >
                <Image
                  key={project.id}
                  src={project.headImage}
                  height={500}
                  width={500}
                  className={styles["project-image"]}
                  alt={project.title}
                  unoptimized
                  priority
                />
                <div className={styles.text}>
                  <span className={styles.date}>
                    {formatDate(project.date)}
                  </span>
                  <span className={styles.title}>{project.title}</span>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => {
                      return (
                        <span key={tag} className={styles.tag}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <span className={styles.description}>
                    {project.description}
                  </span>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </section>
  );
}
