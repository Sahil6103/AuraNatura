import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import { MultiplicationSignIcon, PencilEdit01Icon } from "hugeicons-react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProductForEdit } from "../../../redux/EditProductSlice";

export const ManageProducts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const TABLE_HEAD = [
    "Product Title",
    "Product Description",
    "Product Stock",
    "Product Price",
    "Product Category",
    "Edit",
    "Delete",
  ];

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data);
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch products.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setProducts((prev) => prev.filter((product) => product.id !== id));
      toast.success("Product deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete product.");
    }
  };

  const handleEdit = (product) => {
    dispatch(selectProductForEdit(product));
    navigate("/admin-addproducts");
  };

  return (
    <div className="list flex flex-col">
      <div className="list mb-4">
        <h1 className="text-[1.8rem] font-bold">Products List</h1>
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
            {products.map(
              (
                {
                  id,
                  proId,
                  proTitle,
                  proDesc,
                  proStock,
                  proPrice,
                  proCategory,
                },
                index,
              ) => {
                const isLast = index === products.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal truncate w-56"
                      >
                        {proTitle}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal truncate w-64"
                      >
                        {proDesc}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {proStock}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {proPrice}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {proCategory}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <button
                        onClick={() =>
                          handleEdit({
                            id,
                            proTitle,
                            proDesc,
                            proStock,
                            proPrice,
                            proCategory,
                          })
                        }
                        className="bg-[#355bcb] hover:bg-[#1e32cd] p-1.5 rounded-md transition-all duration-300"
                      >
                        <PencilEdit01Icon
                          size={18}
                          color="white"
                          strokeWidth={2.5}
                        />
                      </button>
                    </td>
                    <td className={classes}>
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
                    </td>
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
