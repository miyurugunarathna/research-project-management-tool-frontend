import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/index.js";
import submissionReducer from "./submission/index.js";
import stageReducer from "./stage/index.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    submission: submissionReducer,
    stage: stageReducer,
  },
});

export default store;
