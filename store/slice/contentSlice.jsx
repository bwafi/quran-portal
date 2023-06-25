import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSurah = createAsyncThunk("surah/getSurah", async () => {
  const response = await axios.get("https://api.quran.gading.dev/surah");
  return response.data.data;
});

export const getDetailSurah = createAsyncThunk("surah/getDetailSurah", async (id) => {
  const response = await axios.get(`https://api.quran.gading.dev/surah/${id}`);
  return response.data.data;
});

const initialState = {
  surah: [],
  detailSurah: [],
  isLoading: false,
  hasError: false,
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getSurah.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getSurah.fulfilled, (state, action) => {
        state.surah = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getSurah.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      })
      .addCase(getDetailSurah.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getDetailSurah.fulfilled, (state, action) => {
        state.detailSurah = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getDetailSurah.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      });
  },
});

export const selectDetailSurah = (state) => state.content.detailSurah;
export const selectSurahList = (state) => state.content.surah;
export const selectLoadingState = (state) => state.content.isLoading;
export const selectErrorState = (state) => state.content.hasError;

export default contentSlice.reducer;
