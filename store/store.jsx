"use client";
import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slice/contentSlice";

const store = configureStore({
  reducer: {
    content: contentReducer,
  },
  devTools: true,
});

export default store;
