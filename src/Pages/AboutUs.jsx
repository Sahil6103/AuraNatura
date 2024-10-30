import React, { useEffect } from "react";
import { HeadingBanner } from "../Components/Common/HeadingBanner";
import { About1Img, About2Img } from "../assets/index";
import { UseScrollTop } from "../Components/Common/UseScrollTop";

export const AboutUs = () => {
  UseScrollTop();

  return (
    <>
      <HeadingBanner heading="About Us" page="About Us" />

      <div className="aboutus px-4 md:px-16 py-10 flex flex-col justify-center items-center gap-8">
        <div className="context flex flex-col justify-center items-center">
          <h1 className="text-[2rem] md:text-[2.2rem] font-bold tracking-widest">
            About
          </h1>
          <h1 className="text-[#b48b5e] text-[2.2rem] md:text-[2.5rem] font-bold tracking-widest">
            AuraNatura
          </h1>
        </div>
        <div className="paragraph flex flex-col justify-center items-center gap-8 md:gap-10">
          <span className=" text-[1.1rem] md:w-[70%]">
            Welcome to AuraNatura, where elegance and nature come together to
            create an unforgettable olfactory journey. Our perfumes are crafted
            with love, combining nature’s finest ingredients to evoke a sense of
            eternal fragrance and timeless beauty. At AuraNatura, we believe in
            the power of scent to transform moments into memories, and we invite
            you to explore our collection of luxurious fragrances.
          </span>
          <span className=" text-[1.1rem] md:w-[70%]">
            Each of our creations is inspired by the harmony found in nature,
            designed to awaken your senses and connect you to the world around
            you. From the first delicate note to the lasting impression, our
            perfumes are a celebration of nature’s artistry, capturing the
            essence of earth's most enchanting elements. Whether you seek a
            fragrance that embodies elegance, sophistication, or a touch of wild
            beauty, AuraNatura has something for every soul.
          </span>
          <span className=" text-[1.1rem] md:w-[70%]">
            At AuraNatura, we are more than just a fragrance house—we are
            storytellers. Every bottle we create carries a unique narrative, one
            that reflects the delicate balance between nature and luxury. We
            believe that your fragrance is an extension of your identity, and we
            are here to help you discover the scent that speaks to your true
            self.
          </span>
        </div>

        <div className="py-10 flex flex-col justify-center items-center gap-8 md:gap-0">
          <div className="story flex flex-col md:flex-row justify-center items-center">
            <div className="left w-full md:w-[40%] lg:w-[50%]">
              <img src={About1Img} alt="" className="w-full" />
            </div>
            <div className="context flex flex-col justify-center items-center gap-5 w-full md:w-[60%] lg:w-[50%] md:px-10 lg:px-24 py-8 md:py-16">
              <h1 className="text-[2rem] md:text-[2.5rem] text-[#b48b5e] font-bold tracking-widest">
                Our Story
              </h1>
              <p className="text-[1.1rem] text-center">
                AuraNatura was born out of a passion for capturing nature's most
                exquisite scents. Inspired by the delicate beauty of flowers,
                herbs, and exotic spices, our founders sought to create a line
                of perfumes that resonate deeply with the soul. From the rolling
                lavender fields to the mystical allure of sandalwood forests,
                each of our fragrances tells a story of harmony between nature
                and elegance. Since our inception, AuraNatura has been dedicated
                to blending craftsmanship with the pure essence of the natural
                world.
              </p>
            </div>
          </div>
          <div className="story flex flex-col md:flex-row justify-center items-center ">
            <div className="context flex flex-col justify-center items-center gap-5 w-full md:w-[60%] lg:w-[50%] md:px-10 lg:px-24 py-8 md:py-16 order-2 md:order-1">
              <h1 className="text-[2rem] md:text-[2.5rem] text-[#b48b5e] font-bold tracking-widest">
                Our Mission
              </h1>
              <p className="text-[1.1rem] text-center">
                Our mission at AuraNatura is to create fragrances that capture
                the essence of nature, bringing you closer to the earth’s most
                beautiful scents. We strive to evoke emotion and inspire
                confidence with every spray, allowing our customers to
                experience the art of perfume in its purest form.
                Sustainability, quality, and ethical sourcing are at the heart
                of everything we do, ensuring that each fragrance reflects our
                commitment to luxury without compromise.
              </p>
            </div>
            <div className="right w-full md:w-[40%] lg:w-[50%] order-1 md:order2">
              <img src={About2Img} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
