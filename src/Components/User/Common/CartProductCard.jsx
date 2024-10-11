import React from "react";
import { MenPerfume } from "../../../assets/index";
import { PlusSignIcon, Remove01Icon, Delete02Icon } from "hugeicons-react";

export const CartProductCard = () => {
  return (
    <>
      <div className="cart w-full lg:w-[85%]">
        <div className="product-card py-2 flex justify-evenly items-center shadow-[0px_1px_0px_rgba(17,17,26,0.05),_0px_0px_8px_rgba(17,17,26,0.1)] ">
          <div className="product-img">
            <img src={MenPerfume} alt="" className="w-[150px]" />
          </div>
          <div className="prodcut-details md:w-[60%] flex flex-col gap-1.5 md:gap-3 px-2 md:px-4 py-2">
            <h1 className="text-[1.1rem] md:text-[1.3rem] leading-[25px] font-semibold">
              Lorem ipsum dolor sit amet
            </h1>
            <span className="text-[1.1rem] md:text-[1.2rem]">Size : 50ML</span>
            <div className="qty">
              <div className="buttons flex">
                <button className="px-3 py-1 bg-black text-white text-center text-[1.2rem]">
                  <Remove01Icon color="#fff" size={18} />
                </button>
                <input
                  type="text"
                  disabled
                  className="py-1 w-[50px] text-center border border-gray-400"
                  value={1}
                />
                <button className="px-3 py-1 bg-black text-white text-center text-[1.2rem]">
                  <PlusSignIcon color="#fff" size={18} />
                </button>
              </div>
            </div>
            <span className="text-[1.2rem] md:text-[1.5rem] font-bold">
              &#8377;500.00
            </span>
            <div className="delete top-5 right-5 cursor-pointer mb-2 flex items-center gap-2 w-fit">
              <Delete02Icon
                color="black"
                size="22"
                className="md:w-[24px] md:h-[24px]"
              />
              <span className="text-[1.1rem]">Remove</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
