import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userRequest from "../../api/User/user.request.js";

const token = localStorage.getItem("token");

export const login = createAsyncThunk(
  "api/user/login",
  async ({ username, password }, thunkAPI) => {
    const data = { username, password };
    try {
      const response = await userRequest.login(data);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async () => {
  userRequest.logout();
});

const initialState = token
  ? { isLoggedIn: true, token, error: null }
  : { isLoggedIn: false, token: null, error: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    /* eslint-disable no-param-reassign */
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.error = null;
    },
    /* eslint-disable no-param-reassign */
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = action.payload;
    },
    // eslint-disable-next-line
    /* eslint-disable no-param-reassign */
    [logout.fulfilled]: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.error = null;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
