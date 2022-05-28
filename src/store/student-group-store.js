import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import groupRequest from "../../api/student-group.request";

export const getGroupStore = createAsyncThunk(
  "student-groups/getGroup",
  async (thunkAPI) => {
    try {
      const res = await groupRequest.getStudentGroup();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getOneGroupStore = createAsyncThunk(
  "student-groups/getOneGroup",
  async (groupId, thunkAPI) => {
    try {
      const res = await groupRequest.getOneSubmission(groupId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addGroupStore = createAsyncThunk(
  "student-groups/addGroup",
  async (group, thunkAPI) => {
    try {
      const res = await groupRequest.addStudentGroup(group);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateGroupStore = createAsyncThunk(
  "student-groups/updateGroup",
  async (group, thunkAPI) => {
    try {
      const res = await groupRequest.updateStudentGroup(group);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteGroupStore = createAsyncThunk(
  "student-groups/deleteGroup",
  async (groupId, thunkAPI) => {
    try {
      const res = await groupRequest.deleteStudentGroup(groupId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  groups: [],
};

export const groupSlice = createSlice({
    name: "groups",
    initialState,
    extraReducers: {
      [getGroupStore.fulfilled]: (state, action) => {
        state.groups = action.payload;
      },
      // eslint-disable-next-line
      [getGroupStore.rejected]: (state, action) => {
        state.groups = [];
      },
      [addGroupStore.fulfilled]: (state, action) => {
        state.groups.push(action.payload);
      },
      // eslint-disable-next-line
      [addGroupStore.rejected]: (state, action) => {
        // state.groups = [];
      },
      [deleteGroupStore.fulfilled]: (state, action) => {
        state.groups = state.groups.filter(
          (group) => group.id !== action.meta.arg,
        );
      },
      // eslint-disable-next-line
      [deleteGroupStore.rejected]: (state, action) => {
        // state.groups = [];
      },
    },
  });
  
  const { reducer } = groupSlice;
  export default reducer;