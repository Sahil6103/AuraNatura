import React from "react";
import { Link } from "react-router-dom";

export const History = () => {
  return (
    <>
      <div className="history h-auto flex flex-col justify-center items-center gap-8 my-8 py-20 px-10">
        <div className="context text-[#f0efed] text-center text-[1.1rem] w-full md:w-[70%]">
          <span>
            Our story is deeply rooted in a love for nature and the art of
            perfumery. AuraNatura was born out of the desire to create
            fragrances that not only elevate the senses but also embody the
            purity and richness of the natural world. Over the years, we have
            perfected the delicate process of sourcing sustainable ingredients
            from around the globe, ensuring that each scent reflects a
            harmonious blend of exotic botanicals, rare essences, and timeless
            olfactory traditions.
          </span>

          <span>
            What began as a small endeavor has blossomed into a global brand,
            yet our commitment to excellence remains the same. From the initial
            spark of inspiration to the final bottled fragrance, we infuse
            creativity and care into every step of the journey. At AuraNatura,
            we believe that a fragrance is more than just a scent; it is a
            personal signature, a lasting impression, and a reflection of one’s
            inner beauty. As we continue to grow, we invite you to join us in
            exploring the world of perfumery—where every fragrance is an
            invitation to discover your own story of elegance and allure.
          </span>
        </div>
        <Link
          to="about-us"
          className="bg-[#b48b5e] border-2 border-[#b48b5e] text-[#f0efed] px-10 p-2 text-[1.1rem] hover:bg-transparent hover:text-[#b48b5e] transition-all duration-300"
        >
          Read More
        </Link>
      </div>
    </>
  );
};
