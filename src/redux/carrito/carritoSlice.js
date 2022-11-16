import { internal_processStyles } from "@mui/styled-engine";
import { createSlice, current } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
  name: "modal",
  initialState: { car: [] },
  reducers: {
    updateCarrito: (state, { payload }) => {
      state.car.push(1);
    },
  },
});

export const { updateCarrito } = carritoSlice.actions;
