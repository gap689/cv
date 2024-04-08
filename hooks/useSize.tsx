import { useEffect, useState } from "react";
const useSize = () => {
  const isClient = typeof window === 'object'; // Check if window is defined

  const [windowSize, setWindowSize] = useState(
    isClient ? [
    window.innerWidth,
    window.innerHeight,
  ]: [0,0]);

  useEffect(() => {
    if (!isClient) {
      return; // Do nothing if not on the client side
    }
    const windowSizeHandler = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", windowSizeHandler);

    return () => {
      window.removeEventListener("resize", windowSizeHandler);
    };
  }, [isClient]);

  return windowSize;
};

export default useSize;