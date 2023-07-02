import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCity = createAsyncThunk("sholat/getCity", async () => {
  const response = await axios.get("https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/kota.json");
  console.log(response.data);
  return response.data;
});

export const getJadwalSholat = createAsyncThunk("sholat/getJadwalSholat", async ({ city, year, month }) => {
  const response = await axios.get(
    `https://raw.githubusercontent.com/lakuapik/jadwalsholatorg/master/adzan/${city}/${year}/${month}.json`
  );
  return response.data;
});

const initialState = {
  city: [],
  jadwalSholat: [],
  isLoading: false,
  isError: false,
};

const sholatSlice = createSlice({
  name: "sholat",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCity.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCity.fulfilled, (state, action) => {
        state.city = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getCity.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getJadwalSholat.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getJadwalSholat.fulfilled, (state, action) => {
        state.jadwalSholat = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(getJadwalSholat.rejected, (state) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const selectCity = (state) => state.sholat.city;
export const selectJadwalSholat = (state) => state.sholat.jadwalSholat;
export const selectIsLoading = (state) => state.sholat.isLoading;
export const selectIsError = (state) => state.sholat.isError;

export default sholatSlice.reducer;
