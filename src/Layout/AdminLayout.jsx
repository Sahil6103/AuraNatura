import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { AdminHeader } from "../Components/admin/Header/AdminHeader";
import { AdminSidebar } from "../Components/admin/Sidebar/AdminSidebar";
import store from "../redux/store";
import { Provider } from "react-redux";

export const AdminLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <>
      <Provider store={store}>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 md:hidden z-10"
            onClick={closeSidebar}
          ></div>
        )}
        <main className="admin-layout flex bg-[#f5f3f3] h-screen">
          <div
            className={`fixed md:static z-[100]
                 shadow-xl shadow-blue-gray-900/5 md:shadow-none transition-transform duration-300 ease-in-out ${
                   isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                 } md:translate-x-0`}
          >
            <AdminSidebar closeSidebar={closeSidebar} />
          </div>

          <div className="admin-main flex-1 h-screen overflow-y-auto">
            <AdminHeader toggleSidebar={toggleSidebar} />

            <div className="p-6 h-auto bg-[#f5f3f3]">
              <Outlet />
            </div>
          </div>
        </main>
      </Provider>
    </>
  );
};
