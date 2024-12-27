import React, { useEffect, useState } from "react";
import { MenPerfume } from "../assets/index";
import { PlusSignIcon, Remove01Icon } from "hugeicons-react";
import { Link } from "react-router-dom";
import { UseScrollTop } from "../Components/Common/UseScrollTop";
import { useParams } from "react-router-dom";
import axios from "axios";

export const ProductDetails = () => {
  UseScrollTop();
  const { id } = useParams();
  console.log(id);
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState(null); // Set initial state to null
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`) // Assuming the endpoint takes an ID
      .then((res) => {
        setProduct(res.data); // Update product state with fetched data
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>; // Loading state
  }

  if (!product) {
    return <h2>Product not found</h2>; // If product data is not available
  }

  return (
    <>
      <div className="productdetails px-4 md:px-16 py-8 lg:py-16 flex flex-col lg:flex-row justify-between items-start gap-5">
        <div className="product-img flex justify-center items-center w-full lg:w-[40%]">
          <img src={MenPerfume} alt="" className="w-[70%] bg-[#e7e7e7]" />
        </div>
        <div className="product-detail flex flex-col gap-2 w-full lg:w-[60%]">
          <div className="detail flex flex-col">
            <span className="text-[#64748b] text-[1.1.rem] lg:text-[1.2rem]">
              {product.proCategory}
            </span>
            <h1 className="text-[1.5rem] lg:text-[2rem] font-semibold">
              {product.proTitle}
            </h1>
            <span className="text-[1.2rem] lg:text-[1.4rem] font-semibold">
              50ML
            </span>
            <div className="price flex items-center gap-3">
              <span className="line-through lg:text-[1.2rem] text-[#64748b]">
                &#8377;{product.proPrice * 1.5}
              </span>
              <span className="text-[1.3rem] lg:text-[1.6rem] font-bold tracking-wide">
                &#8377;{product.proPrice}
              </span>
            </div>
            <p className="text-[1.1rem] w-full lg:w-[85%] mt-4">
              {product.proDesc}
            </p>
          </div>
          <div className="qty mt-5">
            <div className="buttons flex">
              <button
                className="px-3 lg:px-4 py-1 lg:py-2 bg-black text-white text-center text-[1.2rem]"
                onClick={() => (count > 1 ? setCount(count - 1) : count)}
              >
                <Remove01Icon color="#fff" size={18} />
              </button>
              <input
                type="text"
                disabled
                className="py-1 lg:py-2 w-[50px] lg:w-[60px] text-center border border-gray-400"
                value={count}
              />
              <button
                className="px-3 lg:px-4 py-1 lg:py-2 bg-black text-white text-center text-[1.2rem]"
                onClick={() => setCount(count + 1)}
              >
                <PlusSignIcon color="#fff" size={18} />
              </button>
            </div>
          </div>
          <div className="buttons flex flex-col md:flex-row gap-3 lg:gap-5 mt-5">
            <Link
              to="/cart"
              className="text-center py-1 lg:py-2 md:px-10 lg:px-16 text-[1.2rem] bg-neutral-800 text-[#f0efed] border-2 border-neutral-800 hover:text-neutral-800 hover:bg-transparent transition-all duration-300"
            >
              Add to Cart
            </Link>
            <Link
              to="/checkout"
              className="text-center py-1 lg:py-2 md:px-12 lg:px-[76px] text-[1.2rem] bg-[#b48b5e] text-[#f0efed] border-2 border-[#b48b5e] hover:bg-transparent hover:border-[#b48b5e] hover:text-[#b48b5e] transition-all duration-300"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
