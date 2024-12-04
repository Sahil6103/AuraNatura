import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./EditProductSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
