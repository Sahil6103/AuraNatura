import React from "react";
import { Menu01Icon, Logout02Icon } from "hugeicons-react";

export const AdminHeader = ({ toggleSidebar }) => {
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
          </div>
        </nav>
      </header>
    </>
  );
};
