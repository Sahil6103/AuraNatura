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
} from "@material-tailwind/react";
import { ArrowDown01Icon } from "hugeicons-react";

export function Filter({ closeSidebar }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <Card className="h-screen w-[18rem] rounded-none max-w-[18rem] px-4 bg-[#f0efed] md:bg-transparent text-black flex-col shadow-none">
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
              <List className="p-0">
                <Link
                  to="/man-collection"
                  className="ps-6 py-3 rounded-lg hover:bg-[#ffffff2f] text-[20px]"
                  onClick={closeSidebar}
                >
                  Man Collections
                </Link>
                <Link
                  to="/woman-collection"
                  onClick={closeSidebar}
                  className="ps-6 py-3 rounded-lg hover:bg-[#ffffff2f] text-[20px]"
                >
                  Woman Collection
                </Link>
                <Link
                  to="/exclusive-collection"
                  onClick={closeSidebar}
                  className="ps-6 py-3 rounded-lg hover:bg-[#ffffff2f] text-[20px]"
                >
                  Exclusive Collection
                </Link>
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
                <Link
                  onClick={closeSidebar}
                  className="ps-10 py-3 rounded-lg hover:bg-[#ffffff2f] text-[20px]"
                >
                  Add Category
                </Link>
                <Link
                  onClick={closeSidebar}
                  className="ps-10 py-3 rounded-lg hover:bg-[#ffffff2f] text-[20px]"
                >
                  Manage Category
                </Link>
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
                  Subcategory
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link
                  onClick={closeSidebar}
                  className="ps-10 py-3 rounded-lg hover:bg-[#ffffff2f] text-[20px]"
                >
                  Add Subcategory
                </Link>
                <Link
                  onClick={closeSidebar}
                  className="ps-10 py-3 rounded-lg hover:bg-[#ffffff2f] text-[20px]"
                >
                  Manage Subcategory
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
        </List>
      </Card>
    </>
  );
}
