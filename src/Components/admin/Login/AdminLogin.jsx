import React from "react";
import { FullLogo } from "../../../assets/index";

export const AdminLogin = () => {
  return (
    <div className="bg-[#dbdbdba7]">
      <div className="admin-login  h-[100vh] flex flex-col justify-center items-center gap-8 px-6">
        <div className="logo flex justify-center items-center">
          <img src={FullLogo} alt="" className="w-[70%] md:w-[50%]" />
        </div>

        <div className="login-form flex flex-col justify-center items-center gap-8 w-full md:w-[50%] lg:w-[30%] bg-white px-8 py-10 rounded-[10px] shadow-lg">
          <h1 className="text-[1.7rem] font-[900]">Admin Portal</h1>
          <form action="" className="w-full flex flex-col gap-5">
            <div className="form-control flex flex-col justify-center gap-2">
              <label htmlFor="email" className="text-[1rem] font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email Address"
                className="bg-[#d2d2d2a6] px-3 py-3 rounded-[8px]"
              />
            </div>
            <div className="form-control flex flex-col justify-center gap-2">
              <label htmlFor="password" className="text-[1rem] font-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter Password"
                className="bg-[#d2d2d2a6] px-3 py-3 rounded-[8px]"
              />
            </div>
            <div className="form-control mt-4 flex justify-center">
              <button className="px-12 bg-gray-900 text-white text-center py-2 rounded-[8px] text-[1.1rem] font-bold">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
