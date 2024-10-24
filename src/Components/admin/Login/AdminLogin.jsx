import React, { useRef } from "react";
import { FullLogo } from "../../../assets/index";
import toast, { Toaster } from "react-hot-toast";
import { showToastAndFocus } from "../../../assets/index";

export const AdminLogin = () => {
  const emailInp = useRef(null);
  const passInp = useRef(null);

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const passwordRegex = /^[a-z0-9]{8,}$/;

  const notify = (e) => {
    const email = emailInp.current.value;
    const password = passInp.current.value;

    !email
      ? showToastAndFocus("Please enter email!", emailInp, e)
      : !emailRegex.test(email)
      ? showToastAndFocus("Please enter a valid email!", emailInp, e)
      : !password
      ? showToastAndFocus("Please enter password!", passInp, e)
      : !passwordRegex.test(password)
      ? showToastAndFocus("Please enter a valid password!", passInp, e)
      : null;
    // All validations passed, proceed with the form submission
  };

  return (
    <div className="bg-[#f0efed]">
      <div className="admin-login  h-[100vh] flex flex-col justify-center items-center gap-8 px-6">
        <div className="logo flex justify-center items-center">
          <img src={FullLogo} alt="" className="w-[70%] md:w-[50%]" />
        </div>

        <div className="login-form flex flex-col justify-center items-center gap-8 w-full md:w-[50%] lg:w-[30%] bg-[#ffffff] px-8 py-10 rounded-[10px] shadow-lg">
          <h1 className="text-[1.7rem] font-[900]">Admin Portal</h1>
          <form action="" className="w-full flex flex-col gap-5">
            <div className="form-control flex flex-col justify-center gap-2">
              <label htmlFor="email" className="text-[1rem] font-bold">
                Email
              </label>
              <input
                ref={emailInp}
                type="text"
                placeholder="Enter Email Address"
                className="bg-[#efefef] px-3 py-3 rounded-[8px] focus:outline-gray-600"
              />
            </div>
            <div className="form-control flex flex-col justify-center gap-2">
              <label htmlFor="password" className="text-[1rem] font-bold">
                Password
              </label>
              <input
                ref={passInp}
                type="password"
                placeholder="Enter Password"
                className="bg-[#efefef] px-3 py-3 rounded-[8px] focus:outline-gray-600"
              />
            </div>
            <div className="form-control mt-4 flex justify-center">
              <button
                onClick={notify}
                className="px-12 bg-gray-900 text-white text-center py-2 rounded-[8px] text-[1.1rem] font-bold"
              >
                Sign In
              </button>
              <Toaster position="top-right" reverseOrder={false} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
