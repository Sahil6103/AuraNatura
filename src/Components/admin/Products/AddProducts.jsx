import React from "react";
import {
  Card,
  Input,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";

export function AddProducts() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[1.8rem] font-bold">Add Products</h1>
      <Card
        shadow={true}
        className="w-full md:w-[80%] lg:w-[60%] px-6 md:px-10 rounded-lg"
      >
        <form className="py-8">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-[1rem]"
            >
              Product Title
            </Typography>
            <Input
              size="lg"
              placeholder="Enter Product Title"
              className="bg-[#e1e0e0a8] rounded-[8px]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-[1rem]"
            >
              Product Description
            </Typography>
            <Textarea
              rows={5}
              size="lg"
              placeholder="Enter Product Description"
              className="bg-[#e1e0e0a8] rounded-[8px]"
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-[1rem]"
            >
              Product Stock
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Enter Product Stock"
              className="bg-[#e1e0e0a8] rounded-[8px]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-[1rem]"
            >
              Product Price
            </Typography>
            <Input
              type="text"
              size="lg"
              placeholder="Enter Product Price"
              className=" bg-[#e1e0e0a8] rounded-[8px]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-[1rem]"
            >
              Select Category
            </Typography>
            <select
              id="category"
              class="bg-[#e1e0e0a8] rounded-lg block w-full p-2.5 "
            >
              <option selected>Select Category</option>
              <option value="US">Man</option>
              <option value="CA">Woman</option>
              <option value="FR">Exclusive</option>
            </select>

            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-[1rem]"
            >
              Upload Photos
            </Typography>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed cursor-pointer bg-gray-5 hover:bg-gray-100 bg-[#e1e0e0a6] rounded-[8px]"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" multiple />
              </label>
            </div>
          </div>

          <button
            className="mt-6 bg-cyan-600 text-white font-bold tracking-wide rounded-[8px] px-5 py-2"
            fullWidth
          >
            Upload Product
          </button>
        </form>
      </Card>
    </div>
  );
}
