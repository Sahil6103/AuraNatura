import React, { StrictMode, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
const LazyApp = React.lazy(() => import("./App"));

import "../src/index.css";
import { Preloader } from "./Components/Common/Preloader";

const AppWithPreloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Function to check if everything is fully loaded
    const checkIfLoaded = () => {
      if (document.readyState === "complete") {
        setIsLoaded(true);
      }
    };

    // If already loaded, set state immediately
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", checkIfLoaded);
    }

    return () => {
      window.removeEventListener("load", checkIfLoaded);
    };
  }, []);

  return !isLoaded ? <Preloader /> : (
    <Suspense fallback={<Preloader />}>
      <LazyApp />
    </Suspense>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppWithPreloader />
  </StrictMode>
);
