import React, { useEffect, useRef, useState } from "react";
import {
  Card,
  Input,
  Typography,
  Select,
  Option,
  // Textarea,
} from "@material-tailwind/react";
import { ProductImg, showToastAndFocus } from "../../../assets/index";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { clearSelectedProduct } from "../../../redux/EditProductSlice";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import Quill styles

export function AddProducts() {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);

  const [formData, setFormData] = useState({
    proTitle: "",
    proDesc: "",
    proStock: "",
    proPrice: "",
    proCategory: "",
  });

  useEffect(() => {
    if (selectedProduct) {
      setFormData({
        proTitle: selectedProduct.proTitle || "",
        proDesc: selectedProduct.proDesc || "",
        proStock: selectedProduct.proStock || "",
        proPrice: selectedProduct.proPrice || "",
        proCategory: selectedProduct.proCategory || "",
      });
    } else {
      setFormData({
        proTitle: "",
        proDesc: "",
        proStock: "",
        proPrice: "",
        proCategory: "",
      });
    }

    return () => dispatch(clearSelectedProduct());
  }, [selectedProduct, dispatch]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // const [description, setDescription] = useState("");

  // const handleDescriptionChange = (value) => {
  //   setDescription(value);
  // };

  // const proTitleInp = useRef(null);
  // const proDescInp = useRef(null);
  // const proStockInp = useRef(null);
  // const proPriceInp = useRef(null);
  // const proCategoryInp = useRef(null);
  // const proImgs = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const proTitle = proTitleInp.current?.value;
    // const proDesc = proDescInp.current?.value;
    // const proStock = proStockInp.current?.value;
    // const proPrice = proPriceInp.current?.value;
    // const proCategory = proCategoryInp.current?.value;
    // const proImgs = proImgs.current?.files;

    const { proTitle, proDesc, proStock, proPrice, proCategory } = formData;

    !proTitle
      ? showToastAndFocus("Enter Product Title!", proTitleInp, e)
      : !proDesc
      ? showToastAndFocus("Enter Product Description!", proDescInp, e)
      : !proStock
      ? showToastAndFocus("Enter Product Stock!", proStock, e)
      : !proPrice
      ? showToastAndFocus("Enter Product Price!", proPriceInp, e)
      : !proCategory || proCategory === "Select Category"
      ? showToastAndFocus("Select Product Category!", proCategoryInp, e)
      : // : !proImages || proImages.length === 0
        // ? showToastAndFocus("Add Products images!", proImgs, e)
        saveProducts(e);
  };

  const saveProducts = async (e) => {
    e.preventDefault();
    // console.log(selectedProduct.proId);

    const productObj = {
      id: selectedProduct ? selectedProduct.id : uuidv4(),
      ...formData,
    };

    try {
      if (selectedProduct && selectedProduct.id) {
        await axios.put(
          `http://localhost:5000/products/${selectedProduct.id}`,
          productObj
        );
        toast.success("Product updated successfully!");
      } else {
        await axios.post("http://localhost:5000/products", productObj);
        toast.success("Product added successfully!");
      }
      // console.log(res);
      // proTitleInp.current.value = "";
      // proDescInp.current.value = "";
      // proStockInp.current.value = "";
      // proPriceInp.current.value = "";
      // proCategoryInp.current.value = "";
      // proImgs.current.value = null;

      setFormData({
        proTitle: "",
        proDesc: "",
        proStock: "",
        proPrice: "",
        proCategory: "",
      });

      dispatch(clearSelectedProduct());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[1.8rem] font-bold">
        {selectedProduct ? "Update Product" : "Add Product"}
      </h1>
      <Card
        shadow={true}
        className="w-full md:w-[80%] lg:w-[60%] px-6 md:px-10 rounded-lg"
      >
        <form onSubmit={handleSubmit} className="py-8">
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
              name="proTitle"
              // inputRef={proTitleInp}
              value={formData.proTitle}
              onChange={handleInputChange}
              placeholder="Enter Product Title"
              className="!bg-[#efefef] rounded-[8px]"
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
            <textarea
              name="proDesc"
              // ref={proDescInp} // Use inputRef for Textarea
              value={formData.proDesc}
              onChange={handleInputChange}
              rows={5}
              size="lg"
              placeholder="Enter Product Description"
              className="!bg-[#efefef] rounded-[8px] p-3"
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-[1rem]"
            >
              Product Stock
            </Typography>
            <Input
              // inputRef={proStockInp}
              name="proStock"
              value={formData.proStock}
              onChange={handleInputChange}
              type="text"
              size="lg"
              placeholder="Enter Product Stock"
              className="!bg-[#efefef] rounded-[8px]"
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
              name="proPrice"
              // inputRef={proPriceInp}
              value={formData.proPrice}
              onChange={handleInputChange}
              type="text"
              size="lg"
              placeholder="Enter Product Price"
              className=" !bg-[#efefef] rounded-[8px]"
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
              // ref={proCategoryInp}
              name="proCategory"
              value={formData.proCategory}
              onChange={handleInputChange}
              id="category"
              className="bg-[#efefef] rounded-lg block w-full p-2.5"
            >
              <option selected>Select Category</option>
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
              <option value="Exclusive">Exclusive</option>
            </select>

            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-4 text-[1rem]"
            >
              Upload Photos
            </Typography>
            <div className="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed cursor-pointer bg-gray-5 hover:bg-gray-100 bg-[#efefef] rounded-[8px]"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
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
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF
                  </p>
                </div>
                <input
                  // ref={proImgs}
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  multiple
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            // onClick={handleSubmit}
            className="mt-6 bg-cyan-600 text-white font-bold tracking-wider rounded-[8px] px-5 py-2"
            fullWidth
          >
            {selectedProduct ? "Update Product" : "Add Product"}
          </button>
        </form>
      </Card>
    </div>
  );
}
