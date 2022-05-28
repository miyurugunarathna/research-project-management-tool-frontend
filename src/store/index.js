import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/index.js";
import submissionReducer from "./submission/index.js";
import stageReducer from "./stage/index.js";
import marksheetReducer from "./marksheet/index.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    submission: submissionReducer,
    stage: stageReducer,
    marksheet: marksheetReducer,
  },
});

export default store;
