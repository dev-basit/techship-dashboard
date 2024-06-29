import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWidth();
  }, []);

  const setWidth = () => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  };

  return {
    windowWidth,
    isMobileScreen: windowWidth <= 568,
    isTabletScreen: windowWidth <= 992,
    isLaptopScreen: windowWidth <= 1440,
  };
};
