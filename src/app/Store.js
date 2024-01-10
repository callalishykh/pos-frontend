import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/Product/store";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // product: productReducer,
    // student: studentReducer,
  },
});
