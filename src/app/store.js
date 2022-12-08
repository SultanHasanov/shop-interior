import { configureStore } from "@reduxjs/toolkit";
import cart from '../features/cartSlise'

export const store = configureStore({
  reducer: {
    cart
  },
});
