import React, { useEffect, useState } from "react";
import { Filter } from "../Common/Filter";
import { FilterHorizontalIcon } from "hugeicons-react";
import { ProductCard } from "../Common/ProductCard";
import { MenPerfume } from "../../../assets/index";
import { WomenPerfume } from "../../../assets/index";
import { HeadingBanner } from "../Common/HeadingBanner";
import { UseScrollTop } from "../Common/UseScrollTop";

export const Men = () => {
  UseScrollTop();

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    if (isSidebarOpen) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeadingBanner heading="Men's Collection" page="Men's Collection" />
      <div className="men flex flex-col gap-8 px-4 md:px-10 py-10">
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
            <ProductCard src={MenPerfume} productName="Light" price="500" />
            <ProductCard src={WomenPerfume} productName="Light" price="500" />
            <ProductCard src={MenPerfume} productName="Light" price="500" />
            <ProductCard src={WomenPerfume} productName="Light" price="500" />
            <ProductCard src={MenPerfume} productName="Light" price="500" />
            <ProductCard src={MenPerfume} productName="Light" price="500" />
            <ProductCard src={WomenPerfume} productName="Light" price="500" />
            <ProductCard src={WomenPerfume} productName="Light" price="500" />
            <ProductCard src={WomenPerfume} productName="Light" price="500" />
            <ProductCard src={WomenPerfume} productName="Light" price="500" />
          </div>
        </div>
      </div>
    </>
  );
};
