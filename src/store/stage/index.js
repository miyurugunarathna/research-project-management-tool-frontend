import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import stageRequest from "../../api/Stage/stage.request.js";

export const getStagetore = createAsyncThunk(
  "stage/getStage",
  async (thunkAPI) => {
    try {
      const res = await stageRequest.getStages();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addStageStore = createAsyncThunk(
  "stage/addStage",
  async (thunkAPI) => {
    try {
      const res = await stageRequest.addStage();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getOneStageStore = createAsyncThunk(
  "stage/getOneStage",
  async (thunkAPI) => {
    try {
      const res = await stageRequest.getOneStage();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateStageStore = createAsyncThunk(
  "stage/updateStage",
  async (thunkAPI) => {
    try {
      const res = await stageRequest.updateStage();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteStageStore = createAsyncThunk(
  "stage/deleteStage",
  async (thunkAPI) => {
    try {
      const res = await stageRequest.deleteStage();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  stage: [],
};

export const stageSlice = createSlice({
  name: "stage",
  initialState,
  extraReducers: {
    //  getStage
    /* eslint-disable no-param-reassign */
    [getStagetore.fulfilled]: (state, action) => {
      state.stage = action.payload;
    },
    //  addStage
    [addStageStore.fulfilled]: (state, action) => {
      state.stage.push(action.payload);
    },
    //  getOneStage
    /* eslint-disable no-param-reassign */
    [getOneStageStore.fulfilled]: (state, action) => {
      state.stage = action.payload;
    },
    //  updateStage
    [updateStageStore.fulfilled]: (state, action) => {
      const {
        id,
        submissionType,
        status,
        reviewer,
        marksheet,
        result,
        document,
        dueDate,
        group,
      } = action.payload;
      const existingStage = state.find((sta) => sta.id === id);
      if (existingStage) {
        existingStage.submissionType = submissionType;
        existingStage.status = status;
        existingStage.reviewer = reviewer;
        existingStage.marksheet = marksheet;
        existingStage.result = result;
        existingStage.document = document;
        existingStage.dueDate = dueDate;
        existingStage.group = group;
      }
    },
    //  deleteStage
    /* eslint-disable no-param-reassign */
    [deleteStageStore.fulfilled]: (state, action) => {
      state.stage = state.stage.filter((ele) => ele.id !== action.payload);
    },
  },
});

const { reducer } = stageSlice;
export default reducer;
