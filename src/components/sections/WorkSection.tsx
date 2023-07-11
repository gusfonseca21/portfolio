import React, { useEffect, useMemo, useState } from "react";
import styles from "./WorkSection.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import mockProject1 from ".././../../public/images/project-mock-1.jpg";
import mockProject2 from ".././../../public/images/project-mock-2.jpg";
import mockProject3 from ".././../../public/images/project-mock-3.jpg";
import Image from "next/image";
import AnimatedProjectText from "../AnimatedProjectText";

const projects = [
  {
    image: mockProject1,
    date: new Date(),
    name: "Contentary",
    subheader: "Website",
  },
  {
    image: mockProject2,
    date: new Date(),
    name: "Nullpunkt",
    subheader: "Website, Shopify",
  },
  {
    image: mockProject3,
    date: new Date(),
    name: "WeatherWorks",
    subheader: "Website, Web-app, Open-source",
  },
];

export default function WorkSection() {
  const [sliderProgress, setSliderProgress] = useState(0);
  const [imageHovered, setImageHovered] = useState<null | number>(null);

  const [sliderRef] = useKeenSlider({
    mode: "free",
    slides: {
      origin: "center",
      perView: "auto",
      spacing: 100,
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

  const formatDate = (date: Date) => {
    const newDate = new Date();

    const formatter = new Intl.DateTimeFormat("pt-BR", {
      month: "long",
      year: "numeric",
    });

    return formatter.format(newDate);
  };

  return (
    <section id='work' className={styles.main}>
      <span className='section-title'>Work</span>
      <span className='section-heading'>
        <h2>Dig into my universe</h2>
      </span>
      <div className={styles["project-slider"]} ref={sliderRef}>
        {projects.map((project, index) => {
          const formattedDate = formatDate(project.date);
          return (
            <div
              key={project.name}
              onMouseOver={() => setImageHovered(index)}
              onMouseLeave={() => setImageHovered(null)}
              className={`keen-slider__slide ${styles["project-image-div"]}`}
              draggable={false}
            >
              <AnimatedProjectText
                projectIndex={imageHovered}
                projectObj={{ ...project, date: formattedDate, index }}
              />
              <Image
                draggable={false}
                src={project.image}
                alt={project.name}
                width={2000}
                height={1000}
                className={styles["project-image"]}
                style={imagePosition}
              />
            </div>
          );
        })}
        <div className={styles["slider-feedback"]}>
          <div className={styles["slider-fill"]} style={sliderFill} />
        </div>
      </div>
    </section>
  );
}
