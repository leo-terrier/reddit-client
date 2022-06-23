import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
  'comments/loadComments',
  async (obj) => {
    const data = await fetch(`https://www.reddit.com/r/${obj.subreddit}/${obj.id}.json`);
    const json = await data.json();
    return json;
  }
);


const options = {
  name:"comments",
  initialState:[],
  reducers : {
    clearComments : (state) => {
      state.comments = []
    }

  }, 
  extrareducers: {
    [loadComments.fulfilled] : (state, action) => {
      state.comments = action.payload[1].data.children.map((child)=> child.data)
    }
  }}


export const commentsSlice = createSlice(options);

export const selectComments = state => state.comments;

export const {clearComments} = commentsSlice.actions

export default commentsSlice.reducer


