import React from "react";
import { Link } from "react-router-dom";
import { Home06Icon } from "hugeicons-react";

export const HeadingBanner = ({ heading, page }) => {
  return (
    <>
      <div className="banner-heading relative h-[30vh] z-10 px-[30px] md:px-[150px] py-8 md:py-10">
        <h1 className="flex justify-start items-start text-[2.2rem] md:text-[2.8rem] font-bold tracking-widest leading-[45px]">
          {heading}
        </h1>
        <nav aria-label="breadcrumb" class="w-max mt-4">
          <ol class="flex w-full flex-wrap text-center items-center rounded-md py-2">
            <li class="flex cursor-pointer items-center text-sm text-slate-500 transition-colors duration-300 hover:text-slate-800">
              <Link to="/">
                <Home06Icon
                  className="text-slate-600 hover:text-[#202020]"
                  size={22}
                />
              </Link>
              <span class="pointer-events-none mx-2 text-slate-600 text-[1.25rem]">
                /
              </span>
            </li>
            <li class="flex cursor-pointer items-center text-sm text-[#202020]">
              <span className="text-[1.2rem] text-slate-600">{page}</span>
            </li>
          </ol>
        </nav>
      </div>
    </>
  );
};
