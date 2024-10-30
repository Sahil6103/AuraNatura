import React from "react";
import { HeadingBanner } from "../Components/Common/HeadingBanner";
import { CartProductCard } from "../Components/Common/CartProductCard";
import { Link } from "react-router-dom";
import { UseScrollTop } from "../Components/Common/UseScrollTop";

export const Cart = () => {
  UseScrollTop();

  return (
    <>
      <HeadingBanner heading="Shopping Cart" page="Shopping Cart" />
      <div className="main-cart px-4 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row gap-8 relative">
        <div className="product-card flex flex-col gap-8 w-full lg:w-[70%] flex-1">
          <CartProductCard />
          <CartProductCard />
          <CartProductCard />
        </div>
        <div className="product-order xl:w-[30%] px-4 py-2">
          <div className="order flex flex-col gap-2">
            <h1 className="text-[1.5rem] font-bold">Order Summary</h1>
            <div className="main-content bg-[#e9e9e9] flex flex-col gap-3 px-5 py-8">
              <div className="total-item flex justify-between items-center">
                <span className="text-[1.1rem]">Total Items</span>
                <span className="text-[1.1rem]">3</span>
              </div>
              <div className="Subtotal flex justify-between items-center">
                <span className="text-[1.1rem]">Sub Total</span>
                <span className="text-[1.1rem]">&#8377;3000.00</span>
              </div>
              <div className="delivery flex justify-between items-center">
                <span className="text-[1.1rem]">Delivary Charge</span>
                <span className="text-[1.1rem]">&#8377;00.00</span>
              </div>
              <hr className=" border border-gray-300" />
              <div className="total flex justify-between items-center">
                <span className="text-[1.1rem] font-semibold">Total</span>
                <span className="text-[1.1rem] font-semibold">
                  &#8377;3000.00
                </span>
              </div>
              <Link
                to="/checkout"
                className="bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] text-center mt-5 px-12 p-1.5 text-[1.3rem] hidden md:flex justify-center items-center"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
        <div className="small-device-total bg-[#f0efed] w-full md:hidden flex justify-between sticky bottom-0 py-2 ">
          <div className="total-price flex flex-col">
            <span className="text-[1rem]">Total</span>
            <span className="text-[1.2rem] font-bold">&#8377;3000.00</span>
          </div>
          <Link
            to="/checkout"
            className="flex justify-center items-center text-center bg-[#b48b5e] text-[1.1rem] text-[#f0efed] px-6"
          >
            Place Order
          </Link>
        </div>
      </div>
    </>
  );
};
