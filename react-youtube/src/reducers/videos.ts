import { createSlice } from '@reduxjs/toolkit';

export const defaultVideosState = createSlice({
  name: 'defaultVideosState',
  initialState: {
    videos: [],
    loading: false,
    error: null,
  },
  reducers: {
    getVideosRequest: (state) => {
      state.loading = true;
    },
    getVideosSuccess: (state, action) => {
      state.videos = action.payload.items;
      state.loading = false;
    },
    getVideosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  getVideosRequest,
  getVideosSuccess,
  getVideosFailure,
} = defaultVideosState.actions;
export default defaultVideosState.reducer;
