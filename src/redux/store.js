import { configureStore } from "@reduxjs/toolkit";

import { carritoSlice } from "./carrito/carritoSlice";

export const store = configureStore({
  reducer: {
    carrito: carritoSlice.reducer,
  },
});
