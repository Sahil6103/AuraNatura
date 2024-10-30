import React from "react";
import { Link } from "react-router-dom";
import { FullLogo } from "../../../assets/index";
import { Facebook02Icon, InstagramIcon, NewTwitterIcon } from "hugeicons-react";

export const Footer = () => {
  return (
    <>
      <footer className="px-5 md:px-10 lg:px-20 py-8 md:py-10 flex flex-col md:flex-row md:justify-between gap-5 bg-[#c7bfb8]">
        <div className="logo-part flex flex-col gap-5 md:w-[35%]">
          <div className="logo">
            <img src={FullLogo} alt="" className="w-[60%]" />
          </div>
          <span className="text-[1.1rem]">
            At AuraNatura, we craft exquisite fragrances inspired by nature's
            finest elements, blending tradition and innovation. Each scent is a
            reflection of elegance and individuality, designed to create lasting
            impressions.
          </span>
        </div>
        <div className="quick-links">
          <div className="heading">
            <h1 className="text-[1.6rem]">Quick Links</h1>
          </div>
          <div className="links flex flex-col gap-2 text-[1.1rem] mt-3">
            <Link
              to="/about-us"
              className="hover:text-[#b48b5e] transition-all duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-[#b48b5e] transition-all duration-300"
            >
              Contact Us
            </Link>
            <Link className="hover:text-[#b48b5e] transition-all duration-300">
              Features
            </Link>
          </div>
        </div>
        <div className="useful-links">
          <div className="heading">
            <h1 className="text-[1.6rem]">Useful Links</h1>
          </div>
          <div className="links flex flex-col gap-2 text-[1.1rem] mt-3">
            <Link
              to="/men-collection"
              className="hover:text-[#b48b5e] transition-all duration-300"
            >
              Men's Collection
            </Link>
            <Link
              to="/women-collection"
              className="hover:text-[#b48b5e] transition-all duration-300"
            >
              Women's Collection
            </Link>
            <Link
              to="/exclusive-collection"
              className="hover:text-[#b48b5e] transition-all duration-300"
            >
              Exclusive Collection
            </Link>
          </div>
        </div>
        <div className="social-links">
          <div className="heading">
            <h1 className="text-[1.6rem]">Follow Us</h1>
          </div>
          <div className="links flex flex-col gap-2 text-[1.1rem] mt-3">
            <Link className="flex justify-start items-center gap-2 hover:text-[#b48b5e] transition-all duration-300">
              <Facebook02Icon color="black" size={22} />
              <span>Facebook</span>
            </Link>
            <Link className="flex justify-start items-center gap-2 hover:text-[#b48b5e] transition-all duration-300">
              <InstagramIcon color="black" size={22} />
              <span>Instagram</span>
            </Link>
            <Link className="flex justify-start items-center gap-2 hover:text-[#b48b5e] transition-all duration-300">
              <NewTwitterIcon color="black" size={22} />
              <span>Twitter (X)</span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
