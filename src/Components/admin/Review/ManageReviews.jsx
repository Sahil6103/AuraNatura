import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import axios from "axios";
import toast from "react-hot-toast";
import { MultiplicationSignIcon, WhatsappIcon } from "hugeicons-react";
import { ExportToExcel } from "./ExportToExcel";

export const ManageReviews = () => {
  const [feedback, setFeedback] = useState([]); // State for feedback
  const TABLE_HEAD = ["Full Name", "Email", "Subject", "Message", "Delete"];

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(
        "https://673ebc2fa9bc276ec4b57911.mockapi.io/feedback",
      );
      setFeedback(response.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
      toast.error("Failed to fetch reviews!");
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://673ebc2fa9bc276ec4b57911.mockapi.io/feedback/${id}`,
      );
      setFeedback(feedback.filter((item) => item.id !== id));
      toast.success("Feedback deleted successfully!");
    } catch (err) {
      console.log(err);
      toast.error("Failed to delete feedback");
    }
  };

  const handleDeleteAll = async () => {
    try {
      const response = await axios.get(
        "https://673ebc2fa9bc276ec4b57911.mockapi.io/feedback",
      );
      const feedbackData = response.data;

      await Promise.all(
        feedbackData.map((item) => {
          axios.delete(
            `https://673ebc2fa9bc276ec4b57911.mockapi.io/feedback/${item.id}`,
          );
        }),
      );
      setFeedback([]);
      toast.success("All feedback has been deleted!");
    } catch (err) {
      console.log(err);
    }
  };

  const [data, setData] = React.useState([]);
  const fileName = "myfile";

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://673ebc2fa9bc276ec4b57911.mockapi.io/feedback")
        .then((res) => {
          setData(res.data);
        });
    };
    fetchData();
  }, []);

  // direct reply on whatsapp chat
  // const handleWhatsapp = (mobile) => {
  //   if (!mobile) {
  //     toast.error("Mobile number is not available!");
  //     return;
  //   }

  //   const message = encodeURIComponent(
  //     "Hello! I wanted to reach out regarding your feedback."
  //   );
  //   const whatsappURL = `https://wa.me/${mobile}?text=${message}`;
  //   window.open(whatsappURL, "_blank");
  // };

  return (
    <div className="list flex flex-col px-4 md:px-16 py-10">
      <div className="list mb-4 flex justify-between items-center">
        <h1 className="text-[1.8rem] font-bold text-[#b48b5e] w-full md:w-fit">
          Manage Reviews
        </h1>
        <div className="buttons flex gap-3">
          <ExportToExcel apiData={data} fileName={fileName} />
          <button
            onClick={handleDeleteAll}
            className="px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white font-semibold tracking-wider rounded-md transition-all duration-300"
          >
            Clear all Feedbacks
          </button>
        </div>
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
                    className="font-bold leading-none opacity-80 text-[1.1rem] md:text-[1.15rem]"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {feedback.map(
              ({ id, fullname, email, subject, message }, index) => {
                const isLast = index === feedback.length - 1;
                const classes = isLast ? "p-4" : "p-4 border-b border-gray-300";

                return (
                  <tr key={id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-[1.2rem] md:text-[1.15rem]"
                      >
                        {fullname}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-[1.2rem] md:text-[1.15rem]"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-[1.2rem] md:text-[1.15rem]"
                      >
                        {subject}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-[1.2rem] md:text-[1.15rem]"
                      >
                        {message}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        as="button"
                        variant="small"
                        color="red"
                        className="font-medium hover:underline"
                        onClick={() => handleDelete(id)}
                      >
                        <button className="bg-[#ff4747] hover:bg-[#ff2e2e] p-1.5 rounded-md transition-all duration-300">
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
              },
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
