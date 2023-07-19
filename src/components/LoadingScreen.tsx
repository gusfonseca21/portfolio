import tag from "../../public/icons/tag.svg";
import useBodyLock from "@/hooks/useBodyLock";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  useBodyLock(isLoading);

  useEffect(() => {
    setIsLoading(false);
    document.body.classList.remove("fixed");
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          animate={{ y: "0%" }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1, delay: 0.35 }}
          className={styles["motion-div"]}
        >
          <motion.img
            src={tag.src}
            alt='LOKKEE STUDIOS'
            width={tag.width}
            height={tag.height}
            decoding='sync'
            loading='eager'
            initial={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: [1, 0, 0],
              scale: [1, 0.75, 0],
            }}
            transition={{ duration: 0.5 }}
            style={{ width: "6rem", zIndex: 30 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
