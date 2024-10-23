import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  Task01Icon,
  MenuSquareIcon,
  BlockGameIcon,
  UserGroupIcon,
  CheckListIcon,
  Comment01Icon,
  ArrowDown01Icon,
} from "hugeicons-react";

import { LogoIcon, FullLogo } from "../../../assets/index";

export function AdminSidebar({ closeSidebar }) {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-screen w-[18rem] rounded-none max-w-[18rem] sticky px-4 py-6 shadow-xl shadow-blue-gray-900/5 bg-[#161616] text-white font-[brandon] flex flex-col gap-3">
      <div className="mb-2 px-3 overflow-hidden">
        <Link
          to="admin-dashboard"
          className="logo font-[airnt] text-[2.8rem]"
          onClick={closeSidebar}
        >
          <img src={FullLogo} alt="" className="w-[90%]" />
        </Link>
      </div>
      <List className="flex flex-col gap-2">
        <Link
          to="admin-managecustomers"
          onClick={closeSidebar}
          className="flex gap-2 px-3 py-3 rounded-lg text-white hover:bg-[#ffffff2f]"
        >
          <ListItemPrefix>
            <UserGroupIcon color="#fff" size={20} className="m-0" />
          </ListItemPrefix>
          <Typography color="white" className="font-normal">
            Manage Customers
          </Typography>
        </Link>
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
          <ListItem className="p-0 hover:bg-[#ffffff2f]" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3 flex gap-2"
            >
              <Task01Icon color="#fff" size={20} />
              <Typography
                color="blue-gray"
                className="mr-auto font-normal text-[17px]"
              >
                Products
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="p-0">
            <List className="p-0">
              <Link
                to="admin-addproducts"
                className="ps-10 py-3 rounded-lg text-white hover:bg-[#ffffff2f]"
                onClick={closeSidebar}
              >
                Add Products
              </Link>
              <Link
                to="admin-manageproducts"
                onClick={closeSidebar}
                className="ps-10 py-3 rounded-lg text-white hover:bg-[#ffffff2f]"
              >
                Manage Products
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
          <ListItem className="p-0 hover:bg-[#ffffff2f]" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3 flex gap-2"
            >
              <MenuSquareIcon color="#fff" size={20} />
              <Typography
                color="blue-gray"
                className="mr-auto font-normal text-[17px]"
              >
                Category
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link
                to="admin-addcategory"
                onClick={closeSidebar}
                className="ps-10 py-3 rounded-lg text-white hover:bg-[#ffffff2f]"
              >
                Add Category
              </Link>
              <Link
                to="admin-managecategory"
                onClick={closeSidebar}
                className="ps-10 py-3 rounded-lg text-white hover:bg-[#ffffff2f]"
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
          <ListItem className="p-0 hover:bg-[#ffffff2f]" selected={open === 3}>
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="border-b-0 p-3 flex gap-2"
            >
              <BlockGameIcon color="#fff" size={20} />
              <Typography
                color="blue-gray"
                className="mr-auto font-normal text-[17px]"
              >
                Subcategory
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <Link
                to="admin-addsubcategory"
                onClick={closeSidebar}
                className="ps-10 py-3 rounded-lg text-white hover:bg-[#ffffff2f]"
              >
                Add Subcategory
              </Link>
              <Link
                to="admin-managesubcategory"
                onClick={closeSidebar}
                className="ps-10 py-3 rounded-lg text-white hover:bg-[#ffffff2f]"
              >
                Manage Subcategory
              </Link>
            </List>
          </AccordionBody>
        </Accordion>
        <Link
          to="admin-manageorders"
          onClick={closeSidebar}
          className="flex gap-2 px-3 py-3 rounded-lg hover:bg-[#ffffff2f]"
        >
          <ListItemPrefix>
            <CheckListIcon color="#fff" size={20} />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal">
            Manage Orders
          </Typography>
        </Link>
        <Link
          to="admin-managereviews"
          onClick={closeSidebar}
          className="flex gap-2 px-3 py-3 rounded-lg hover:bg-[#ffffff2f]"
        >
          <ListItemPrefix>
            <Comment01Icon color="#fff" size={20} />
          </ListItemPrefix>
          <Typography color="blue-gray" className="mr-auto font-normal">
            Manage Reviews
          </Typography>
        </Link>
      </List>
    </Card>
  );
}
