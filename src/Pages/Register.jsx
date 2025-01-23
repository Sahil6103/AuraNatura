import React, { useRef, useState } from "react";
import { HeadingBanner } from "../Components/Common/HeadingBanner";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { ViewOffIcon, ViewIcon, InformationSquareIcon } from "hugeicons-react";
import { UseScrollTop } from "../Components/Common/UseScrollTop";
import toast, { Toaster } from "react-hot-toast";
import { showToastAndFocus } from "../assets/index";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

export const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { setLoggedInUser } = useOutletContext();
  const navigate = useNavigate();

  UseScrollTop();

  // password show/hide functionality
  const [Hide, setHide] = useState(true);

  const toggleHide = () => {
    setHide(!Hide);
  };

  const changeIcon = Hide ? (
    <ViewOffIcon
      color="#9ca3af"
      className="absolute bottom-2 right-12 cursor-pointer"
    />
  ) : (
    <ViewIcon
      color="#9ca3af"
      className="absolute bottom-2 right-12 cursor-pointer"
    />
  );

  // password requirement toast
  const showInfo = () => {
    toast(() => (
      <p>
        <b>1.</b> Password must be 8 characters long.
        <br /> <b>2.</b> Password should contains at least one character and one
        number.
      </p>
    ));
  };

  // form validation
  const fullnameInp = useRef(null);
  const emailInp = useRef(null);
  const passwordInp = useRef(null);

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const passwordRegex = /^[a-z0-9]{8,}$/;
  const fullNameRegex = /^[a-zA-Z ]+$/;

  const notify = (e) => {
    const fullname = fullnameInp.current.value;
    const email = emailInp.current.value;
    const password = passwordInp.current.value;

    !fullname || !email || !password
      ? showToastAndFocus("Please fill all the fields!", fullnameInp, e)
      : !fullNameRegex.test(fullname)
        ? showToastAndFocus("Please enter a valid name!", fullnameInp, e)
        : !emailRegex.test(email)
          ? showToastAndFocus("Please enter a valid Email!", emailInp, e)
          : !passwordRegex.test(password)
            ? showToastAndFocus(
                "Please enter a valid password!",
                passwordInp,
                e,
              )
            : saveUser(e);
    // All validations passed, proceed with the form submission
  };

  const saveUser = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // getting data into object
    const userObj = {
      id: uuidv4(),
      fullname: fullnameInp.current.value,
      email: emailInp.current.value,
      password: passwordInp.current.value,
    };

    // using axios to save the data into json file
    try {
      const res = await axios.get(
        `https://673ebc2fa9bc276ec4b57911.mockapi.io/users`,
      );

      const users = res.data;

      const checkEmail = users.some((user) => user.email === userObj.email);

      if (checkEmail) {
        e.preventDefault();
        toast.error("Email already regirstered, you can login directly!");
        emailInp.current.focus();
      } else {
        const response = await axios.post(
          `https://673ebc2fa9bc276ec4b57911.mockapi.io/users`,
          userObj,
        );
        toast.success("Registered successfully!");
        const user = response.data;
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        setLoggedInUser(user);

        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong!");
    }
  };

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
                ref={fullnameInp}
                type="text"
                placeholder="Full Name"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none focus:border-black hover:border-black placeholder:text-gray-400"
              />
            </div>
            <div className="input-control w-full">
              <input
                ref={emailInp}
                type="text"
                placeholder="Email Address"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none focus:border-black hover:border-black placeholder:text-gray-400"
              />
            </div>
            <div className="input-control relative w-full">
              <input
                ref={passwordInp}
                type={Hide ? "password" : "text"}
                placeholder="Password"
                className="relative py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none focus:border-black hover:border-black placeholder:text-gray-400"
              />
              <span className="show-hide" onClick={toggleHide}>
                {changeIcon}
              </span>
              <span className="info">
                <InformationSquareIcon
                  onClick={showInfo}
                  color="#9ca3af"
                  className="absolute bottom-2 right-3 cursor-pointer"
                />
              </span>
            </div>
            <div className="input-control mt-2">
              {isLoading ? (
                <button
                  disabled
                  type="button"
                  className=" text-[#b48b5e] border-2 border-[#b48b5e] px-12 p-1.5 text-[1.3rem] hover:bg-transparent hover:border-2 hover:border-[#b48b5e] transition-all duration-300 inline-flex items-center"
                >
                  <svg
                    aria-hidden="true"
                    role="status"
                    className="inline w-4 h-4 me-3 text-[#b48b5e] animate-spin"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="#fff"
                    />
                  </svg>
                  Sign In...
                </button>
              ) : (
                <button
                  onClick={notify}
                  className="bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] px-12 p-1.5 text-[1.3rem] hover:bg-transparent hover:border-2 hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300"
                >
                  Register
                </button>
              )}
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
