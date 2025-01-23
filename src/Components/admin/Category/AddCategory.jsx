import React, { useRef } from "react";
import {
  Card,
  Input,
  Typography,
  Select,
  Option,
  // Textarea,
} from "@material-tailwind/react";
import { showToastAndFocus } from "../../../assets/index";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // Import Quill styles

export function AddCategory() {
  // const [description, setDescription] = useState("");

  // const handleDescriptionChange = (value) => {
  //   setDescription(value);
  // };

  const categoryTitleInp = useRef(null);
  const categoryDescInp = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const categoryTitle = categoryTitleInp.current?.value;
    const categoryDesc = categoryDescInp.current?.value;

    !categoryTitle
      ? showToastAndFocus("Enter Category Title!", categoryTitleInp, e)
      : !categoryDesc
        ? showToastAndFocus("Enter Category Description!", categoryDescInp, e)
        : saveCategory(e, categoryTitle, categoryDesc);
  };

  const saveCategory = async (e, categoryTitle, categoryDesc) => {
    e.preventDefault();

    const productObj = {
      categoryId: uuidv4(),
      categoryTitle,
      categoryDesc,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/category",
        productObj,
      );
      toast.success("Category added successfully!");
      console.log(res);
      categoryTitleInp.current.value = "";
      categoryDescInp.current.value = "";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[1.8rem] font-bold">Add Product Categories</h1>
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
              Product Category Title
            </Typography>
            <Input
              size="lg"
              inputRef={categoryTitleInp}
              placeholder="Enter Product category Title"
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
              Category Description
            </Typography>
            <textarea
              ref={categoryDescInp} // Use inputRef for Textarea
              rows={5}
              size="lg"
              placeholder="Enter Category Description"
              className="!bg-[#efefef] rounded-[8px] p-3"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="mt-6 bg-cyan-600 text-white font-bold tracking-wider rounded-[8px] px-5 py-2"
            fullWidth
          >
            Add Category
          </button>
        </form>
      </Card>
    </div>
  );
}
