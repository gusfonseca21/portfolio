import { useEffect } from "react";

function useBodyLock(isLocked: boolean) {
  useEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body
    ).overflowY;
    document.body.style.overflowY = isLocked ? "hidden" : originalStyle;

    return () => {
      document.body.style.overflowY = originalStyle;
    };
  }, [isLocked]);
}

export default useBodyLock;
