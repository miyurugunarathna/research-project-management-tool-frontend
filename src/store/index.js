import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/index.js";
import submissionReducer from "./submission/index.js";
import groupsReducer from "./StudentGroup/index.js";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    submission: submissionReducer,
    studentgroup: groupsReducer
  },
});

export default store;
