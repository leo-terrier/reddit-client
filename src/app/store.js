import { configureStore } from '@reduxjs/toolkit';
import feedReducer from '../features/feed/feedSlice.js';
import commentsReducer from '../components/comments/commentsSlice.js';

export default configureStore({
  reducer: {
    feed: feedReducer,
    comments: commentsReducer,
  },
});
