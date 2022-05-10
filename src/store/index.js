import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/index.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
