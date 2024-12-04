import React from "react";
import { Link } from "react-router-dom";
import { FragranceImg } from "../../../assets/index";

export const Fragrance = () => {
  return (
    <>
      <div
        data-aos="fade-up"
        className="fragrance flex flex-col md:flex-row justify-center items-center gap-6 px-5 md:px-10 py-8 md:pt-20 md:pb-8"
      >
        <div className="left w-full md:w-3/12">
          <img src={FragranceImg} alt="" className="w-full" />
        </div>
        <div className="right w-full md:w-6/12">
          <div className="context flex flex-col justify-end items-end gap-3">
            <span className="text-[1.3rem]">Our Original Perfumes</span>
            <h1 className="text-[2.5rem] font-[900] text-end leading-[50px] tracking-widest text-[#b28a79]">
              The Eternal Fragrance
            </h1>
            <p className="text-balance text-end text-[1.1rem]">
              Discover the allure of Eternal Fragrance, where every scent is a
              delicate blend of sophistication and charm. Our perfumes are
              crafted to evoke emotions, leaving a lasting impression that
              transcends time. Let each fragrance become a signature of elegance
              in your everyday moments.
            </p>
            <Link
              to="/women-collection"
              className="bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] px-8 p-2 text-[1.1rem] mt-8 hover:bg-transparent hover:border-2 hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
