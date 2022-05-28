import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import marksheetRequest from "../../api/Marksheet/marksheet.request.js";

export const getMarksheetstore = createAsyncThunk(
  "marksheet/getMarksheets",
  async (thunkAPI) => {
    try {
      const res = await marksheetRequest.getMarksheets();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addMarksheetStore = createAsyncThunk(
  "marksheet/addMarksheet",
  async (thunkAPI) => {
    try {
      const res = await marksheetRequest.addMarksheet();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getOneMarksheetStore = createAsyncThunk(
  "marksheet/getOneMarksheet",
  async (thunkAPI) => {
    try {
      const res = await marksheetRequest.getOneMarksheet();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateMarksheetStore = createAsyncThunk(
  "marksheet/updateMarksheet",
  async (thunkAPI) => {
    try {
      const res = await marksheetRequest.updateMarksheet();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteMarksheetStore = createAsyncThunk(
  "marksheet/deleteMarksheet",
  async (thunkAPI) => {
    try {
      const res = await marksheetRequest.deleteMarksheet();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  marksheet: [],
};

export const marksheetSlice = createSlice({
  name: "marksheet",
  initialState,
  extraReducers: {
    //  getMarksheet
    /* eslint-disable no-param-reassign */
    [getMarksheetstore.fulfilled]: (state, action) => {
      state.marksheet = action.payload;
    },
    //  addMarksheet
    [addMarksheetStore.fulfilled]: (state, action) => {
      state.marksheet.push(action.payload);
    },
    //  getOneMarksheet
    /* eslint-disable no-param-reassign */
    [getOneMarksheetStore.fulfilled]: (state, action) => {
      state.marksheet = action.payload;
    },
    //  updateMarksheet
    [updateMarksheetStore.fulfilled]: (state, action) => {
      const { id, criteria, distribution } = action.payload;
      const existingMarksheet = state.find((mark) => mark.id === id);
      if (existingMarksheet) {
        existingMarksheet.criteria = criteria;
        existingMarksheet.distribution = distribution;
      }
    },
    //  deleteMarksheet
    /* eslint-disable no-param-reassign */
    [deleteMarksheetStore.fulfilled]: (state, action) => {
      state.marksheet = state.marksheet.filter(
        (ele) => ele.id !== action.payload,
      );
    },
  },
});

const { reducer } = marksheetSlice;
export default reducer;
