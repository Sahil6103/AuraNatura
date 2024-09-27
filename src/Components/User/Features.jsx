import React from "react";

export const Features = () => {
  return (
    <>
      <div className="features flex flex-col md:flex-row justify-center items-center gap-8 px-5 md:px-20 py-8 md:py-10">
        <div className="card1 w-full md:w-[50%]">
          <div className="context p-14 flex flex-col justify-center items-center text-center">
            <h1 className="text-[2.8rem] leading-10">Free Shipping</h1>
            <span className="text-[1.2rem]">Free shipping in India</span>
          </div>
        </div>
        <div className="card2 w-full md:w-[50%]">
          <div className="context p-14 flex flex-col justify-center items-center text-center">
            <h1 className="text-[2.8rem] leading-10">Member Discount</h1>
            <span className="text-[1.2rem]">Free deals every months</span>
          </div>
        </div>
      </div>
    </>
  );
};
