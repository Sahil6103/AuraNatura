import React from "react";
import { Link } from "react-router-dom";
import { ProductCard } from "./Common/ProductCard";
import { ManPerfume } from "../../assets/index";
import { WomanPerfume } from "../../assets/index";

export const MenCollection = () => {
  return (
    <>
      <div className="product-collection flex flex-col justify-center items-center gap-8 px-5 md:px-10 py-8 md:py-10">
        <div className="context flex flex-col justify-center items-center text-center gap-2 md:gap-1">
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold tracking-widest text-[#b28a79]">
            Men's Collection
          </h1>
          <p className="text-[1.1rem]">
            Elevate your style with our premium collection for men.
          </p>
        </div>
        <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-10">
          <ProductCard src={ManPerfume} productName="Light" price="500" />
          <ProductCard src={WomanPerfume} productName="Light" price="500" />
          <ProductCard src={ManPerfume} productName="Light" price="500" />
          <ProductCard src={WomanPerfume} productName="Light" price="500" />
        </div>
        <Link
          to="/man-collection"
          className="bg-[#202020] border-2 border-[#202020] px-8 md:px-10 py-1.5 md:py-2 text-[#f0efed] text-[1.1rem] hover:bg-transparent hover:text-[#202020] transition-all duration-300"
        >
          Explore More
        </Link>
      </div>
    </>
  );
};
