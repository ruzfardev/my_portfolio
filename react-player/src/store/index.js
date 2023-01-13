import { configureStore } from '@reduxjs/toolkit';
import  musicList  from '../reducers';
export const store = configureStore({
  reducer: {
    musicList,
  },
  middleware: [],
  devTools: true,
});
