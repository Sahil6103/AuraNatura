import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import "../src/index.css";
// import { Preloader } from "./Components/User/Common/Preloader.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>

  <App />

  // </StrictMode>
);
