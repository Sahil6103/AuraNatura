import React, { useState } from "react";
import { Filter } from "../Common/Filter";
import { FilterHorizontalIcon } from "hugeicons-react";
import { ProductCard } from "../Common/ProductCard";
import { ManPerfume } from "../../../assets/index";
import { WomanPerfume } from "../../../assets/index";

export const Woman = () => {
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
      <div className="men flex flex-col gap-8 px-4 md:px-10 py-10">
        <div className="context flex justify-center items-center">
          <h1 className="text-[2.2rem] font-[900] text-center leading-[50px] tracking-widest text-[#b28a79]">
            Woman's Collection
          </h1>
        </div>

        <div className="main-content md:relative flex flex-col md:flex-row justify-center items-start gap-8 md:gap-10 xl:gap-16 ">
          <button
            className="flex md:hidden justify-center items-center gap-2 self-start px-8 py-1.5 bg-[#b48b5e] text-[#e9e9e9]"
            onClick={toggleSidebar}
          >
            <FilterHorizontalIcon color="#e9e9e9" size={22} />
            <span className="text-[1.2rem]">Filter</span>
          </button>
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black opacity-40 md:hidden z-10 "
              onClick={closeSidebar}
            ></div>
          )}
          <div
            className={`fixed md:sticky top-0 left-0 h-[100vh] z-30 transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0`}
          >
            <Filter closeSidebar={closeSidebar} />
          </div>

          <div className="products grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 lg:gap-10">
            <ProductCard src={ManPerfume} productName="Light" price="500" />
            <ProductCard src={WomanPerfume} productName="Light" price="500" />
            <ProductCard src={ManPerfume} productName="Light" price="500" />
            <ProductCard src={WomanPerfume} productName="Light" price="500" />
            <ProductCard src={ManPerfume} productName="Light" price="500" />
            <ProductCard src={ManPerfume} productName="Light" price="500" />
            <ProductCard src={WomanPerfume} productName="Light" price="500" />
            <ProductCard src={WomanPerfume} productName="Light" price="500" />
            <ProductCard src={WomanPerfume} productName="Light" price="500" />
            <ProductCard src={WomanPerfume} productName="Light" price="500" />
          </div>
        </div>
      </div>
    </>
  );
};