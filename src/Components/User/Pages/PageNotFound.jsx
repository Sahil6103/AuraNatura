import React from "react";
import { Link } from "react-router-dom";
import { HeadingBanner } from "../Common/HeadingBanner";

export const PageNotFound = () => {
  return (
    <>
      {/* <HeadingBanner heading="404" page="Page Not Found" /> */}

      <div className="pagenotfound h-auto md:h-[80vh] flex justify-center items-center px-4 md:px-10 py-16">
        <div className="flex flex-col justify-center items-center gap-5 md:gap-8">
          <div className="heading flex flex-col justify-center items-center gap-3">
            <span className="heading1 text-[2rem] md:text-[3rem] font-bold">
              OOPS!
            </span>
            <span className="heading2 text-[2.5rem] md:text-[4.5rem] font-bold tracking-wider text-center leading-[60px]">
              This page doesn't seem to exist.
            </span>
          </div>
          <div className="link flex flex-col justify-center items-center gap-3">
            <span className="tetx-[1.1rem] md:text-[1.3rem]">GO BACK TO</span>
            <Link
              to="/"
              className="bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] px-12 p-1.5 text-[1rem] md:text-[1.3rem] hover:bg-transparent hover:border-2 hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300"
            >
              HOME PAGE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
