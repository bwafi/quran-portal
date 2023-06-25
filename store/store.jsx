"use client";
import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slice/contentSlice";

const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

export default store;
