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
  initialState:{
    areCommentsLoading: false,
    failedToLoadComments: false,
    comments: []
  },
  reducers : {
    clearComments : (state) => {
      state.comments = []
    }

  }, 
  extraReducers: {
    [loadComments.pending] : (state, action) => {
      state.areCommentsLoading = true;
      state.failedToLoadComments = false;
    },
    [loadComments.rejected] : (state, action) => {
      state.areCommentsLoading = false;
      state.failedToLoadComments = true;    },
      
    [loadComments.fulfilled] : (state, action) => {
      state.comments = action.payload[1].data.children.map((child)=> child.data)
      state.areCommentsLoading = false;
      state.failedToLoadComments = false;
      console.log(state.comments)
    },

  }}


export const commentsSlice = createSlice(options);

export const selectComments = state => state.comments.comments;

export const {clearComments} = commentsSlice.actions

export default commentsSlice.reducer


