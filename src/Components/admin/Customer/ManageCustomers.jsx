import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import toast from "react-hot-toast";

export const ManageCustomers = () => {
  const [user, setUser] = useState([]); // State for feedback
  const TABLE_HEAD = ["Full Name", "Email", "Password"];

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://673ebc2fa9bc276ec4b57911.mockapi.io/users"
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      toast.error("Failed to fetch users!");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="list flex flex-col">
        <div className="list mb-4">
          <h1 className="text-[1.8rem] font-bold">Customers List</h1>
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
              {user.map(({ id, fullname, email, password }, index) => {
                const isLast = index === user.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {fullname}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {password}
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
