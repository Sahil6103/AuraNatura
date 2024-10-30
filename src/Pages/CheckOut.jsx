import React, { useEffect, useRef } from "react";
import { HeadingBanner } from "../Components/Common/HeadingBanner";
import { UseScrollTop } from "../Components/Common/UseScrollTop";
import toast, { Toaster } from "react-hot-toast";
import { showToastAndFocus } from "../assets/index";

export const CheckOut = () => {
  // UseScrollTop();

  const firstnameInp = useRef(null);
  const lastnameInp = useRef(null);
  const emailInp = useRef(null);
  const mobileInp = useRef(null);
  const houseInp = useRef(null);
  const addressInp = useRef(null);
  const cityInp = useRef(null);
  const stateInp = useRef(null);
  const pinInp = useRef(null);

  const emailRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const nameRegex = /^[a-zA-Z ]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;
  const pinRegex = /^[1-9][0-9]{5}$/;

  const notify = (e) => {
    const firstname = firstnameInp.current.value;
    const lastname = lastnameInp.current.value;
    const email = emailInp.current.value;
    const mobile = mobileInp.current.value;
    const house = houseInp.current.value;
    const address = addressInp.current.value;
    const city = cityInp.current.value;
    const state = stateInp.current.value;
    const pin = pinInp.current.value;

    !firstname
      ? showToastAndFocus("Please enter your first name!", firstnameInp, e)
      : !lastname
      ? showToastAndFocus("Please enter your last name!", lastnameInp, e)
      : !email
      ? showToastAndFocus("Please enter your email!", emailInp, e)
      : !mobile
      ? showToastAndFocus("Please enter mobile number!", mobileInp, e)
      : !house
      ? showToastAndFocus("Please enter house no. or house name!", houseInp, e)
      : !address
      ? showToastAndFocus("Please enter address!", addressInp, e)
      : !city
      ? showToastAndFocus("Please enter your city!", cityInp, e)
      : !state
      ? showToastAndFocus("Please enter your state!", stateInp, e)
      : !pin
      ? showToastAndFocus("Please enter your pin code!", pinInp, e)
      : !nameRegex.test(firstname)
      ? showToastAndFocus("Please enter valid first name!", firstnameInp, e)
      : !nameRegex.test(lastname)
      ? showToastAndFocus("Please enter valid last name!", lastnameInp, e)
      : !emailRegex.test(email)
      ? showToastAndFocus("Please enter valid email!", emailInp, e)
      : !mobileRegex.test(mobile)
      ? showToastAndFocus("Please enter valid mobile number!", mobileInp, e)
      : !pinRegex.test(pin)
      ? showToastAndFocus("Please enter valid pin code!", pinInp, e)
      : null;

    // All validations passed, proceed with the form submission
  };

  return (
    <>
      <HeadingBanner heading="Checkout" page="Checkout" />
      <div className="checkout px-5 md:px-12 lg:px-20 py-20 flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-0">
        <div className="checkout-form w-full lg:w-3/5 flex flex-col gap-5">
          <div className="heading">
            <h1 className="text-[1.8rem] font-bold">Billing Address</h1>
          </div>
          <form action="" className="py-5 flex flex-col gap-7 lg:gap-10">
            <div className="input-group flex flex-col md:flex-row gap-7">
              <input
                ref={firstnameInp}
                type="text"
                placeholder="First Name"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black focus:border-black"
              />
              <input
                ref={lastnameInp}
                type="text"
                placeholder="Last Name"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black focus:border-black"
              />
            </div>
            <div className="input-group flex flex-col">
              <input
                ref={emailInp}
                type="text"
                placeholder="Email Address"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black focus:border-black"
              />
            </div>
            <div className="input-group flex flex-col">
              <input
                ref={mobileInp}
                type="text"
                placeholder="Mobile Number"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none focus:ring-0 placeholder:text-gray-400 hover:border-black focus:border-black "
              />
            </div>
            <div className="input-group flex flex-col">
              <input
                ref={houseInp}
                type="text"
                placeholder="House No. / House Name etc."
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black focus:border-black"
              />
            </div>
            <div className="input-group flex flex-col">
              <input
                ref={addressInp}
                type="text"
                placeholder="Address"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black focus:border-black"
              />
            </div>
            <div className="input-group flex flex-col md:flex-row gap-7">
              <input
                ref={cityInp}
                type="text"
                placeholder="City"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black focus:border-black"
              />
              <input
                ref={stateInp}
                type="text"
                placeholder="State"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black focus:border-black"
              />
              <input
                ref={pinInp}
                type="text"
                placeholder="Pin Code"
                className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400 hover:border-black focus:border-black"
              />
            </div>
          </form>
        </div>
        <div className="total-cart w-full lg:w-[30%] flex flex-col gap-5">
          <div className="heading">
            <h1 className="text-[1.8rem] font-bold">Cart Total</h1>
          </div>
          <div className="flex flex-col gap-2 bg-[#e9e9e9] px-8 py-10">
            <div className="total">
              <div className="headings flex justify-between items-center">
                <h1 className="text-[1.3rem] font-semibold">Products</h1>
                <h1 className="text-[1.3rem] font-semibold">Total</h1>
              </div>
            </div>
            <div className="products flex flex-col justify-between gap-2">
              <div className="product flex justify-between items-end">
                <span>Lorem ipsum dolor sit x 02</span>
                <span>&#8377;1000.00</span>
              </div>
              <div className="product flex justify-between items-end">
                <span>Lorem ipsum dolor sit x 02</span>
                <span>&#8377;1000.00</span>
              </div>
              <div className="product flex justify-between items-end">
                <span>Lorem ipsum dolor sit x 02</span>
                <span>&#8377;1000.00</span>
              </div>
            </div>
            <hr className="border-gray-400" />
            <div className="subtotal flex justify-between items-center my-2">
              <span className="text-[1.1rem]">Sub Total</span>
              <span className="text-[1.1rem]">&#8377;3000.00</span>
            </div>
            <hr className="border-gray-400" />
            <div className="shipping flex justify-between items-center my-2">
              <span className="text-[1.1rem]">Shipping Charge</span>
              <span className="text-[1.1rem]">&#8377;00.00</span>
            </div>
            <hr className="border-gray-400" />
            <div className="grandtotal flex justify-between items-center my-2">
              <span className="text-[1.2rem] font-semibold">Grand Total</span>
              <span className="text-[1.2rem] font-semibold">
                &#8377;3000.00
              </span>
            </div>
          </div>
          <form action="" className="w-full">
            <button
              onClick={notify}
              className="bg-[#b48b5e] w-full text-[#f0efed] border-2 border-[#b48b5e] mt-5 px-12 p-1.5 text-[1.3rem] hover:bg-transparent hover:border-2 hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300"
            >
              Place Order
            </button>
          </form>
          {/* <Toaster position="top-right" reverseOrder={false} /> */}
        </div>
      </div>
    </>
  );
};
