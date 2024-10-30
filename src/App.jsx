import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./Router/AppRoutes";
import { Toaster } from "react-hot-toast";

/* ---------------------------- User Components ---------------------------- */
// import { UserLayout } from "./Layout/UserLayout";
// import { Home } from "./Components/User/Home";
// import { Login } from "./Components/User/Pages/Login";
// import { Register } from "./Components/User/Pages/Register";
// import { AboutUs } from "./Components/User/Pages/AboutUs";
// import { ContactUs } from "./Components/User/Pages/ContactUs";
// import { Men } from "./Components/User/Pages/Men";
// import { Women } from "./Components/User/Pages/Women";
// import { Exclusive } from "./Components/User/Pages/Exclusive";
// import { Cart } from "./Components/User/Pages/Cart";
// import { CheckOut } from "./Components/User/Pages/CheckOut";
// import { ProductDetails } from "./Components/User/Pages/ProductDetails";
// import { PageNotFound } from "./Components/User/Pages/PageNotFound";

// /* ---------------------------- Admin Components ---------------------------- */
// import { AdminLayout } from "./Layout/AdminLayout";
// import { AdminLogin } from "./Components/admin/Login/AdminLogin";
// import { AdminDashboard } from "./Components/admin/Dashboard/AdminDashboard";
// import { ManageCustomers } from "./Components/admin/Customer/ManageCustomers";
// import { AddCategory } from "./Components/admin/Category/AddCategory";
// import { ManageCategory } from "./Components/admin/Category/ManageCategory";
// import { AddProducts } from "./Components/admin/Products/AddProducts";
// import { AddSubcategory } from "./Components/admin/Subcategory/AddSubcategory";
// import { ManageProducts } from "./Components/admin/Products/ManageProducts";
// import { ManageSubcategory } from "./Components/admin/Subcategory/ManageSubcategory";
// import { ManageOrders } from "./Components/admin/Orders/ManageOrders";
// import { ManageReviews } from "./Components/admin/Review/ManageReviews";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Toaster position="top-right" reverseOrder={false} />
      </BrowserRouter>
    </>
  );
};
