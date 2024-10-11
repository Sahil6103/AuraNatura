import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

import { StarIcon } from "hugeicons-react";
import { Link } from "react-router-dom";

export function ProductCard({ src, productName, price }) {
  return (
    <Link to="/product-details">
      <Card className="product-card w-42 md:w-56 bg-transparent shadow-none cursor-pointer">
        <CardHeader shadow={false} floated={false} className="h-98 m-0">
          <img
            src={src}
            alt="card-image"
            className="h-full w-full object-cover bg-[#e7e7e7]"
          />
          <div className="btn absolute hidden md:block -bottom-full right-0 z-40 p-3 transition-all duration-300">
            <button className="bg-[#b28a79] text-[#f0efed] py-1.5 md:px-[66px]">
              Add to Cart
            </button>
          </div>
        </CardHeader>
        <CardBody className="bg-transparent px-3 py-2 flex flex-col gap-3">
          <div className="">
            <Typography className="text-[1.3rem]">{productName}</Typography>
          </div>
          <div className="stars flex gap-[2px] -mt-1">
            <StarIcon color="black" size={16} className="" />
            <StarIcon color="black" size={16} className="" />
            <StarIcon color="black" size={16} className="" />
            <StarIcon color="black" size={16} className="" />
            <StarIcon color="black" size={16} className="" />
          </div>
          <Typography className="text-[1.2rem]">&#8377;{price}/-</Typography>
          <button className="bg-[#b28a79] text-[#f0efed] py-1.5 mt-1 md:hidden">
            Add to Cart
          </button>
        </CardBody>
      </Card>
    </Link>
  );
}
