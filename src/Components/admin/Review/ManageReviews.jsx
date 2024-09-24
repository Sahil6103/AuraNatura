import React from "react";
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Name", "Email", "Mobile No.", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "john@john.com",
    date: "0123456789",
  },
  {
    name: "John Michael",
    job: "john@john.com",
    date: "0123456789",
  },
  {
    name: "John Michael",
    job: "john@john.com",
    date: "0123456789",
  },
  {
    name: "John Michael",
    job: "john@john.com",
    date: "0123456789",
  },
  {
    name: "John Michael",
    job: "john@john.com",
    date: "0123456789",
  },
  {
    name: "John Michael",
    job: "john@john.com",
    date: "0123456789",
  },
];

export const ManageReviews = () => {
  return (
    <>
      <div className="list flex flex-col">
        <div className="list mb-4">
          <h1 className="text-[1.8rem] font-bold">Reviews</h1>
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
              {TABLE_ROWS.map(({ name, job, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {job}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
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
                        Delete
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
