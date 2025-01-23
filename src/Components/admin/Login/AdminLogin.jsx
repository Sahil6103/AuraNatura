import React, { useRef } from "react";
import { FullLogo } from "../../../assets/index";
import toast, { Toaster } from "react-hot-toast";
import { showToastAndFocus } from "../../../assets/index";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const AdminLogin = () => {
  const navigate = useNavigate();

  const adminnameInp = useRef(null);
  const passwordInp = useRef(null);

  const notify = (e) => {
    const adminname = adminnameInp.current.value;
    const password = passwordInp.current.value;

    !adminname
      ? showToastAndFocus("Enter admin name", adminnameInp, e)
      : !password
        ? showToastAndFocus("Enter Password!", passwordInp, e)
        : getAdmin(e, adminname, password);
  };

  const getAdmin = async (e, adminname, password) => {
    e.preventDefault();

    try {
      const res = await axios.get(`http://localhost:5000/admin`);
      const adminData = res.data;
      console.log(adminData);
      const admin = adminData.find((admin) => admin.adminname === adminname);
      console.log(admin);
      const adminPassword = admin.password === password;
      console.log(admin);
      if (admin) {
        if (adminPassword) {
          toast.success("Welcome back!");
          navigate("/admin-dashboard");
        } else {
          toast.error("Wrong password! Please try again.");
        }
      } else {
        toast.error(`Oops! you are not admin, please check the admin name`);
        passwordInp.current.value = "";
        adminnameInp.current.focus();
      }
    } catch (err) {
      console.log(err);
    }
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
                Admin Name
              </label>
              <input
                ref={adminnameInp}
                type="text"
                placeholder="Enter Admin Name"
                className="bg-[#efefef] px-3 py-3 rounded-[8px] focus:outline-gray-600"
              />
            </div>
            <div className="form-control flex flex-col justify-center gap-2">
              <label htmlFor="password" className="text-[1rem] font-bold">
                Password
              </label>
              <input
                ref={passwordInp}
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
