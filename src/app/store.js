import { configureStore } from '@reduxjs/toolkit';
import markdownReducer from './markdown/markdownSlice';

export default configureStore({
  reducer: {
    markdownInput: markdownReducer,
  },
});
