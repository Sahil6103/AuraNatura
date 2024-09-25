import React from "react";
import { FullLogo } from "../../assets/index";

export const Footer = () => {
  return (
    <>
      <footer className="py-8 px-5">
        <div className="logo-part flex flex-col gap-5">
          <div className="logo">
            <img src={FullLogo} alt="" className="w-[60%]" />
          </div>
          <span className="text-[1.1rem]">
            At AuraNatura, we craft exquisite fragrances inspired by nature's
            finest elements, blending tradition and innovation. Each scent is a
            reflection of elegance and individuality, designed to create lasting
            impressions. Discover the art of perfumery with us and elevate your
            everyday moments.
          </span>
        </div>
        <div className="quick-links"></div>
        <div className="useful-links"></div>
        <div className="social-links"></div>
      </footer>
    </>
  );
};
