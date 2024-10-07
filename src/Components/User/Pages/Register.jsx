import React, { useState } from "react";
import { HeadingBanner } from "../Common/HeadingBanner";
import { Link } from "react-router-dom";
import { ViewOffIcon, ViewIcon } from "hugeicons-react";

export const Register = () => {
  const [Hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide(!Hide);
  };

  const changeIcon = Hide ? (
    <ViewOffIcon color="#9ca3af" className="absolute bottom-2 right-3" />
  ) : (
    <ViewIcon color="#9ca3af" className="absolute bottom-2 right-3" />
  );

  return (
    <>
      <HeadingBanner heading="Member Registration" page="Register" />
      <div className="form-card flex flex-col justify-center items-center px-4">
        <div className="card bg-[#e9e9e9] flex flex-col justify-center items-center gap-12 w-full md:w-[50%] lg:w-[35%] my-16 px-5 md:px-8 lg:px-12 py-10">
          <div className="context text-center flex flex-col justify-center items-center gap-2">
            <h1 className="text-[2.3rem] text-[#b48b5e] font-bold tracking-widest">
              Register
            </h1>
            <span className="text-[1.1rem] text-slate-500">
              If you are not a member, register now!
            </span>
          </div>
          <form
            action=""
            className="flex flex-col justify-center items-center gap-10 w-full"
          >
            <div className="input-control w-full">
              <input
                type="text"
                placeholder="Full Name"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none"
              />
            </div>
            <div className="input-control w-full">
              <input
                type="email"
                placeholder="Email Address"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none"
              />
            </div>
            <div className="input-control relative w-full">
              <input
                type={Hide ? "password" : "text"}
                placeholder="Password"
                className="relative py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400"
              />
              <span className="show-hide" onClick={toggleHide}>
                {changeIcon}
              </span>
            </div>
            <div className="input-control mt-2">
              <button className="bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] px-12 p-1.5 text-[1.3rem] hover:bg-transparent hover:border-2 hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300">
                Register
              </button>
            </div>
            <div className="register-link flex flex-col justify-center items-center">
              <span className="text-[1.1rem] text-slate-500">
                Already Member?
              </span>
              <Link
                to="/login"
                className="text-[1.3rem] text-slate-500 hover:text-[#b48b5e] transition-all duration-300"
              >
                Log In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
