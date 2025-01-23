import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Components/User/Home/Header";
import { Footer } from "../Components/User/Home/Footer";
import { Preloader } from "../Components/Common/Preloader";

export const UserLayout = () => {
  // const [loading, setLoading] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // useEffect(() => {
  //   const storedUser = localStorage.getItem("loggednInUser");
  //   if (storedUser) {
  //     setLoggedInUser(JSON.parse(storedUser));
  //   }
  // }, []);

  const handleLogout = () => {
    setLoggedInUser(null);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <div className="user-layout">
      <Header user={loggedInUser} onLogout={handleLogout} />
      <Outlet context={{ setLoggedInUser }} />
      <Footer />
    </div>
  );
};
