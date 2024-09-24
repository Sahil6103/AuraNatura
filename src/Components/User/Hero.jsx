import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="hero h-[88vh] px-4 md:px-14 flex justify-start items-center">
        <div className="context bg-transparent text-center md:text-start flex flex-col gap-3">
          <p className="bg-transparent text-[3.3rem] md:w-[85%] leading-[65px] font-bold text-[#fef9f0] md:text-[#202020] tracking-[5px]">
            Unveiling the essence of excellence
          </p>
          <p className="bg-transparent italic md:w-[70%] text-right text-[1.1rem] text-[#fef9f0] md:text-[#202020] font-[900] tracking-[3px]">
            — AuraNatura, where nature's purity meets timeless sophistication.
          </p>
        </div>
      </div>
    </>
  );
};
