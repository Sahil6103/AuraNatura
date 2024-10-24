import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/User/Header";
import { Footer } from "../Components/User/Footer";
// import { Preloader } from "../Components/User/Common/Preloader";

export const UserLayout = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 3000); // Preloader duration

  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, []);

  // return loading ? (
  // <Preloader />
  // ) : (
  return (
    <div className="user-layout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
