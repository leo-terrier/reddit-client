import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const loadSpecificSubreddit = createAsyncThunk(
  'feed/loadSpecificSubreddit',
  async (subreddit, thunkAPI) => {
    const data = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
    const json = await data.json();
    return json;
  }
);

export const generateFeedFromSearch = createAsyncThunk(
  'feed/generateFeedFromSearch',
  async (searchTerm) => {
    searchTerm = searchTerm.replaceAll(' ', '%20')
    const data = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`);
    const json = await data.json();
    console.log(json)
    return json;
  }
);

const options = {
  name:"feed",
  initialState: {
    isFeedPending: false,
    failedToLoadFeed: false,
    feed: [],
  },
 
  extraReducers: {
    [loadSpecificSubreddit.pending] : (state, action) => {
      state.isFeedPending= true;
      state.failedToLoadFeed= false;
    },
    [loadSpecificSubreddit.rejected] : (state, action) => {
      state.isFeedPending= false;
      state.failedToLoadFeed= true;
    },
    [loadSpecificSubreddit.fulfilled] : (state, action) => {
      state.feed = action.payload.data.children.map((child) => child.data);
      state.isFeedPending= false;
      state.failedToLoadFeed= false;
    },
    [generateFeedFromSearch.fulfilled] : (state, action) => {
      state.feed = action.payload.data.children.map((child) => child.data )
    },
    [generateFeedFromSearch.pending] : (state, action) => {
      state.isFeedPending= true;
      state.failedToLoadFeed= false;
    },
    [generateFeedFromSearch.rejected] : (state, action) => {
      state.isFeedPending= false;
      state.failedToLoadFeed= true;
    },
  
  }
}

export const feedSlice = createSlice(options);

export const selectFeed = (state) => state.feed.feed

export default feedSlice.reducer