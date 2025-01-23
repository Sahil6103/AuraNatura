import React, { useEffect, useState } from "react";
import { Filter } from "../Components/Common/Filter";
import { FilterHorizontalIcon } from "hugeicons-react";
import { ProductCard } from "../Components/Common/ProductCard";
import { ExclusivePerfume1, ExclusivePerfume2 } from "../assets/index";
import { HeadingBanner } from "../Components/Common/HeadingBanner";
import { UseScrollTop } from "../Components/Common/UseScrollTop";
import axios from "axios";
import { UnavailableIcon } from "hugeicons-react";

const Exclusive = () => {
  const [products, setProducts] = useState([]);
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

  const fetchExclusivePerfume = async () => {
    const res = await axios("http://localhost:5000/products");
    const exclusivePerfume = res.data.filter(
      (product) => product.proCategory.toLowerCase() === "exclusive",
    );
    setProducts(exclusivePerfume);
  };

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
    fetchExclusivePerfume();
  }, []);

  return (
    <>
      <HeadingBanner
        heading="Exclusive Collection"
        page="Exclusive Collection"
      />
      <div className="men flex flex-col gap-8 px-4 md:px-10 py-10">
        <div className="main-content md:relative flex flex-col md:flex-row justify-between items-start gap-8 md:gap-10 xl:gap-16 ">
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

          {/* <div className="products grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 lg:gap-10">
            {products.map((product) => (
              <ProductCard
                key={product.proId}
                src={MenPerfume}
                productName={product.proTitle}
                price={product.proPrice}
              />
            ))}
          </div> */}
          <div className="products w-full">
            {products.length > 0 ? (
              <div className="products grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-16 lg:gap-10">
                {products.map((product) => (
                  <ProductCard
                    key={product.proId}
                    id={product.id}
                    src={ExclusivePerfume1}
                    productName={product.proTitle}
                    price={product.proPrice}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center md:self-start gap-2">
                <UnavailableIcon color="silver" size={100} />
                <span className="text-[2rem] text-gray-400">
                  No products found!
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Exclusive;
