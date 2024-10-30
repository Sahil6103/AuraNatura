import React, { useState } from "react";
import { MenPerfume } from "../assets/index";
import { PlusSignIcon, Remove01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import { UseScrollTop } from "../Components/Common/UseScrollTop";

export const ProductDetails = () => {
  UseScrollTop();

  let [count, setCount] = useState(1);

  return (
    <>
      <div className="productdetails px-4 md:px-16 py-8 lg:py-16 flex flex-col lg:flex-row justify-between items-start gap-5">
        <div className="product-img flex justify-center items-center w-full lg:w-[40%]">
          <img src={MenPerfume} alt="" className="w-[70%] bg-[#e7e7e7]" />
        </div>
        <div className="product-detail flex flex-col gap-2 w-full lg:w-[60%]">
          <div className="detail flex flex-col">
            <span className="text-[#64748b] text-[1.1.rem] lg:text-[1.2rem]">
              Men's Perfume
            </span>
            <h1 className="text-[1.5rem] lg:text-[1.8rem] font-semibold">
              Lorem ipsum dolor sit amet.
            </h1>
            <span className="text-[1.2rem] lg:text-[1.4rem] font-semibold">
              50ML
            </span>
            <div className="price flex items-center gap-2">
              <span className="line-through lg:text-[1.2rem] text-[#64748b]">
                &#8377;700.00
              </span>
              <span className="text-[1.2rem] lg:text-[1.5rem] font-bold">
                &#8377;500.00
              </span>
            </div>
            <p className="text-[1.1rem] w-full lg:w-[85%]">
              Light by AuraNatura is a refreshing and invigorating men's
              fragrance designed to uplift and energize your senses. Crafted
              with a modern blend of bright citrus, crisp greens, and a subtle
              hint of spice, this scent radiates a clean, fresh vibe perfect for
              daily wear. The top notes of lemon and bergamot provide a burst of
              freshness, while heart notes of lavender and sage offer a calming
              balance. As it settles, the base notes of musk and cedarwood give
              the fragrance a smooth, warm finish, evoking strength and
              confidence. "Light" is a perfect choice for the man who seeks
              elegance in simplicity, leaving a memorable yet understated trail
              wherever he goes.
            </p>
          </div>
          <div className="qty mt-5">
            <div className="buttons flex">
              <button
                className="px-3 lg:px-4 py-1 lg:py-2 bg-black text-white text-center text-[1.2rem]"
                onClick={() => (count > 1 ? setCount(count - 1) : count)}
              >
                <Remove01Icon color="#fff" size={18} />
              </button>
              <input
                type="text"
                disabled
                className="py-1 lg:py-2 w-[50px] lg:w-[60px] text-center border border-gray-400"
                value={count}
              />
              <button
                className="px-3 lg:px-4 py-1 lg:py-2 bg-black text-white text-center text-[1.2rem]"
                onClick={() => setCount(count + 1)}
              >
                <PlusSignIcon color="#fff" size={18} />
              </button>
            </div>
          </div>
          <div className="buttons flex flex-col md:flex-row gap-3 lg:gap-5 mt-5">
            <Link
              to="/cart"
              className="text-center py-1 lg:py-2 md:px-10 lg:px-16 text-[1.2rem] bg-neutral-800 text-[#f0efed] border-2 border-neutral-800 hover:text-neutral-800 hover:bg-transparent transition-all duration-300"
            >
              Add to Cart
            </Link>
            <Link
              to="/checkout"
              className="text-center py-1 lg:py-2 md:px-12 lg:px-[76px] text-[1.2rem] bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] hover:bg-transparent hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
