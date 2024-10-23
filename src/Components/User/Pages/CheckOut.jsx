import React, { useEffect } from "react";
import { HeadingBanner } from "../Common/HeadingBanner";
import { UseScrollTop } from "../Common/UseScrollTop";

export const CheckOut = () => {
  UseScrollTop();

  return (
    <>
      <HeadingBanner heading="Checkout" page="Checkout" />
      <div className="checkout px-5 md:px-12 lg:px-20 py-20 flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
        <div className="checkout-form w-full lg:w-3/5 flex flex-col gap-5">
          <div className="heading">
            <h1 className="text-[1.8rem] font-bold">Billing Address</h1>
          </div>
          <form action="" className="py-5 flex flex-col gap-7 lg:gap-10">
            <div className="input-group flex flex-col md:flex-row gap-7">
              <input
                type="text"
                placeholder="First Name"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
            </div>
            <div className="input-group flex flex-col">
              <input
                type="email"
                placeholder="Email Address"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
            </div>
            <div className="input-group flex flex-col">
              <input
                type="text"
                placeholder="Mobile Number"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
            </div>
            <div className="input-group flex flex-col">
              <input
                type="text"
                placeholder="House No. / House Name etc."
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
            </div>
            <div className="input-group flex flex-col">
              <input
                type="text"
                placeholder="Address"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
            </div>
            <div className="input-group flex flex-col md:flex-row gap-7">
              <input
                type="text"
                placeholder="City"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
              <input
                type="text"
                placeholder="State"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
              <input
                type="text"
                placeholder="Pin Code"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black transition-all duration-300"
              />
            </div>
          </form>
        </div>
        <div className="total-cart w-full lg:w-[30%] flex flex-col gap-5">
          <div className="heading">
            <h1 className="text-[1.8rem] font-bold">Cart Total</h1>
          </div>
          <div className="flex flex-col gap-2 bg-[#e9e9e9] px-8 py-10">
            <div className="total">
              <div className="headings flex justify-between items-center">
                <h1 className="text-[1.3rem] font-semibold">Products</h1>
                <h1 className="text-[1.3rem] font-semibold">Total</h1>
              </div>
            </div>
            <div className="products flex flex-col justify-between gap-2">
              <div className="product flex justify-between items-end">
                <span>Lorem ipsum dolor sit x 02</span>
                <span>&#8377;1000.00</span>
              </div>
              <div className="product flex justify-between items-end">
                <span>Lorem ipsum dolor sit x 02</span>
                <span>&#8377;1000.00</span>
              </div>
              <div className="product flex justify-between items-end">
                <span>Lorem ipsum dolor sit x 02</span>
                <span>&#8377;1000.00</span>
              </div>
            </div>
            <hr className="border-gray-400" />
            <div className="subtotal flex justify-between items-center my-2">
              <span className="text-[1.1rem]">Sub Total</span>
              <span className="text-[1.1rem]">&#8377;3000.00</span>
            </div>
            <hr className="border-gray-400" />
            <div className="shipping flex justify-between items-center my-2">
              <span className="text-[1.1rem]">Shipping Charge</span>
              <span className="text-[1.1rem]">&#8377;00.00</span>
            </div>
            <hr className="border-gray-400" />
            <div className="grandtotal flex justify-between items-center my-2">
              <span className="text-[1.2rem] font-semibold">Grand Total</span>
              <span className="text-[1.2rem] font-semibold">
                &#8377;3000.00
              </span>
            </div>
          </div>
          <button className="bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] mt-5 px-12 p-1.5 text-[1.3rem] hover:bg-transparent hover:border-2 hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300">
            Place Order
          </button>
        </div>
      </div>
    </>
  );
};
