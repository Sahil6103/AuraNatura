import React from "react";
import { FullLogo } from "../../assets/index";

export const Preloader = () => {
  return (
    <>
      <div className="preloader h-screen flex justify-center items-center bg-[#f0efed]">
        <div className="main-loader flex flex-col justify-center items-center gap-8">
          <div className="logo w-[70%] flex justify-center items-center">
            <img src={FullLogo} alt="" className="w-full" />
          </div>
          <div className="loader flex flex-col justify-center items-center gap-2">
            <div className="dots1 flex justify-center items-center gap-2">
              <div className="dot w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#b48b5e]"></div>
              <div className="dot w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#b48b5e]"></div>
            </div>
            <div className="dots2 flex justify-center items-center gap-2">
              <div className="dot w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#b48b5e]"></div>
              <div className="dot w-[10px] md:w-[15px] h-[10px] md:h-[15px] bg-[#b48b5e]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
