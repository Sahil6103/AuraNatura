import React from "react";
import { Link } from "react-router-dom";
import { Fragrance2Img } from "../../../assets/index";

export const Fragrance2 = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="fragrance flex flex-col md:flex-row justify-center items-center gap-6 px-5 md:px-10 py-8 md:py-10 md:pb-20"
      >
        <div className="right w-full md:w-6/12 order-2 md:order-1">
          <div className="context flex flex-col justify-start items-start gap-3">
            <span className="text-[1.3rem]">Our Original Perfumes</span>
            <h1 className="text-[2.5rem] font-[900] leading-[50px] tracking-widest text-[#b28a79]">
              Fragrance that will surprise you every day
            </h1>
            <p className="text-balance text-[1.1rem]">
              Fragrance has a remarkable way of surprising us, unfolding layers
              that evoke unexpected emotions and memories. Imagine a scent that
              begins with zesty citrus, transitions to a heart of blooming rose,
              and settles into a warm, smoky base. Each note reveals a new
              dimension, creating a captivating journey that challenges our
              expectations and invites us to explore the beauty of the
              unexpected.
            </p>
            <Link
              to="/men-collection"
              className="bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] px-8 p-2 text-[1.1rem] mt-8 hover:bg-transparent hover:border-2 hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
        <div className="left w-full md:w-3/12 order-1 md:order-2">
          <img src={Fragrance2Img} alt="" className="w-full" />
        </div>
      </div>
    </>
  );
};
