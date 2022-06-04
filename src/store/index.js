import { configureStore } from "@reduxjs/toolkit";
import submissionReducer from "./submission/index.js";
import stageReducer from "./stage/index.js";
import marksheetReducer from "./marksheet/index.js";
import groupsReducer from "./StudentGroup/index.js";
import userReducer from "./user/index.js";

const store = configureStore({
  reducer: {
    user: userReducer,
    submission: submissionReducer,
    stage: stageReducer,
    marksheet: marksheetReducer,
    studentgroup: groupsReducer,
  },
});

export default store;
