import React from "react";
import { ProductCard } from "./Common/ProductCard";
import { ProductImg } from "../../assets/index";

export const WomanCollection = () => {
  return (
    <>
      <div className="product-collection flex flex-col justify-center items-center gap-8 px-5 md:px-10 py-8 md:py-10">
        <div className="context flex flex-col justify-center items-center text-center gap-2 md:gap-1">
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold tracking-widest text-[#b28a79]">
            Women's Collection
          </h1>
          <p className="text-[1.1rem]">
            Embrace grace and beauty with our exclusive women's collection.
          </p>
        </div>
        <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 lg:gap-10">
          <ProductCard src={ProductImg} productName="Light" price="500" />
          <ProductCard src={ProductImg} productName="Light" price="500" />
          <ProductCard src={ProductImg} productName="Light" price="500" />
          <ProductCard src={ProductImg} productName="Light" price="500" />
        </div>
        <button className="bg-[#202020] px-8 md:px-10 py-1.5 md:py-2 text-[#f0efed] text-[1.1rem]">
          Explore More
        </button>
      </div>
    </>
  );
};
