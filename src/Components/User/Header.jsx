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
      <header className="relative px-4 py-3 md:px-10 md:py-3 flex justify-between items-center shadow-md">
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
          } fixed md:static top-0 z-[100] w-full md:w-fit h-full bg-[#f0efed] md:h-auto px-10 md:px-0 flex flex-col md:flex-row justify-center md:justify-end items-start gap-y-8 md:gap-y-0 md:gap-8 transition-all duration-300 text-[1.5rem] md:text-[1.3rem]`}
        >
          <Link
            onClick={toggleMenu}
            to="/men-collection"
            className="nav-link hover:text-[#b48b5e] transition-all duration-300"
          >
            Men
          </Link>
          <Link
            onClick={toggleMenu}
            to="/women-collection"
            className="nav-link hover:text-[#b48b5e] transition-all duration-300"
          >
            Women
          </Link>
          <Link
            onClick={toggleMenu}
            to="/exclusive-collection"
            className="nav-link hover:text-[#b48b5e] transition-all duration-300"
          >
            Exclusive
          </Link>
          <Link
            onClick={toggleMenu}
            to="/about-us"
            className="nav-link hover:text-[#b48b5e] transition-all duration-300 md:hidden"
          >
            About Us
          </Link>
          <Link
            onClick={toggleMenu}
            to="/contact-us"
            className="nav-link hover:text-[#b48b5e] transition-all duration-300 md:hidden"
          >
            Contact Us
          </Link>
          <Link
            onClick={toggleMenu}
            to="/login"
            className="nav-link hover:text-[#b48b5e] transition-all duration-300 md:hidden"
          >
            Login
          </Link>
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
        <Link
          to="/"
          className="w-[18%] sm:w-[10%] md:w-[8%] lg:w-[6%] ms-5 md:ms-0 "
        >
          <img src={LogoIcon} alt="" />
        </Link>
        {/* </span> */}
        <nav className="flex md:gap-6 justify-center  md:justify-end items-center md:w-[255px]">
          <Search01Icon color="black" size={24} className="bg-transparent" />
          <Link to="/cart" className="ms-3 md:ms-0">
            <ShoppingBasket01Icon color="black" size={25} />
          </Link>
          <Link to="/login">
            <UserIcon color="black" size={26} className="hidden md:block" />
          </Link>
        </nav>
      </header>
    </>
  );
};
