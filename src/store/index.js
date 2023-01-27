import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-Slice";
import productSlice from "./product-Slice";

const store = configureStore({
  reducer: { auth: authSlice.reducer, product: productSlice.reducer },
});

export default store;
