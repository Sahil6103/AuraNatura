import React, { StrictMode, Suspense, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
const LazyApp = React.lazy(() => import("./App"));

import "../src/index.css"
import { Preloader } from "./Components/Common/Preloader";

const AppWithPreloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleCompleteLoad = () => setIsLoaded(true);

    window.addEventListener("load", handleCompleteLoad);

    return () => {
      window.removeEventListener("load", handleCompleteLoad);
    };
  }, []);

  if (!isLoaded) {
    return <Preloader />;
  }

  return (
    <React.Suspense fallback={<Preloader />}>
      <LazyApp />
    </React.Suspense>
  );
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWithPreloader />
  </React.StrictMode>,
);
