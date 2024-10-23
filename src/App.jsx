import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* ---------------------------- User Components ---------------------------- */
import { UserLayout } from "./Layout/UserLayout";
import { Home } from "./Components/User/Home";
import { Login } from "./Components/User/Pages/Login";
import { Register } from "./Components/User/Pages/Register";
import { AboutUs } from "./Components/User/Pages/AboutUs";
import { ContactUs } from "./Components/User/Pages/ContactUs";
import { Men } from "./Components/User/Pages/Men";
import { Women } from "./Components/User/Pages/Women";
import { Exclusive } from "./Components/User/Pages/Exclusive";
import { Cart } from "./Components/User/Pages/Cart";
import { CheckOut } from "./Components/User/Pages/CheckOut";
import { ProductDetails } from "./Components/User/Pages/ProductDetails";
import { PageNotFound } from "./Components/User/Pages/PageNotFound";

/* ---------------------------- Admin Components ---------------------------- */
import { AdminLayout } from "./Layout/AdminLayout";
import { AdminLogin } from "./Components/admin/Login/AdminLogin";
import { AdminDashboard } from "./Components/admin/Dashboard/AdminDashboard";
import { ManageCustomers } from "./Components/admin/Customer/ManageCustomers";
import { AddCategory } from "./Components/admin/Category/AddCategory";
import { ManageCategory } from "./Components/admin/Category/ManageCategory";
import { AddProducts } from "./Components/admin/Products/AddProducts";
import { AddSubcategory } from "./Components/admin/Subcategory/AddSubcategory";
import { ManageProducts } from "./Components/admin/Products/ManageProducts";
import { ManageSubcategory } from "./Components/admin/Subcategory/ManageSubcategory";
import { ManageOrders } from "./Components/admin/Orders/ManageOrders";
import { ManageReviews } from "./Components/admin/Review/ManageReviews";

export const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/men-collection" element={<Men />} />
            <Route path="/women-collection" element={<Women />} />
            <Route path="/exclusive-collection" element={<Exclusive />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          {/* Admin panel routes */}
          <Route path="/" element={<AdminLayout />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route
              path="/admin-managecustomers"
              element={<ManageCustomers />}
            />
            <Route path="/admin-addproducts" element={<AddProducts />} />
            <Route path="/admin-manageproducts" element={<ManageProducts />} />
            <Route path="/admin-addcategory" element={<AddCategory />} />
            <Route path="/admin-managecategory" element={<ManageCategory />} />
            <Route path="/admin-addsubcategory" element={<AddSubcategory />} />
            <Route
              path="/admin-managesubcategory"
              element={<ManageSubcategory />}
            />
            <Route path="/admin-manageorders" element={<ManageOrders />} />
            <Route path="/admin-managereviews" element={<ManageReviews />} />
          </Route>

          {/* Admin login page */}
          <Route path="/admin" element={<AdminLogin />} />
        </Routes>
      </Router>
    </>
  );
};
