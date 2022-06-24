import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
  'comments/loadComments',
  async (obj) => {
    const data = await fetch(`https://www.reddit.com/r/${obj.subreddit}/${obj.id}.json`);
    const json = await data.json();
    const arr = [obj.id, json];
    return arr;
  }
);


const options = {
  name:"comments",
  initialState:{
    areCommentsLoading: false,
    failedToLoadComments: false,
    commentsByArticleId: {},
    articlesClicked: []
  },
  reducers : {
    toggleClickedArticleList: (state, action) => {
      const newArray = state.articlesClicked.includes(action.payload) ? state.articlesClicked.filter((article) => article!==action.payload) : [...state.articlesClicked, action.payload]
      state.articlesClicked = newArray
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
      state.commentsByArticleId[action.payload[0]] = action.payload[1][1].data.children.map((child)=> child.data)
      state.areCommentsLoading = false;
      state.failedToLoadComments = false;
    },

  }}


export const commentsSlice = createSlice(options);

export const articlesClicked = state => state.comments.articlesClicked;

export const comments = state => state.comments.commentsByArticleId;

export const {toggleClickedArticleList} = commentsSlice.actions

export default commentsSlice.reducer


