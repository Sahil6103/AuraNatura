import React from "react";
import { Link } from "react-router-dom";
import { MenCollectionImg, WomanCollectionImg } from "../../assets/index";

export const Collection = () => {
  return (
    <>
      <div className="cards flex flex-col sm:flex-col md:flex-row justify-center items-center gap-5 md:gap-8 px-5 md:px-10 py-8 md:py-10">
        <Link className="w-full lg:w-[45%] relative">
          <div className="men-card">
            <img src={MenCollectionImg} alt="" />
            <div className="context absolute top-1 md:top-[20px] left-0 px-3 md:px-5 flex flex-col gap-1">
              <h1 className="text-[2.5rem] text-[#f0efed]">For Men</h1>
              <p className="text-[#f0efed] w-[80%] md:w-[70%] text-[1.1rem] -mt-2">
                Elevate your style with our premium collection for men.
              </p>
            </div>
          </div>
        </Link>
        <Link className="relative w-full lg:w-[45%]">
          <div className="woman-card ">
            <img src={WomanCollectionImg} alt="" />
            <div className="context absolute top-1 md:top-[20px] left-0 px-3 md:px-5 flex flex-col gap-1">
              <h1 className="text-[2.5rem] text-[#f0efed]">For Woman</h1>
              <p className="text-[#f0efed] w-[80%] md:w-[70%] text-[1.1rem] -mt-2">
                Embrace grace and beauty with our exclusive women's collection.
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
