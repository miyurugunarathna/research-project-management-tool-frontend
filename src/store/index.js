import { configureStore } from "@reduxjs/toolkit";
import submissionReducer from "./submission/index.js";
import stageReducer from "./stage/index.js";
import marksheetReducer from "./marksheet/index.js";

const store = configureStore({
  reducer: {
    submission: submissionReducer,
    stage: stageReducer,
    marksheet: marksheetReducer,
  },
});

export default store;
