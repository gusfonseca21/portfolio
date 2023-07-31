"use client";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./WorkSection.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import AnimatedProjectText from "../AnimatedProjectText";
import Link from "next/link";
import { projectData } from "@/project-data";
import { formatDate } from "@/helper/formatDate";

export default function WorkSection() {
  const [sliderProgress, setSliderProgress] = useState(0);
  const [imageHovered, setImageHovered] = useState<null | number>(null);

  const [sliderRef] = useKeenSlider({
    mode: "free",
    slides: {
      origin: "center",
      perView: "auto",
      spacing: 15,
    },
    detailsChanged(property) {
      setSliderProgress(property.track.details.progress);
    },
  });

  const imagePosition = {
    transform: `translateX(${sliderProgress * 10}%)`,
  };

  const sliderFill = {
    width: `${sliderProgress < 0 ? 0 : (sliderProgress / 0.8814) * 100}%`,
  };

  return (
    <section id='work' className={styles.main}>
      <span className='section-title'>Work</span>
      <h2 className='section-heading'>Dig into my universe</h2>
      <div
        className={styles["project-slider"]}
        draggable={false}
        ref={sliderRef}
      >
        {projectData.map((project) => {
          const formattedDate = formatDate(project.date);
          return (
            <Link
              href={`/project/${project.title.toLowerCase()}`}
              key={project.id}
              onMouseEnter={() => setImageHovered(project.id)}
              onMouseLeave={() => setImageHovered(null)}
              className={`keen-slider__slide ${styles["project-image-div"]}`}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onTouchMove={() => setImageHovered(null)}
            >
              <AnimatedProjectText
                projectIndex={imageHovered}
                projectObj={{ ...project, date: formattedDate }}
              />
              <Image
                draggable={false}
                src={project.headImage}
                alt={project.title}
                width={500}
                height={500}
                className={styles["project-image"]}
                style={imagePosition}
                unoptimized
              />
            </Link>
          );
        })}
        <div className={styles["slider-feedback"]}>
          <div className={styles["slider-fill"]} style={sliderFill} />
        </div>
      </div>
    </section>
  );
}
