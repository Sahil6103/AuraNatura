import React, { useState } from "react";
import { LogoIcon } from "../../../assets/index";
import { Link } from "react-router-dom";
import {
  ShoppingBasket01Icon,
  UserIcon,
  Menu09Icon,
  MultiplicationSignIcon,
  Search01Icon,
} from "hugeicons-react";

export const Header = ({ user, onLogout }) => {
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
          <div className="flex justify-center items-center gap-2">
            {user ? (
              <>
                <UserIcon size={26} color="black" className="md:hidden" />
                <span className="text-[1.4rem] text-center pt-1 md:hidden">
                  {user.fullname}
                </span>
              </>
            ) : (
              <Link
                onClick={toggleMenu}
                to="/login"
                className="hover:text-[#b48b5e] transition-all duration-300 flex justify-center items-center gap-2"
              >
                <span className="md:hidden">Login</span>
              </Link>
            )}
          </div>
          {user && (
            <div className="md:hidden">
              <button
                onClick={() => {
                  toggleMenu();
                  onLogout();
                }}
                className="bg-[#b28a79] text-[#f0efed] px-5 py-1"
              >
                Logout
              </button>
            </div>
          )}
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
        <nav className="flex md:gap-6 justify-center  md:justify-end items-center md:w-[255px]">
          <Search01Icon color="black" size={24} className="bg-transparent" />
          <Link
            to="/cart"
            className="ms-3 md:ms-0 hover:text-[#b48b5e] transition-all duration-300"
          >
            <ShoppingBasket01Icon size={25} />
          </Link>
          <div>
            {user ? (
              <div class="relative hidden md:inline-block group ">
                {/* <!-- User Icon --> */}
                <div class="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full cursor-pointer">
                  <span className="text-[1.4rem] text-center pt-1 hidden md:block">
                    {user.fullname[0].toUpperCase()}
                  </span>
                </div>

                {/* <!-- Popover --> */}
                <div class="absolute transform -translate-x-1/2 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <div class="p-4">
                    <p class="text-lg font-semibold text-gray-800">
                      {user.fullname}
                    </p>
                    <p class="text-md text-gray-500">{user.email}</p>
                  </div>
                  <hr class="border-gray-200" />
                  <button
                    onClick={onLogout}
                    class="w-full px-4 py-2 text-lg font-semibold tracking-wide text-red-500 hover:bg-red-100 rounded-b-lg focus:outline-none transition-all duration-300"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="hover:text-[#b48b5e] transition-all duration-300 flex justify-center items-center gap-2"
              >
                <UserIcon size={26} className="hidden md:block" />
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};
