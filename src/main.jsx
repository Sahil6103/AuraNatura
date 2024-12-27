import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
// import { App } from "./App.jsx";
const LazyApp = React.lazy(() => import("./App"));
import "../src/index.css";
import { Preloader } from "./Components/Common/Preloader";
// import { Preloader } from "./Components/User/Common/Preloader.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  // <App />
  <Suspense fallback={<Preloader />}>
    <LazyApp />
  </Suspense>
  // </StrictMode>
);
