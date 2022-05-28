import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import submissionRequest from "../../api/Submission/submission.request";

export const getSubmissionStore = createAsyncThunk(
  "submission/getSubmissions",
  async (thunkAPI) => {
    try {
      const res = await submissionRequest.getSubmissions();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addSubmissionStore = createAsyncThunk(
  "submission/addSubmissions",
  async (thunkAPI) => {
    try {
      const res = await submissionRequest.addSubmission();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getOneSubmissionStore = createAsyncThunk(
  "submission/getOneSubmission",
  async (thunkAPI) => {
    try {
      const res = await submissionRequest.getOneSubmission();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateSubmissionStore = createAsyncThunk(
  "submission/updateSubmissions",
  async (thunkAPI) => {
    try {
      const res = await submissionRequest.updateSubmission();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteSubmissionStore = createAsyncThunk(
  "submission/deleteSubmissions",
  async (thunkAPI) => {
    try {
      const res = await submissionRequest.deleteSubmission();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  submission: [],
};

export const submissionSlice = createSlice({
  name: "submission",
  initialState,
  extraReducers: {
    //  getSubmission
    /* eslint-disable no-param-reassign */
    [getSubmissionStore.fulfilled]: (state, action) => {
      state.submission = action.payload;
    },
    //  addSubmission
    [addSubmissionStore.fulfilled]: (state, action) => {
      state.submission.push(action.payload);
    },
    //  getOneSubmission
    /* eslint-disable no-param-reassign */
    [getOneSubmissionStore.fulfilled]: (state, action) => {
      state.submission = action.payload;
    },
    //  updateSubmission
    [updateSubmissionStore.fulfilled]: (state, action) => {
      const { id, type, description } = action.payload;
      const existingSubmission = state.find((sub) => sub.id === id);
      if (existingSubmission) {
        existingSubmission.type = type;
        existingSubmission.description = description;
      }
    },
    //  deleteSubmission
    /* eslint-disable no-param-reassign */
    [deleteSubmissionStore.fulfilled]: (state, action) => {
      state.submission = state.submission.filter(
        (ele) => ele.id !== action.payload,
      );
    },
  },
});

const { reducer } = submissionSlice;
export default reducer;
