import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
} from "@material-tailwind/react";
import { ArrowDown01Icon } from "hugeicons-react";

export function Filter({ closeSidebar }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Card className="h-screen w-[18rem] md:w-[15rem] rounded-none max-w-[18rem] md:max-w-[15rem] px-4 md:px-0 py-10 md:py-10 bg-[#f0efed] md:bg-transparent text-black flex flex-col shadow-none">
        <Typography className="text-[1.5rem] font-semibold px-3">
          Product Filters
        </Typography>
        <List className="flex flex-col gap-2 px-0 py-3 ">
          <Accordion
            open={open === 1}
            icon={
              <ArrowDown01Icon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform  ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem
              className="p-0 hover:bg-[#ffffff2f]"
              selected={open === 1}
            >
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3 flex gap-2"
              >
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-[20px]"
                >
                  Categories
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="p-0">
              <List className="p-0 ps-3">
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">Men's Collection</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="black" />
                  <span className="text-[18px]">Women's Collection</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="black" />
                  <span className="text-[18px]">Exclusive Collection</span>
                </div>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ArrowDown01Icon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem
              className="p-0 hover:bg-[#ffffff2f]"
              selected={open === 2}
            >
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3 flex gap-2"
              >
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-[20px]"
                >
                  Price
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">Below &#8377;1000</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">&#8377;1000 - &#8377;3000</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">&#8377;3000 - &#8377;5000</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">Above &#8377;5000</span>
                </div>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            icon={
              <ArrowDown01Icon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 3 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem
              className="p-0 hover:bg-[#ffffff2f]"
              selected={open === 3}
            >
              <AccordionHeader
                onClick={() => handleOpen(3)}
                className="border-b-0 p-3 flex gap-2"
              >
                <Typography
                  color="blue-gray"
                  className="mr-auto font-normal text-[20px]"
                >
                  Size
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">5ML</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">10ML</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">20ML</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">50ML</span>
                </div>
                <div className="flex items-center">
                  <Checkbox color="green" />
                  <span className="text-[18px]">100ML</span>
                </div>
              </List>
            </AccordionBody>
          </Accordion>
        </List>
        <button className="px-8 py-1.5 mt-5 bg-[#b48b5e] text-[#e9e9e9] text-[1.1rem]">
          Apply Filter
        </button>
      </Card>
    </>
  );
}
