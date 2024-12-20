import React from "react";
import { Menu01Icon, Logout02Icon } from "hugeicons-react";
import { useNavigate } from "react-router-dom";

export const AdminHeader = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove any stored authentication data
    localStorage.removeItem("adminToken"); // Assuming you're storing token for authentication
    localStorage.removeItem("adminName"); // Optional: Clear stored admin info

    // Provide user feedback if necessary
    console.log("Logged out successfully");

    // Redirect user to login page
    navigate("/admin");
  };

  return (
    <>
      <header className="py-[18px] px-5 md:px-8 shadow-sm bg-white mb-1 sticky top-0 z-[99]">
        <nav className="flex justify-between">
          <button className="md:hidden" onClick={toggleSidebar}>
            <Menu01Icon color="#000" size={26} />
          </button>
          <div className="useraction flex justify-center items-center ms-auto gap-4">
            <div className="userinital">
              <span className="bg-cyan-500 text-white w-[20px] h-[20px] p-[18px] text-center text-[1.2rem] flex justify-center items-center rounded-full font-[900]">
                S
              </span>
            </div>
            <button
              onClick={handleLogout}
              className="font-bold border-2 px-2 py-1 rounded-md bg-red-400 border-none text-white"
            >
              Logout
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
