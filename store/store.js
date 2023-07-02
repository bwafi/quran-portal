"use client";
import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "./slice/contentSlice";
import sholatReducer from "./slice/sholatSlice";

const store = configureStore({
  reducer: {
    content: contentReducer,
    sholat: sholatReducer,
  },
});

export default store;
