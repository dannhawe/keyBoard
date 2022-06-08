import { configureStore } from '@reduxjs/toolkit';
import ContentReducer from './reducer/ContentReducer';

export const store = configureStore({
  reducer: {
    ContentReducer
  },
});
