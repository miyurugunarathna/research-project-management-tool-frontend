import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import chatRequest from "../../api/Chat/chat.request.js";

export const getchatStore = createAsyncThunk(
  "chat/getchat",
  async (groupId, thunkAPI) => {
    try {
      const res = await chatRequest.getChats(groupId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const sendMessageStore = createAsyncThunk(
  "chat/sendMessage",
  async (chat, thunkAPI) => {
    try {
      const res = await chatRequest.sendMessage(chat);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

/*

export const deletechatStore = createAsyncThunk(
  "chat/deletechat",
  async (chatId, thunkAPI) => {
    try {
      const res = await chatRequest.deletechat(chatId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
); */

const initialState = {
  chats: [],
};

export const chatSlice = createSlice({
  name: "chats",
  initialState,
  extraReducers: {
    [getchatStore.fulfilled]: (state, action) => {
      // eslint-disable-next-line
      state.chats = action.payload.data;
    },
    // eslint-disable-next-line
    [getchatStore.rejected]: (state, action) => {
      // eslint-disable-next-line
      state.chats = [];
    },
    [sendMessageStore.fulfilled]: (state, action) => {
      state.chats.push(action.payload.data);
    },
    // eslint-disable-next-line
    [sendMessageStore.rejected]: (state, action) => {
      // state.chats = [];
    },
    // [deletechatStore.fulfilled]: (state, action) => {
    //   state.chats = state.chats.filter(
    //     (chat) => chat.id !== action.meta.arg,
    //   );
    // },
    // // eslint-disable-next-line
    // [deletechatStore.rejected]: (state, action) => {
    //   // state.chats = [];
    // },
  },
});

const { reducer } = chatSlice;
export default reducer;
