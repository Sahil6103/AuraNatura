import { useEffect } from "react";

export const UseScrollTop = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
};
