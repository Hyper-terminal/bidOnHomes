import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    filteredArray: [],
  },
  reducers: {
    addItem(state, action) {
      state.products.push(action.payload);
      state.filteredArray.push(action.payload);
    },
    filterPrice(state, action) {
      if (action.payload === 0) state.filteredArray = state.products;
      else {
        state.filteredArray = state.products.filter(
          (item) => Number(item.price) <= Number(action.payload)
        );
      }
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
