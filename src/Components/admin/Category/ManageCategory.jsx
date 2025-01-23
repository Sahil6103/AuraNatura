import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import {
  MultiplicationSignIcon,
  PencilEdit01Icon,
  PencilEdit02Icon,
} from "hugeicons-react";
import toast from "react-hot-toast";

export const ManageCategory = () => {
  const [category, setCategory] = useState([]);
  const TABLE_HEAD = [
    "Category Title",
    "Category Description",
    "Edit",
    "Delete",
  ];

  const fetchCategory = async () => {
    try {
      const res = await axios.get("http://localhost:5000/category");
      setCategory(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/category/${id}`);
      setCategory((prevCategory) =>
        prevCategory.filter((cate) => cate.id !== id),
      );
      toast.success("Category deleted successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="list flex flex-col">
        <div className="list mb-4">
          <h1 className="text-[1.8rem] font-bold">Category List</h1>
        </div>
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-gray-200 bg-gray-200 p-4 text-[1.1rem]"
                  >
                    <Typography
                      variant="small"
                      color="black"
                      className="font-bold leading-none opacity-80"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {category.map(({ id, categoryTitle, categoryDesc }, index) => {
                const isLast = index === category.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {categoryTitle}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal truncate w-64"
                      >
                        {categoryDesc}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <button className="bg-[#355bcb] hover:bg-[#1e32cd] p-1.5 rounded-md transition-all duration-300">
                          <PencilEdit01Icon
                            size={18}
                            color="white"
                            strokeWidth={2.5}
                          />
                        </button>
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <button
                          onClick={() => handleDelete(id)}
                          className="bg-[#ff4747] hover:bg-[#ff2e2e] p-1.5 rounded-md transition-all duration-300"
                        >
                          <MultiplicationSignIcon
                            size={18}
                            color="white"
                            strokeWidth={3}
                          />
                        </button>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </>
  );
};
