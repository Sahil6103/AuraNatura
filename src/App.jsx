import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Router/AppRoutes";
import { Toaster } from "react-hot-toast";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "../src/assets/css/index.css";

const App = () => {
  // useEffect(() => {
  //   AOS.init({
  //     offset: 200, // Offset (in px) from the original trigger point
  //     delay: 100, // Delay (in ms) before the animation starts
  //     duration: 600, // Animation duration (in ms)
  //     once: false, // Whether animation should happen only once
  //     mirror: true, // Whether elements animate out while scrolling past them
  //   });
  // }, []);

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </>
  );
};

export default App;
