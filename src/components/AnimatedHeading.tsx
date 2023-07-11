import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
import usePreviousState from "@/hooks/usePreviousState";

interface AnimatedHeading {
  headings: string[];
}

const typingSpeed = 0.125;
const deleteSpeed = 0.1;
const delayBeforeDelete = 1.1;

const headingVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: typingSpeed,
    },
  },
  exit: {
    transition: {
      staggerChildren: deleteSpeed,
      staggerDirection: -1,
    },
  },
};

const letterVariants: Variants = {
  enter: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
  },
  exit: {
    opacity: 0,
    y: -30,
    x: 30,
    skew: 10,
    rotateZ: 25,
    scale: 1.5,
    filter: "blur(10px)",
  },
};

type TypingMode = "typing" | "deleting";

export const AnimatedHeading: React.FC<AnimatedHeading> = ({ headings }) => {
  const [typingMode, setTypingMode] = useState<TypingMode>("typing");
  const [headingIndex, setHeadingIndex] = useState(0);
  const previousHeadingIndex = usePreviousState(0, headingIndex);

  const currentHeading = headings[headingIndex];
  const previousHeading = headings[previousHeadingIndex];

  const updateTypingModeTimer = useCallback(() => {
    if (typingMode === "typing") {
      const typeDuration =
        (currentHeading.length * typingSpeed + delayBeforeDelete) * 1000;

      return setTimeout(() => {
        const nextHeadingIndex = (headingIndex + 1) % headings.length;

        setHeadingIndex(nextHeadingIndex);
        setTypingMode("deleting");
      }, typeDuration);
    }

    const deleteDuration = previousHeading.length * deleteSpeed * 1000;

    return setTimeout(() => {
      setTypingMode("typing");
    }, deleteDuration);
  }, [
    currentHeading.length,
    headingIndex,
    headings.length,
    previousHeading.length,
    typingMode,
  ]);

  useEffect(() => {
    const typingTimer = updateTypingModeTimer();

    return () => clearTimeout(typingTimer);
  }, [typingMode, updateTypingModeTimer]);

  return (
    <span className='section-heading'>
      <AnimatePresence mode='wait'>
        <motion.h2
          aria-hidden
          key={currentHeading}
          variants={headingVariants}
          initial='enter'
          animate='visible'
          exit='exit'
        >
          {currentHeading.split("").map((char, index) => (
            <motion.span key={`${char}-${index}`} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>
      </AnimatePresence>
    </span>
  );
};
