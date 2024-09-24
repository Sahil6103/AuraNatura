import React, { useState } from "react";
import { LogoIcon } from "../../assets/index";
import { Link } from "react-router-dom";
import {
  ShoppingBasket01Icon,
  UserIcon,
  Menu09Icon,
  MultiplicationSignIcon,
  Search01Icon,
} from "hugeicons-react";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative px-4 py-4 md:px-10 md:py-5 flex justify-between items-center shadow-md">
        <span className="md:hidden">
          <Menu09Icon
            color="black"
            size={28}
            onClick={toggleMenu}
            className="md:hidden"
          />
        </span>
        <nav
          className={`${
            isMenuOpen ? "left-0" : "-left-full"
          } fixed md:static top-0 z-[100] w-full md:w-fit h-full bg-[#f0efed] md:h-auto flex flex-col md:flex-row justify-center md:justify-end items-center gap-y-8 md:gap-y-0 md:gap-8 transition-all duration-300 text-[1.3rem]`}
        >
          <Link>Male</Link>
          <Link>Famale</Link>
          <Link>Exclusive</Link>
          <Link className="md:hidden">About Us</Link>
          <Link className="md:hidden">Contact Us</Link>
          <Link className="md:hidden">Login</Link>
          <span className="absolute top-6 right-4">
            <MultiplicationSignIcon
              color="black"
              size={30}
              onClick={toggleMenu}
              className="md:hidden"
            />
          </span>
        </nav>
        {/* <span className="logo w-fit"> */}
        <img
          src={LogoIcon}
          alt=""
          className="w-[18%] sm:w-[10%] md:w-[8%] lg:w-[6%] ms-5 md:ms-0 md:me-14 "
        />
        {/* </span> */}
        <nav className="flex md:gap-6 justify-center items-center gap-3">
          <Search01Icon color="black" size={24} className="bg-transparent" />
          <div className="icons flex gap-5">
            <ShoppingBasket01Icon color="black" size={25} />
            <UserIcon color="black" size={28} className="hidden md:block" />
          </div>
        </nav>
      </header>
    </>
  );
};
