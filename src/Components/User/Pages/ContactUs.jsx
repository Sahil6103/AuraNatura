import React from "react";
import { HeadingBanner } from "../Common/HeadingBanner";
import {
  Location04Icon,
  CallIcon,
  Mail01Icon,
  Clock01Icon,
} from "hugeicons-react";

export const ContactUs = () => {
  return (
    <>
      <HeadingBanner heading="Contact Us" page="Contact Us" />

      <div className="contactus px-4 md:px-16 py-10">
        <div className="context flex justify-center items-center">
          <h1 className="text-[#b48b5e] text-[2.2rem] md:text-[2.5rem] font-[600] tracking-widest">
            Contact Us
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="contact-details mt-6 flex flex-col justify-center items-start md:grid md:grid-cols-3 gap-8  md:gap-28">
            <div className="address flex justify-start items-start gap-3 w-fit">
              <Location04Icon
                color="#64748b"
                className="w-[30px] h-[30px] mt-1"
              />
              <div className="address-line">
                <h1 className="text-[1.5rem] text-[#b48b5e] font-[600] tracking-wider">
                  Address
                </h1>
                <div className="address-line flex flex-col justify-center items-start text-[1.1rem] text-[#64748b]">
                  <span className="font-[700]">AuraNatura</span>
                  <span>12 Aroma Street</span>
                  <span>Perfume Valley, Paldi</span>
                  <span>Ahmedabad, Gujarat 380007</span>
                  <span>India</span>
                </div>
              </div>
            </div>

            <div className="contact">
              <div className="contact-detail">
                <h1 className="text-[1.5rem] text-[#b48b5e] font-[600] tracking-wider ms-9">
                  Conatct
                </h1>
              </div>
              <div className="details flex flex-col gap-2">
                <div className="detail1 flex justify-start items-center gap-3">
                  <CallIcon
                    color="#64748b"
                    className="w-[25px] h-[25px] mt-1"
                  />
                  <span className="text-[1.1rem] text-[#64748b] mt-1">
                    Mobile : +0123456789
                  </span>
                </div>
                <div className="detail2 flex justify-start items-center gap-3">
                  <Mail01Icon
                    color="#64748b"
                    className="w-[25px] h-[25px] mt-1"
                  />
                  <span className="text-[1.1rem] text-[#64748b]">
                    Email : contact@auranatura.in
                  </span>
                </div>
              </div>
            </div>

            <div className="workinghours">
              <div className="work-detail">
                <h1 className="text-[1.5rem] text-[#b48b5e] font-[600] tracking-wider ms-9">
                  Working Hours
                </h1>
              </div>
              <div className="details flex flex-col gap-2">
                <div className="detail1 flex justify-start items-start gap-3">
                  <Clock01Icon
                    color="#64748b"
                    className="w-[25px] h-[25px] mt-2"
                  />
                  <div className="work-hour flex flex-col justify-start">
                    <span className="text-[1.1rem] text-[#64748b] mt-1">
                      Monday - Friday : 09:30 - 08:00
                    </span>
                    <span className="text-[1.1rem] text-[#64748b] mt-1">
                      Saturday : 09:30 - 01:30
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="getintouch my-10 px-2 flex flex-col justify-center items-center">
          <div className="context flex justify-center items-center">
            <h1 className="text-[#b48b5e] text-[2.2rem] md:text-[2.5rem] font-[600] tracking-widest">
              Get in touch
            </h1>
          </div>
          <div className="card bg-[#e9e9e9] mt-8 flex flex-col justify-center items-center gap-8 w-full md:w-[60%] px-5 md:px-8 lg:px-12 py-10">
            <form
              action=""
              className="flex flex-col justify-center items-center gap-10 w-full"
            >
              <div className="input-group w-full flex flex-col md:flex-row justify-center items-center gap-8">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="input-control w-full">
                <input
                  type="text"
                  placeholder="Subject"
                  className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400"
                />
              </div>
              <div className="input-control w-full">
                <textarea
                  rows={3}
                  placeholder="Message"
                  className="py-2 w-full border-b-2 border-gray-300 bg-transparent text-[#202020] text-[1.2rem] focus:outline-none placeholder:text-gray-400"
                ></textarea>
              </div>
              <div className="input-control">
                <button className="bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] px-12 p-1.5 text-[1.3rem] hover:bg-transparent hover:border-2 hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
