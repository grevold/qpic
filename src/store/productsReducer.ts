import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product, ProductsStore } from "../types";

const initialState = {
  products: [],
} as ProductsStore;

const slice = createSlice({
  name: "products",
  initialState,
  reducers: {
    add(store, action: PayloadAction<Product>) {
      const id = action.payload.id;
      const product = store.products.find(
        ({ productData }) => productData.id === id
      );
      if (product) {
        product.amount++;
      } else {
        store.products.push({
          productData: action.payload,
          amount: 1,
        });
      }
    },
    remove(store, action: PayloadAction<number>) {
      const id = action.payload;
      const product = store.products.find(
        ({ productData }) => productData.id === id
      );
      if (product) {
        product.amount = product.amount ? product.amount - 1 : 0;
      }
    },
    trash(store, action: PayloadAction<number>) {
      const id = action.payload;
      const product = store.products.find(
        ({ productData }) => productData.id === id
      );
      if (product) {
        product.amount = 0;
      }
    },
  },
});

export const productsStoreActions = slice.actions;

export const productsReducer = slice.reducer;
